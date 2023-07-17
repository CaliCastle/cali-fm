import { defineField, defineType } from 'sanity'
import { z } from 'zod'

export const Owner = z.object({
  email: z.string().email().optional(),
  name: z.string().optional(),
})
export type Owner = z.infer<typeof Owner>

export default defineType({
  name: 'owner',
  title: 'Owner',
  type: 'object',
  description:
    'The name and email of the person or organization that iTunes should list in their different views',
  fields: [
    defineField({
      name: 'email',
      type: 'email',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
