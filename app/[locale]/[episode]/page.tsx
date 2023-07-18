import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { EpisodePage } from '~/app/[locale]/[episode]/EpisodePage'
import { serverFetch } from '~/sanity/client'
import { urlForImage } from '~/sanity/image'
import { getEpisodeQuery } from '~/sanity/queries'
import type { Episode } from '~/sanity/schema/episode'

export async function generateMetadata({
  params,
}: {
  params: { episode: string; locale: string }
}) {
  const data = await serverFetch<Episode | undefined>(getEpisodeQuery(), {
    slug: params.episode,
  })
  if (!data) {
    return {}
  }

  return {
    title: data.title,
    description: `${data.title}: ${data.summary}`,
    openGraph: {
      title: data.title,
      description: `${data.title}: ${data.summary}`,
      locale: params.locale,
      type: 'website',
    },
    icons: data.coverArt
      ? {
          icon: urlForImage(data.coverArt).size(32, 32).url(),
          apple: urlForImage(data.coverArt).size(180, 180).url(),
        }
      : undefined,
  } satisfies Metadata
}

export default async function ServerEpisodePage({
  params: { episode },
}: {
  params: { episode: string }
}) {
  const data = await serverFetch(getEpisodeQuery(), { slug: episode })
  if (!data) {
    notFound()
  }

  return <EpisodePage episode={data} />
}

export const runtime = 'edge'
export const revalidate = 10
