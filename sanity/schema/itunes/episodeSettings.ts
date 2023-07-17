import { defineField, defineType } from 'sanity'
import { z } from 'zod'

export const iTunesEpisodeSettings = z.object({
  type: z.enum(['full', 'trailer', 'bonus']),
  season: z.number().optional(),
  episode: z.number().optional(),
})
export type iTunesEpisodeSettings = z.infer<typeof iTunesEpisodeSettings>

export default defineType({
  name: 'itunesEpisodeSettings',
  title: 'iTunes Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Episode type',
      type: 'string',
      options: {
        list: [
          { value: 'full', title: 'Full' },
          { value: 'trailer', title: 'Trailer' },
          { value: 'bonus', title: 'Bonus' },
        ],
      },
    }),
    defineField({
      name: 'season',
      title: 'Season #',
      type: 'number',
    }),
    defineField({
      name: 'episode',
      title: 'Episode #',
      type: 'number',
    }),
  ],
})
