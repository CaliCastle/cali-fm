import { defineType } from 'sanity'
import { z } from 'zod'

export const LinkListItem = z.object({
  title: z.string(),
  URL: z.string().url(),
  excerpt: z.string(),
  timestamp: z.string(),
})
export type LinkListItem = z.infer<typeof LinkListItem>

export default defineType({
  name: 'linkListItem',
  title: 'Link List Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'URL',
      type: 'url',
    },
    {
      name: 'excerpt',
      type: 'text',
    },
    {
      name: 'timestamp',
      type: 'string',
    },
  ],
})
