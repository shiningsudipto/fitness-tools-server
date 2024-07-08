// productValidation.ts
import { z } from 'zod'

const createProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be a string',
      })
      .min(1, 'Name is required'),
    price: z
      .number({
        invalid_type_error: 'Price must be a number',
      })
      .min(0, 'Price must be a positive number'),
    description: z
      .string({
        invalid_type_error: 'Description must be a string',
      })
      .min(1, 'Description is required'),
    images: z
      .array(
        z.string({
          invalid_type_error: 'Each image URL must be a string',
        }),
      )
      .min(1, 'At least one image is required'),
    category: z
      .string({
        invalid_type_error: 'Category must be a string',
      })
      .min(1, 'Category is required'),
    stock: z
      .number({
        invalid_type_error: 'Stock must be a number',
      })
      .min(0, 'Stock must be a positive number'),
  }),
})

export const ProductValidations = {
  createProductValidationSchema,
}
