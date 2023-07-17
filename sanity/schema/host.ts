import { UserIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { z } from 'zod'

export const Host = z.object({
  name: z.string(),
  description: z.string().optional(),
  image: z.object({
    asset: z.object({
      _ref: z.string(),
    }),
  }),
})
export type Host = z.infer<typeof Host>

export default defineType({
  name: 'host',
  title: 'Host',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Describe your host in the most interesting way.',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
