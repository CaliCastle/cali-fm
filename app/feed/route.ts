import { Podcast } from 'podcast'

import { serverFetch } from '~/sanity/client'
import { urlForImage } from '~/sanity/image'
import { getEpisodeFeedQuery } from '~/sanity/queries'
import type { Episode } from '~/sanity/schema/episode'
import type { Podcast as PodcastType } from '~/sanity/schema/podcast'

type Data = {
  podcast: PodcastType
  episodes: Episode[]
}
export async function GET() {
  const { podcast, episodes } = await serverFetch<Data>(getEpisodeFeedQuery())

  const feed = new Podcast({
    title: podcast.title,
    description: podcast.description,
    siteUrl: podcast.itunes?.url,
    imageUrl: urlForImage(podcast.coverArt).size(500, 500).url(),
    itunesImage: urlForImage(podcast.coverArt).size(1400, 1400).url(),
    language: podcast.language,
    itunesType: podcast.itunes?.type,
    // itunesCategory: podcast.itunes?.categories?.map((category) => ({
    //   text: category.title,
    // })),
  })

  return new Response(feed.buildXml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

export const revalidate = 60
