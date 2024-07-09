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

const getAllProduct = catchAsync(async (req, res) => {
  const result = await Product.find()
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
