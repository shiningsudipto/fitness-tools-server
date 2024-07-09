import { z } from 'zod'

const createCustomerValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be a string',
      })
      .min(1, 'Name is required'),
    email: z
      .string({
        invalid_type_error: 'Email must be a string',
      })
      .email('Invalid email address'),
    phone: z
      .string({
        invalid_type_error: 'Phone number must be a string',
      })
      .min(10, 'Phone number must be at least 10 characters')
      .max(15, 'Phone number cannot exceed 15 characters'),
    address: z
      .string({
        invalid_type_error: 'Address must be a string',
      })
      .min(1, 'Address is required'),
  }),
})

export const CustomerValidations = {
  createCustomerValidationSchema,
}
