import { Product } from '../product/product.model'
import { TCustomer } from './customer.interface'
import { Customer } from './customer.model'

const createCustomerIntoDb = async (payload: TCustomer) => {
  const result = await Customer.create(payload)
  const { cartItems } = payload
  // console.log(cartItems)
  for (const item of cartItems) {
    const product = await Product.findById(item.id)
    if (product && product.stock >= item.quantity) {
      product.stock -= item.quantity
      await product.save()
    } else {
      throw new Error(`Insufficient stock for product with ID ${item.id}`)
    }
  }
  return result
}

const getSingleCustomerFromDb = async (email: string) => {
  const result = await Customer.findOne({ email })
  if (!result) {
    throw new Error('Customer not available')
  }
  return result
}

export const customerServices = {
  createCustomerIntoDb,
  getSingleCustomerFromDb,
}
