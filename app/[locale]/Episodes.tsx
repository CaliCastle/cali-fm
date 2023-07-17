'use client'

import { ComponentProps } from '@zolplay/react'
import {
  PauseCircleIcon,
  PauseIcon,
  PlayCircleIcon,
  PlayIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useAudioPlayer } from '~/app/(audio)/AudioProvider'
import { Container } from '~/app/[locale]/Container'
import { FormattedDate } from '~/app/[locale]/FormattedDate'
import { urlForImage } from '~/sanity/image'
import type { Episode } from '~/sanity/schema/episode'

function PlayPauseIcon({
  playing,
  ...props
}: ComponentProps<{ playing: boolean }>) {
  return playing ? (
    <PauseIcon fill="none" {...props} />
  ) : (
    <PlayIcon fill="none" {...props} />
  )
}

function EpisodeRow({ episode }: { episode: Episode }) {
  const date = new Date(episode.publishedAt)

  const audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.file,
        type: 'audio/mpeg',
      },
      link: `/${episode.slug}`,
    }),
    [episode]
  )
  const player = useAudioPlayer(audioPlayerData)
  const t = useTranslations('IndexPage')

  return (
    <article
      aria-labelledby={`episode-${episode.slug}`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex w-full items-center">
          <div className="flex flex-1 flex-col items-start">
            <h2
              id={`episode-${episode.slug}`}
              className="mt-2 text-lg font-bold text-stone-900"
            >
              <Link href={`/${episode.slug}`}>{episode.title}</Link>
            </h2>
            <FormattedDate
              date={date}
              className="order-first font-mono text-sm leading-7 text-stone-500"
            />
            <p className="mt-1 line-clamp-2 text-base leading-7 text-stone-500">
              {episode.summary}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => player.toggle()}
                className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                aria-label={t(
                  player.playing ? 'pause_episode' : 'play_episode',
                  { episode: episode.title }
                )}
              >
                <PlayPauseIcon
                  playing={player.playing ?? false}
                  className="h-4 w-4 stroke-current"
                />
                <span className="ml-2" aria-hidden="true">
                  {t('listen')}
                </span>
              </button>
              <span
                aria-hidden="true"
                className="text-sm font-bold text-stone-400"
              >
                /
              </span>
              <Link
                href={`/${episode.slug}`}
                className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                aria-label={t('show_notes_aria_label', {
                  episode: episode.title,
                })}
              >
                {t('show_notes')}
              </Link>
            </div>
          </div>
          {episode.coverArt && (
            <Link
              href={`/${episode.slug}`}
              className="relative ml-2 aspect-square h-[90px] shrink-0 lg:ml-4 lg:h-[136px]"
            >
              <Image
                src={urlForImage(episode.coverArt).size(300, 300).url()}
                alt={episode.title}
                className="rounded-lg lg:rounded-xl"
                fill
              />
            </Link>
          )}
        </div>
      </Container>
    </article>
  )
}

export function Episodes({ episodes }: { episodes: Episode[] }) {
  const t = useTranslations('IndexPage')

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-stone-900">
          {t('episodes')}
        </h1>
      </Container>
      <div className="divide-y divide-stone-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-stone-100">
        {episodes.map((episode) => (
          <EpisodeRow key={episode._id} episode={episode} />
        ))}
      </div>
    </div>
  )
}
