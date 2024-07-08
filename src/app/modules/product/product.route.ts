import express from 'express'
import { productControllers } from './product.controller'

const router = express.Router()
// product routes
router.get('/my-bookings', productControllers.createProduct)

export const ProductRoutes = router
