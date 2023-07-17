import { CassetteTapeIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { z } from 'zod'

import episodeSettings, {
  iTunesEpisodeSettings,
} from '~/sanity/schema/itunes/episodeSettings'
import linkListItem, { LinkListItem } from '~/sanity/schema/linkListItem'
import podcast from '~/sanity/schema/podcast'

export const Episode = z.object({
  _id: z.string(),
  title: z.string(),
  podcast: z.array(
    z.object({
      _type: z.literal('reference'),
      _ref: z.string(),
    })
  ),
  publishedAt: z.string(),
  file: z.string(),
  duration: z.string().optional(),
  explicit: z.boolean().optional(),
  slug: z.string().optional(),
  summary: z.string().optional(),
  notes: z.array(z.any()).optional(),
  tags: z.array(z.string()).optional(),
  linkList: z.array(LinkListItem).optional(),
  coverArt: z.object({
    _type: z.literal('image'),
    asset: z.object({
      _type: z.literal('reference'),
      _ref: z.string(),
    }),
  }),
  itunes: iTunesEpisodeSettings.optional(),
})
export type Episode = z.infer<typeof Episode>

export default defineType({
  name: 'episode',
  title: 'Episode',
  icon: CassetteTapeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Remember that long titles can be truncated in podcast apps',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'podcast',
      description: 'Choose podcast(s) to publish this episode in',
      type: 'array',
      of: [{ type: 'reference', weak: true, to: [{ type: podcast.name }] }],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publish time (in UTC)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Podcast media file',
      description:
        'Most podcatchers support .mp3, but other audio-formats may work as well',
      type: 'file',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      description: '(HH:MM:SS)',
      type: 'string',
    }),
    defineField({
      name: 'explicit',
      title: 'Explicit content',
      type: 'boolean',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description:
        'An episode summary is a string containing one or more descriptive sentences summarizing your episode for potential listeners. You can specify up to 250 characters.',
      type: 'text',
      validation: (Rule) => Rule.max(250),
    }),
    defineField({
      name: 'notes',
      title: 'Show notes',
      description:
        'An episode note. Where encoded is a string containing information about your episode.',
      type: 'array',
      of: [
        {
          type: 'block',
          // only h2 is allowed
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
          ],
          // disallow code annotations and strikethrough
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'linkList',
      title: 'Link list',
      description:
        'A more structured way to add links for show notes. Will be compiled at the end of the episode content field in a podcast RSS feed',
      type: 'array',
      of: [
        {
          type: linkListItem.name,
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Episode slug',
      type: 'slug',
      description: 'When you need to refer to your podcast episode in a url',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      options: {
        layout: 'tags',
      },
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'coverArt',
      title: 'Cover art',
      type: 'image',
    }),
    defineField({
      name: 'itunes',
      title: 'iTunes Settings',
      type: episodeSettings.name,
    }),
  ],
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Publish Date, Old',
      name: 'publishDateAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'podcast.0.title',
      description: 'summary',
      media: 'coverArt',
      publishedAt: 'publishedAt',
    },
    prepare({ title, subtitle, description, media, publishedAt }) {
      return {
        title,
        esubtitle: `${new Date(publishedAt).toDateString()} – ${subtitle}`,
        description,
        media,
      }
    },
  },
})
