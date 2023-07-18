import '~/app/globals.css'
import 'focus-visible'

import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import { AudioProvider } from '~/app/(audio)/AudioProvider'
import { PodcastLayout } from '~/app/[locale]/PodcastLayout'
import { getMessages } from '~/app/getMessages'
import { ThemeProvider } from '~/app/ThemeProvider'
import { i18n } from '~/i18n'
import { serverFetch } from '~/sanity/client'
import { urlForImage } from '~/sanity/image'
import { getPodcastQuery, getSettingsQuery } from '~/sanity/queries'
import { Podcast } from '~/sanity/schema/podcast'
import type { Settings } from '~/sanity/schema/settings'

const sansFontEn = Manrope({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans-en',
  fallback: ['ui-sans-serif'],
})

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: RootParams }) {
  const settings = await serverFetch<Settings>(getSettingsQuery())

  return {
    metadataBase: settings.canonical ? new URL(settings.canonical) : undefined,
    title: {
      default: settings.title,
      template: settings.titleTemplate ?? `%s | ${settings.title}`,
    },
    themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#1c1917' },
      { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    ],
    description: settings.description,
    keywords: settings.keywords?.join(','),
    icons: settings.favicon
      ? {
          icon: urlForImage(settings.favicon).size(32, 32).url(),
          apple: urlForImage(settings.favicon).size(180, 180).url(),
        }
      : undefined,
    openGraph: {
      title: {
        default: settings.title,
        template: settings.titleTemplate ?? `%s | ${settings.title}`,
      },
      description: settings.description,
      locale: params.locale,
      type: 'website',
      // TODO:
      // images: [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: settings.twitter,
  } satisfies Metadata
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: RootParams
}) {
  let messages
  try {
    messages = await getMessages(locale)
  } catch (error) {
    notFound()
  }

  const podcast = await serverFetch<Podcast>(getPodcastQuery())

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`font-sans ${sansFontEn.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <AudioProvider>
              <PodcastLayout podcast={podcast}>{children}</PodcastLayout>
            </AudioProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
