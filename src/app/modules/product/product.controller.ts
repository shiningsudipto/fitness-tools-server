import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { productServices } from './product.service'

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

export const productControllers = {
  createProduct,
}
