import express from 'express'
import { productControllers } from './product.controller'

const router = express.Router()
// product routes
router.post('/product-create', productControllers.createProduct)
router.get('/products', productControllers.getAllProduct)
router.get('/product-details/:id', productControllers.getSingleProduct)
router.delete('/product-delete/:id', productControllers.deleteProduct)
router.patch('/product-update/:id', productControllers.updateProduct)

export const ProductRoutes = router
