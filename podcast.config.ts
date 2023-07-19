import { cache } from 'react'
import { parse } from 'rss-to-json'

/**
 * TODO: Add your podcast config here
 */
export const podcastConfig: PodcastConfig = {
  /**
   * Step 1. Add your podcast directories here
   * We support links from:
   *   Apple Podcasts, Google Podcasts, Spotify, Stitcher, Overcast,
   *   Pocket Casts Castro, 小宇宙, 哔哩哔哩, YouTube
   */
  directories: [
    'https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584',
    'https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL',
    'https://www.youtube.com/lexfridman',
  ],
  /**
   * Step 2. Add your podcast hosts here
   */
  hosts: [
    {
      name: 'Lex Fridman',
      link: 'https://lexfridman.com/',
    },
  ],
}

/**
 * Get podcast via RSS feed.
 */
export const getPodcast = cache(async () => {
  const feed = await parse(process.env.NEXT_PUBLIC_PODCAST_RSS || '')
  const podcast: Podcast = {
    title: feed.title,
    description: feed.description,
    link: feed.link,
    coverArt: feed.image,
  }

  return podcast
})

/**
 * Encode episode id.
 * (Certain episode id contains special characters that are not allowed in URL)
 */
function encodeEpisodeId(raw: string): string {
  if (!raw.startsWith('http')) {
    return raw
  }

  const url = new URL(raw)
  const path = url.pathname.split('/')
  const lastPathname = path[path.length - 1]

  if (lastPathname === '' && url.search) {
    return url.search.slice(1)
  }

  return lastPathname
}

/**
 * Get podcast episodes via RSS feed.
 */
export const getPodcastEpisodes = cache(async () => {
  const feed = await parse(process.env.NEXT_PUBLIC_PODCAST_RSS || '')
  const episodes: Episode[] = feed.items.map((item) => ({
    id: encodeEpisodeId(item.id),
    title: item.title,
    description: item.description,
    link: item.link,
    published: item.published,
    content: item.content,
    duration: item.itunes_duration,
    enclosure: item.enclosures[0],
    coverArt: item.itunes_image?.href,
  }))

  return episodes
})

/**
 * Get podcast episode by id.
 */
export const getPodcastEpisode = cache(async (id: string) => {
  const episodes = await getPodcastEpisodes()
  const decodedId = decodeURIComponent(id)
  return episodes.find((episode) => episode.id === decodedId)
})
