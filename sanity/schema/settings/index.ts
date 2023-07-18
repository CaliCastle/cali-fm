import { CogIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { z } from 'zod'

import podcast from '~/sanity/schema/podcast'

export const Settings = z.object({
  podcast: z.object({
    _type: z.literal('reference'),
    _ref: z.string(),
  }),
  title: z.string(),
  titleTemplate: z.string().optional(),
  description: z.string(),
  keywords: z.array(z.string()).optional(),
  favicon: z
    .object({
      _type: z.literal('image'),
      asset: z.object({
        _type: z.literal('reference'),
        _ref: z.string(),
      }),
    })
    .optional(),
  twitter: z
    .object({
      creator: z.string().optional(),
      card: z.enum(['summary', 'summary_large_image']).optional(),
    })
    .optional(),
  canonical: z.string().optional(),
})
export type Settings = z.infer<typeof Settings>

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: {
    select: { title: 'title', subtitle: 'description' },
    prepare({ title }) {
      return {
        title: `${title} Settings`,
      }
    },
  },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'podcast',
      title: 'Podcast',
      description: 'The podcast this site is for.',
      type: 'reference',
      to: [{ type: podcast.name }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      description: 'The title of the site.',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleTemplate',
      description: 'The title template for sub pages (e.g. %s | Your Site).',
      title: 'Title Template',
      type: 'string',
    }),
    defineField({
      name: 'description',
      description: 'Used in the <meta> description tag for SEO.',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(255).required(),
    }),
    defineField({
      name: 'keywords',
      description: 'Used in the <meta> keywords tag for SEO.',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      description: 'Used to generate favicons. Minimum 180 x 180 pixels.',
      type: 'image',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'object',
      fields: [
        defineField({
          name: 'creator',
          title: 'Username',
          description:
            'The username handle of your Twitter account (include "@").',
          type: 'string',
        }),
        defineField({
          name: 'card',
          title: 'Card Type',
          description: 'The preview card type when posted as links on Twitter.',
          type: 'string',
          options: {
            layout: 'radio',
            list: [
              { title: 'Small', value: 'summary' },
              { title: 'Large', value: 'summary_large_image' },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      description: 'The "main" version of the URL of your site.',
      type: 'url',
    }),
  ],
})
