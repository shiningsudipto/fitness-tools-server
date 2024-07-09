import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { Customer } from './customer.model'
import { customerServices } from './customer.service'

const createCustomer = catchAsync(async (req, res) => {
  const productData = req.body
  const result = await customerServices.createCustomerIntoDb(productData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer created successfully',
    data: result,
  })
})

const getAllCustomer = catchAsync(async (req, res) => {
  const result = await Customer.find()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer retrieved successfully',
    data: result,
  })
})

const getSingleCustomer = catchAsync(async (req, res) => {
  const email = req.query.email as string
  const result = await customerServices.getSingleCustomerFromDb(email)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer retrieved successfully',
    data: result,
  })
})

export const customerControllers = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
}
