'use client'

import { useTranslations } from 'next-intl'

import { useAudioPlayer } from '~/app/(audio)/AudioProvider'

function RewindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188" />
      <path d="M5 15V19" />
      <path d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z" />
    </svg>
  )
}

type RewindButtonProps = {
  player: ReturnType<typeof useAudioPlayer>
  amount?: number
}
export function RewindButton({ player, amount = 10 }: RewindButtonProps) {
  const t = useTranslations('AudioPlayer')

  return (
    <button
      type="button"
      className="group relative rounded-full focus:outline-none"
      onClick={() => player.seekBy?.(-amount)}
      aria-label={t('rewind', { s: amount })}
    >
      <div className="absolute -inset-4 -right-2 md:hidden" />
      <RewindIcon className="h-6 w-6 stroke-neutral-500 group-hover:stroke-neutral-700 dark:stroke-neutral-400 dark:group-hover:stroke-neutral-300" />
    </button>
  )
}
