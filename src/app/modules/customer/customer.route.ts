import express from 'express'
import { customerControllers } from './customer.controller'

const router = express.Router()
// customer routes
router.post('/customer-create', customerControllers.createCustomer)
router.get('/customers', customerControllers.getAllCustomer)
router.get('/customer-info', customerControllers.getSingleCustomer)

export const customerRoutes = router
