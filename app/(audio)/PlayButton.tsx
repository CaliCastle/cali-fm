'use client'

import type { ComponentProps } from '@zolplay/react'
import { clsxm } from '@zolplay/utils'
import { useTranslations } from 'next-intl'

import { useAudioPlayer } from '~/app/(audio)/AudioProvider'

function PauseIcon(props: ComponentProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 22 28" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 0C0.671573 0 0 0.671572 0 1.5V26.5C0 27.3284 0.671573 28 1.5 28H4.5C5.32843 28 6 27.3284 6 26.5V1.5C6 0.671573 5.32843 0 4.5 0H1.5ZM17.5 0C16.6716 0 16 0.671572 16 1.5V26.5C16 27.3284 16.6716 28 17.5 28H20.5C21.3284 28 22 27.3284 22 26.5V1.5C22 0.671573 21.3284 0 20.5 0H17.5Z"
      />
    </svg>
  )
}

function PlayIcon(props: ComponentProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" {...props}>
      <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z" />
    </svg>
  )
}

export function PlayButton({
  player,
  size = 'large',
  className,
}: {
  player: ReturnType<typeof useAudioPlayer>
  size?: 'large' | 'medium' | 'small'
  className?: string
}) {
  const t = useTranslations('AudioPlayer')

  return (
    <button
      type="button"
      className={clsxm(
        'group relative flex flex-shrink-0 items-center justify-center rounded-full bg-neutral-700 outline-none hover:bg-neutral-900 dark:bg-neutral-600 dark:ring-neutral-500 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:focus:ring-neutral-700',
        {
          large: 'h-18 w-18 focus:ring focus:ring-offset-4',
          medium: 'h-14 w-14 focus:ring-2 focus:ring-offset-2',
          small: 'h-10 w-10 focus:ring-2 focus:ring-offset-2',
        }[size],
        className
      )}
      onClick={() => player.toggle?.()}
      aria-label={player.playing ? t('pause') : t('play')}
    >
      <div className="absolute -inset-3 md:hidden" />
      {player.playing ? (
        <PauseIcon
          className={clsxm(
            'fill-white group-active:fill-white/80',
            {
              large: 'h-7 w-7',
              medium: 'h-5 w-5',
              small: 'h-4 w-4',
            }[size]
          )}
        />
      ) : (
        <PlayIcon
          className={clsxm(
            'fill-white group-active:fill-white/80',
            {
              large: 'h-9 w-9',
              medium: 'h-7 w-7',
              small: 'h-5 w-5',
            }[size]
          )}
        />
      )}
    </button>
  )
}
