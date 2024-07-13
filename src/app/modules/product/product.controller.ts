import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { productServices } from './product.service'
import { Product } from './product.model'

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body
  const result = await productServices.createProductIntoDb(productData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully',
    data: result,
  })
})

export interface ProductFilters {
  searchTerm?: string
  categories?: string[]
  sortByPrice?: 'asc' | 'desc'
  price?: number
}

const getAllProduct = catchAsync(async (req, res) => {
  const { searchTerm, categories, sortByPrice, price } = req.query as Partial<
    Record<keyof ProductFilters, string>
  >

  // eslint-disable-next-line prefer-const
  let filters: ProductFilters = {
    searchTerm,
    categories: categories ? categories.split(',') : [],
    sortByPrice: undefined,
    price: price ? parseFloat(price) : undefined,
  }

  if (sortByPrice === 'asc' || sortByPrice === 'desc') {
    filters.sortByPrice = sortByPrice
  }

  const result = await productServices.getAllProductFromDB(filters)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  })
})

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await Product.findById(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  // console.log('id', id)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = await Product.findByIdAndDelete(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: '',
  })
})

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const payload = req.body
  const result = await productServices.updateProductIntoDb(id, payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  })
})

export const productControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
}
