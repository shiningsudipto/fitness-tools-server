import { Schema, model } from 'mongoose'
import { TProduct } from './product.interface'

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
)

export const Product = model<TProduct>('product', productSchema)
