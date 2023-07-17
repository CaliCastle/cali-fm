import { PodcastIcon } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { z } from 'zod'

import host from '~/sanity/schema/host'
import { Host } from '~/sanity/schema/host'

import itunes, { iTunes } from './itunes'
import languages from './languages'

export const Podcast = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  slug: z.string(),
  description: z.string(),
  coverArt: z.object({
    asset: z.object({
      _ref: z.string(),
    }),
  }),
  language: z.string().optional(),
  hosts: z.array(Host).optional(),
  explicit: z.boolean().optional(),
  itunes: iTunes.optional(),
})
export type Podcast = z.infer<typeof Podcast>

export default defineType({
  name: 'podcast',
  title: 'Podcast',
  icon: PodcastIcon,
  description: 'Create and configure a podcast',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description:
        'Remember that if your title is too long, it may be truncated in various clients',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      description: 'That catchy tagline.',
    }),
    defineField({
      name: 'slug',
      title: 'Podcast slug',
      type: 'slug',
      description: 'For when you need to refer to your podcast in a url.',
      options: {
        source: 'title',
        // slugify: (input: string) =>
        //   input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      description:
        'What is this podcast about and why should people subscribe to it?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverArt',
      title: 'Cover art',
      type: 'image',
      description:
        'The image should be either jpg or png. Preferably 3000 x 3000, minimum 1400 x 1400 pixels.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'copyright',
      type: 'string',
      description: 'Who owns the rights to this podcast?',
    }),
    defineField({
      name: 'hosts',
      title: 'Hosts',
      description: 'Who is hosting this podcast?',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: host.name }] }],
    }),
    defineField({
      name: 'language',
      type: 'string',
      description: 'What language is this podcast in?',
      options: {
        list: languages,
      },
    }),
    defineField({
      name: 'explicit',
      type: 'boolean',
      description:
        'Do you need to warn parents about the content in this podcast? (You can set this for individual episodes to)',
    }),
    defineField({
      name: 'itunes',
      title: 'iTunes settings',
      type: itunes.name,
      description: 'iTunes has extra configurations',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      description: 'description',
      media: 'coverArt',
    },
  },
})
