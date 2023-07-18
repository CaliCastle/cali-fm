'use client'

import { ComponentProps } from '@zolplay/react'
import { compile } from 'html-to-text'
import { PauseIcon, PlayIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useAudioPlayer } from '~/app/(audio)/AudioProvider'
import { Container } from '~/app/[locale]/Container'
import { FormattedDate } from '~/app/[locale]/FormattedDate'

const compiler = compile()

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
  const date = new Date(episode.published)

  const audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.enclosure.url,
        type: episode.enclosure.type,
      },
      link: `/${episode.id}`,
    }),
    [episode]
  )
  const player = useAudioPlayer(audioPlayerData)
  const t = useTranslations('IndexPage')

  return (
    <article
      aria-labelledby={`episode-${episode.id}`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex items-center">
          <div className="flex flex-1 flex-col items-start">
            <h2
              id={`episode-${episode.id}`}
              className="mt-2 text-lg font-bold text-stone-900 dark:text-neutral-100"
            >
              <Link href={`/${episode.id}`}>{episode.title}</Link>
            </h2>
            <FormattedDate
              date={date}
              className="order-first font-mono text-sm leading-7 text-stone-500 dark:text-neutral-500"
            />
            <p className="mt-1 line-clamp-2 break-all text-base leading-7 text-stone-500 dark:text-neutral-500">
              {compiler(episode.description)}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => player.toggle()}
                className="flex items-center text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200 dark:active:text-blue-100"
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
                className="text-sm font-bold text-stone-400 dark:text-neutral-600"
              >
                /
              </span>
              <Link
                href={`/${episode.id}`}
                className="flex items-center text-sm font-bold leading-6 text-blue-500 hover:text-blue-700 active:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200 dark:active:text-blue-100"
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
              href={`/${episode.id}`}
              className="relative ml-2 block shrink-0 lg:ml-4"
            >
              <Image
                src={episode.coverArt}
                alt={episode.title}
                width={136}
                height={136}
                className="h-[90px] w-[90px] rounded-lg lg:h-[136px] lg:w-[136px] lg:rounded-xl"
                unoptimized
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
        <h1 className="text-2xl font-bold leading-7 text-stone-900 dark:text-neutral-100">
          {t('episodes')}
        </h1>
      </Container>
      <div className="divide-y divide-stone-100 dark:divide-neutral-800 sm:mt-4 lg:mt-8 lg:border-t lg:border-stone-100 dark:lg:border-neutral-800">
        {episodes.map((episode) => (
          <EpisodeRow key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  )
}
