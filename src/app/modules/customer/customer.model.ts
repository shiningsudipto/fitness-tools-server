// customer.model.ts
import { Schema, model } from 'mongoose'
import { TCustomer } from './customer.interface'

const customerSchema = new Schema<TCustomer>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
})

export const Customer = model<TCustomer>('Customer', customerSchema)
