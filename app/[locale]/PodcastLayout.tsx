'use client'

import { clsxm } from '@zolplay/utils'
import { ActivityIcon, Mic2Icon, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React, { Fragment, useId, useMemo, useState } from 'react'

import { urlForImage } from '~/sanity/image'
// import { AudioPlayer } from '@/components/player/AudioPlayer'
import type { Podcast } from '~/sanity/schema/podcast'

function randomBetween(min: number, max: number, seed = 1) {
  return () => {
    let rand = Math.sin(seed++) * 10000
    rand = rand - Math.floor(rand)
    return Math.floor(rand * (max - min + 1) + min)
  }
}

function Waveform(props: React.SVGProps<SVGSVGElement>) {
  const id = useId()
  const bars = {
    total: 100,
    width: 2,
    gap: 2,
    minHeight: 40,
    maxHeight: 100,
  }

  const barHeights = Array.from(
    { length: bars.total },
    randomBetween(bars.minHeight, bars.maxHeight)
  )

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="40%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <linearGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="#4989E8" />
          <stop offset="50%" stopColor="#6159DA" />
          <stop offset="100%" stopColor="#FF54AD" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${id}-pattern)`} />
        </mask>
        <pattern
          id={`${id}-pattern`}
          width={bars.total * bars.width + bars.total * bars.gap}
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          {Array.from({ length: bars.total }, (_, index) => (
            <rect
              key={index}
              width={bars.width}
              height={`${barHeights[index]}%`}
              x={bars.gap * (index + 1) + bars.width * index}
              fill={`url(#${id}-fade)`}
            />
          ))}
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-gradient)`}
        mask={`url(#${id}-mask)`}
        opacity="0.25"
      />
    </svg>
  )
}

function AboutSection(
  props: React.HTMLProps<HTMLElement> & { children: string }
) {
  const content = props.children
  const [isExpanded, setIsExpanded] = useState(false)
  const isTooLong = useMemo(() => content.length > 150, [content])
  const t = useTranslations('Layout')

  return (
    <section {...props}>
      <h2 className="flex items-center text-sm font-medium leading-7 text-stone-900">
        <ActivityIcon className="h-3 w-3 fill-stone-300 text-blue-500" />
        <span className="ml-2.5">{t('about')}</span>
      </h2>
      <p
        className={clsxm(
          'mt-2 text-base leading-7 text-stone-700',
          !isExpanded && 'lg:line-clamp-4'
        )}
      >
        {content}
      </p>
      {!isExpanded && isTooLong && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          {t('show_more')}
        </button>
      )}
    </section>
  )
}

export function PodcastLayout({
  podcast,
  children,
}: {
  podcast: Podcast
  children: React.ReactNode
}) {
  const t = useTranslations('Layout')

  return (
    <>
      <header className="bg-stone-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
        <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-stone-200 lg:px-8 lg:py-12 xl:px-12">
          <Link
            href="/"
            className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-stone-200 shadow-xl shadow-stone-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
            aria-label={t('homepage')}
          >
            <Image
              className="w-full"
              src={urlForImage(podcast.coverArt).size(500, 500).url()}
              alt=""
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              width={500}
              height={500}
              priority
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
          </Link>
          <div className="mt-10 text-center lg:mt-12 lg:text-left">
            <p className="text-xl font-bold text-stone-900">
              <Link href="/">{podcast.title}</Link>
            </p>
            <p className="mt-3 text-lg font-medium leading-8 text-stone-700">
              {podcast.subtitle}
            </p>
          </div>
          <AboutSection className="mt-12 hidden lg:block">
            {podcast.description}
          </AboutSection>
          <section className="mt-10 lg:mt-12">
            <h2 className="sr-only flex items-center text-sm font-medium leading-7 text-stone-900 lg:not-sr-only">
              <Mic2Icon className="h-3 w-3 fill-stone-200 text-blue-500" />
              <span className="ml-2.5">{t('listen')}</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-stone-200/0 via-stone-200 to-stone-200/0 lg:hidden" />
            <ul
              role="list"
              className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-stone-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
              {/*{[*/}
              {/*  ['Spotify', SpotifyIcon],*/}
              {/*  ['Apple Podcast', ApplePodcastIcon],*/}
              {/*  ['Overcast', OvercastIcon],*/}
              {/*  ['RSS Feed', RSSIcon],*/}
              {/*].map(([label, Icon]) => (*/}
              {/*  <li key={label} className="flex">*/}
              {/*    <Link*/}
              {/*      href="/"*/}
              {/*      className="group flex items-center"*/}
              {/*      aria-label={label}*/}
              {/*    >*/}
              {/*      <Icon className="h-8 w-8 fill-stone-400 group-hover:fill-stone-600" />*/}
              {/*      <span className="hidden sm:ml-3 sm:block">{label}</span>*/}
              {/*    </Link>*/}
              {/*  </li>*/}
              {/*))}*/}
            </ul>
          </section>
          <section className="mt-10 hidden lg:mt-12 lg:block">
            <h2 className="flex items-center text-sm font-medium leading-7 text-stone-900">
              <UserIcon className="h-3 w-auto fill-stone-300" />
              <span className="ml-2.5">{t('hosted_by')}</span>
            </h2>
            <div className="mt-2 flex gap-6 text-sm font-bold leading-7 text-stone-900">
              {podcast.hosts?.map((host, hostIndex) => (
                <Fragment key={hostIndex}>
                  {hostIndex !== 0 && (
                    <span aria-hidden="true" className="text-stone-400">
                      /
                    </span>
                  )}
                  <span className="inline-flex items-center space-x-1.5">
                    {host.image && (
                      <Image
                        src={urlForImage(host.image).size(40, 40).url()}
                        alt={host.name}
                        width={32}
                        height={32}
                        className="h-4 w-4 rounded"
                      />
                    )}
                    <span>{host.name}</span>
                  </span>
                </Fragment>
              ))}
            </div>
          </section>
        </div>
      </header>
      <main className="border-t border-stone-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <Waveform className="fixed left-0 top-0 h-20 w-full opacity-75" />
        <div className="relative">{children}</div>
      </main>
      <footer className="border-t border-stone-200 bg-stone-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          <AboutSection>{podcast.description}</AboutSection>
          <h2 className="mt-8 flex items-center text-sm font-medium leading-7 text-stone-900">
            <UserIcon className="h-3 w-auto fill-stone-300" />
            <span className="ml-2.5">{t('hosted_by')}</span>
          </h2>
          <div className="mt-2 flex gap-6 text-sm font-bold leading-7 text-stone-900">
            {podcast.hosts?.map((host, hostIndex) => (
              <Fragment key={hostIndex}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-stone-400">
                    /
                  </span>
                )}
                <span className="inline-flex items-center space-x-1.5">
                  {host.image && (
                    <Image
                      src={urlForImage(host.image).size(40, 40).url()}
                      alt={host.name}
                      width={32}
                      height={32}
                      className="h-4 w-4 rounded"
                    />
                  )}
                  <span>{host.name}</span>
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        {/*<AudioPlayer />*/}
      </div>
    </>
  )
}
