type RootParams = { locale: 'en' | 'zh-CN' }

// Use type safe message keys with `next-intl`
type Messages = typeof import('~/messages/en.json')
declare interface IntlMessages extends Messages {}

type PodcastConfig = {
  directories: string[]
  hosts: Host[]
}

type Podcast = {
  title: string
  description: string
  link: string
  coverArt: string
}

type Episode = {
  id: string
  title: string
  description: string
  link: string
  published: number
  content: string
  duration: string
  coverArt?: string
  enclosure: {
    url: string
    type: string
    length: string
  }
}

type Host = {
  name: string
  link: string
}
