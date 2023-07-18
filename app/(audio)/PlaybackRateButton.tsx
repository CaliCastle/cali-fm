'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { useAudioPlayer } from '~/app/(audio)/AudioProvider'

const playbackRates = [
  {
    value: 1,
    icon: function PlaybackIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path
            d="M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M3.75 7.25L5.25 5.77539V11.25" />
          <path d="M8.75 7.75L11.25 10.25" />
          <path d="M11.25 7.75L8.75 10.25" />
        </svg>
      )
    },
  },
  {
    value: 1.5,
    icon: function PlaybackIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path
            d="M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M2.75 7.25L4.25 5.77539V11.25" />
          <path
            d="M7.5 11C7.5 11.2761 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.2761 6.5 11C6.5 10.7239 6.72386 10.5 7 10.5C7.27614 10.5 7.5 10.7239 7.5 11Z"
            strokeWidth="1"
          />
          <path d="M12.25 5.75H9.75V8.25H10.75C11.5784 8.25 12.25 8.92157 12.25 9.75V9.75C12.25 10.5784 11.5784 11.25 10.75 11.25H9.75" />
        </svg>
      )
    },
  },
  {
    value: 2,
    icon: function PlaybackIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path
            d="M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9.75 8.75L12.25 11.25" />
          <path d="M12.25 8.75L9.75 11.25" />
          <path d="M3.75 7.25C3.75 7.25 3.90144 5.75 5.63462 5.75C6.1633 5.75 6.5448 5.95936 6.81973 6.25035C7.67157 7.15197 6.97033 8.47328 6.0238 9.28942L3.75 11.25H7.25" />
        </svg>
      )
    },
  },
]

export function PlaybackRateButton({
  player,
}: {
  player: ReturnType<typeof useAudioPlayer>
}) {
  const t = useTranslations('AudioPlayer')
  const [playbackRate, setPlaybackRate] = useState(playbackRates[0])

  return (
    <button
      type="button"
      className="relative flex h-6 w-6 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:text-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-500 dark:focus:ring-neutral-600"
      onClick={() => {
        setPlaybackRate((rate) => {
          let existingIdx = playbackRates.indexOf(rate)
          let idx = (existingIdx + 1) % playbackRates.length
          let next = playbackRates[idx]

          player.playbackRate?.(next.value)

          return next
        })
      }}
      aria-label={t('playback_rate')}
    >
      <div className="absolute -inset-4 md:hidden" />
      <playbackRate.icon className="h-4 w-4" />
    </button>
  )
}
