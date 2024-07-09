import { Router } from 'express'
import { ProductRoutes } from '../modules/product/product.route'
import { customerRoutes } from '../modules/customer/customer.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/',
    route: ProductRoutes,
  },
  {
    path: '/',
    route: customerRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
