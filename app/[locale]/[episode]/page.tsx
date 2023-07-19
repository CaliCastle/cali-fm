import { compile } from 'html-to-text'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EpisodePage } from '~/app/[locale]/[episode]/EpisodePage'
import { getOpenGraphImage } from '~/app/getOpenGraphImage'
import { getPodcastEpisode } from '~/podcast.config'

export async function generateMetadata({
  params,
}: {
  params: { episode: string; locale: string }
}) {
  const data = await getPodcastEpisode(params.episode)
  if (!data) {
    return {}
  }

  const description = compile()(data.description).split('\n').join(' ')

  return {
    title: data.title,
    description,
    openGraph: {
      title: data.title,
      description,
      locale: params.locale,
      type: 'website',
      images: data.coverArt ? [getOpenGraphImage(data.coverArt)] : undefined,
    },
    icons: data.coverArt
      ? {
          icon: data.coverArt,
          apple: data.coverArt,
        }
      : undefined,
  } satisfies Metadata
}

export default async function ServerEpisodePage({
  params: { episode },
}: {
  params: { episode: string }
}) {
  const data = await getPodcastEpisode(episode)
  if (!data) {
    notFound()
  }

  return <EpisodePage episode={data} />
}

export const revalidate = 10
