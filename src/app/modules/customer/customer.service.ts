import { TCustomer } from './customer.interface'
import { Customer } from './customer.model'

const createCustomerIntoDb = async (payload: TCustomer) => {
  const result = await Customer.create(payload)
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
