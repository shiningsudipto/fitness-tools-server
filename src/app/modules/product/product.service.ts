import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData)
  return result
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
  updateProductIntoDb,
}
