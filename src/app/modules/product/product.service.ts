import { ProductFilters } from './product.controller'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData)
  return result
}

const getAllProductFromDB = async (filters: ProductFilters) => {
  // console.log('filter data:', filters)
  // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
  let query: Record<string, any> = {}

  // Handle search term
  if (filters.searchTerm) {
    query.name = { $regex: filters.searchTerm, $options: 'i' } // Case-insensitive search
  }

  // Handle categories
  if (filters.categories && filters.categories.length > 0) {
    query.category = { $in: filters.categories }
  }

  // Handle price filtering
  if (filters.price !== undefined) {
    query.price = { $lte: filters.price } // Filter products under a certain price
  }

  let products = await Product.find(query)

  // Handle sorting by price
  if (filters.sortByPrice) {
    const sortOrder = filters.sortByPrice === 'asc' ? 1 : -1
    products = products.sort((a, b) => sortOrder * (a.price - b.price))
  }

  return products
}

const updateProductIntoDb = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

export const productServices = {
  createProductIntoDb,
  getAllProductFromDB,
  updateProductIntoDb,
}
