import { defineField, defineType } from 'sanity'
import { z } from 'zod'

import categories, { Categories } from '~/sanity/schema/categories'

import owner, { Owner } from './owner'

export const iTunes = z.object({
  author: z.string().optional(),
  owner: Owner,
  url: z.string().url().optional(),
  type: z.enum(['episodic', 'serial']).optional(),
  categories: Categories.optional(),
})
export type iTunes = z.infer<typeof iTunes>

export default defineType({
  name: 'itunes',
  title: 'iTunes settings',
  type: 'object',
  description: 'iTunes has extra configurations',
  fields: [
    defineField({
      name: 'author',
      type: 'string',
      title: 'Author',
      description: 'Podcast author, typically the host(s)',
    }),
    defineField({
      name: 'owner',
      type: owner.name,
      title: 'Owner',
    }),
    defineField({
      name: 'url',
      type: 'url',
      description:
        'Helpful for when you want to show this podcast in other contexts than iTunes',
    }),
    defineField({
      name: 'type',
      type: 'string',
      description:
        'Is this a ongoing (episodic) podcast, or is it structured in seasons?',
      options: {
        list: [
          {
            value: 'episodic',
            title: 'Episodic',
          },
          {
            value: 'serial',
            title: 'Serial',
          },
        ],
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: categories.name,
    }),
  ],
})
