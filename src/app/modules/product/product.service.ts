import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData)
  return result
}

const getSingleProductFromDb = async (id: string) => {
  const product = await Product.findById(id)
  return product
}

export const productServices = {
  createProductIntoDb,
  getSingleProductFromDb,
}
