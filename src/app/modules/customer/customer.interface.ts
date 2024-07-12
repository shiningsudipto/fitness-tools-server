interface IOrderItem {
  id: string // This will be the product ID
  quantity: number
}
export interface TCustomer {
  name: string
  email: string
  phone: string
  address: string
  cartItems: IOrderItem[]
}
