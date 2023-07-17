import { notFound } from 'next/navigation'

import { EpisodePage } from '~/app/[locale]/[episode]/EpisodePage'
import { serverFetch } from '~/sanity/client'
import { getEpisodeQuery } from '~/sanity/queries'

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

export const revalidate = 10
