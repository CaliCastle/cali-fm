import '~/app/globals.css'
import 'focus-visible'

import { compile } from 'html-to-text'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import { AudioProvider } from '~/app/(audio)/AudioProvider'
import { PodcastLayout } from '~/app/[locale]/PodcastLayout'
import { getMessages } from '~/app/getMessages'
import { getOpenGraphImage } from '~/app/getOpenGraphImage'
import { ThemeProvider } from '~/app/ThemeProvider'
import { i18n } from '~/i18n'
import { getPodcast } from '~/podcast.config'

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
  const podcast = await getPodcast()
  const compiler = compile()
  const description = compiler(podcast.description).split('\n').join(' ')

  return {
    title: {
      default: podcast.title,
      template: `%s | ${podcast.title}`,
    },
    themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#1c1917' },
      { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    ],
    description,
    keywords: podcast.title,
    icons: {
      icon: podcast.coverArt,
      apple: podcast.coverArt,
    },
    openGraph: {
      title: {
        default: podcast.title,
        template: `%s | ${podcast.title}`,
      },
      description,
      locale: params.locale,
      type: 'website',
      images: [getOpenGraphImage(podcast.coverArt)],
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

  const podcast = await getPodcast()

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
