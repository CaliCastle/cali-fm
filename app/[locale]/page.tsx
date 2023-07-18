import { Episodes } from '~/app/[locale]/Episodes'
import { getPodcastEpisodes } from '~/podcast.config'

export default async function IndexPage() {
  const episodes = await getPodcastEpisodes()

  return <Episodes episodes={episodes} />
}

export const revalidate = 10
