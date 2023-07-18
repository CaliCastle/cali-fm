import { groq } from 'next-sanity'

export const getSettingsQuery = () =>
  groq`
  *[_type == "settings"][0]`

export const getPodcastQuery = () =>
  groq`
  *[_type == "podcast" && _id == *[_type == "settings"][0].podcast._ref][0] {
    ...,
    directories,
    "hosts": hosts[]->,
}`

export const getEpisodesOverviewQuery = () =>
  groq`
  *[_type == "episode" && *[_type == "settings"][0].podcast._ref in podcast[]._ref][0...50] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    explicit,
    publishedAt,
    title,
    coverArt,
    duration,
    summary,
    "file": file.asset->url
}`

export const getEpisodeQuery = () =>
  groq`
  *[_type == "episode" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    explicit,
    publishedAt,
    title,
    coverArt,
    duration,
    summary,
    "file": file.asset->url,
    notes,
}`
