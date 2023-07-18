'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import { useAudioPlayer } from './AudioProvider'
import { ForwardButton } from './ForwardButton'
import { MuteButton } from './MuteButton'
import { PlaybackRateButton } from './PlaybackRateButton'
import { PlayButton } from './PlayButton'
import { RewindButton } from './RewindButton'
import { Slider } from './Slider'

function parseTime(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  seconds = seconds - hours * 3600 - minutes * 60
  return [hours, minutes, seconds]
}

function formatHumanTime(seconds: number) {
  // TODO: i18n
  const [h, m, s] = parseTime(seconds)
  return `${h} hour${h === 1 ? '' : 's'}, ${m} minute${
    m === 1 ? '' : 's'
  }, ${s} second${s === 1 ? '' : 's'}`
}

export function AudioPlayer() {
  const t = useTranslations('AudioPlayer')
  const player = useAudioPlayer(undefined)
  const wasPlayingRef = useRef(false)
  const [currentTime, setCurrentTime] = useState(player.currentTime)

  useEffect(() => {
    setCurrentTime(undefined)
  }, [player.currentTime])

  const numberFormatter = {
    format: formatHumanTime,
    resolvedOptions: Intl.NumberFormat().resolvedOptions,
  }

  if (!player.meta) {
    return null
  }

  return (
    <div className="flex items-center gap-6 bg-white/90 px-4 py-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-lg dark:bg-neutral-900/90 dark:shadow-stone-800/70 dark:ring-stone-100/5 md:px-6">
      <div className="hidden md:block">
        <PlayButton player={player} size="medium" />
      </div>
      <div className="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
        <Link
          href={player.meta.link}
          className="truncate text-center text-sm font-bold leading-6 md:text-left"
          title={player.meta.title}
        >
          {player.meta.title}
        </Link>
        <div className="flex justify-between gap-6">
          <div className="flex items-center md:hidden">
            <MuteButton player={player} />
          </div>
          <div className="flex flex-none items-center gap-4">
            <RewindButton player={player} />
            <div className="md:hidden">
              <PlayButton player={player} size="small" />
            </div>
            <ForwardButton player={player} />
          </div>
          <Slider
            label={t('current_time')}
            maxValue={player.duration}
            step={1}
            value={currentTime ?? player.currentTime ?? 0}
            onChange={(v) => setCurrentTime(v)}
            onChangeEnd={(value) => {
              player.seek?.(value)
              if (wasPlayingRef.current) {
                player.play()
              }
            }}
            numberFormatter={numberFormatter as any}
            onChangeStart={() => {
              wasPlayingRef.current = player.playing
              player.pause?.()
            }}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <PlaybackRateButton player={player} />
            </div>
            <div className="hidden items-center md:flex">
              <MuteButton player={player} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
