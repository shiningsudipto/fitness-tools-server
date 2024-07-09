import express from 'express'
import { productControllers } from './product.controller'

const router = express.Router()
// product routes
router.get('/products', productControllers.getAllProduct)
router.get('/product-details/:id', productControllers.getSingleProduct)
router.delete('/product-delete/:id', productControllers.deleteProduct)
router.post('/create-product', productControllers.createProduct)

export const ProductRoutes = router
