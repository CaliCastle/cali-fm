import { Episodes } from '~/app/[locale]/Episodes'
import { serverFetch } from '~/sanity/client'
import { getEpisodesOverviewQuery } from '~/sanity/queries'
import type { Episode } from '~/sanity/schema/episode'

export default async function IndexPage() {
  const episodes = await serverFetch<Episode[]>(getEpisodesOverviewQuery())

  return <Episodes episodes={episodes} />
}

export const revalidate = 10
