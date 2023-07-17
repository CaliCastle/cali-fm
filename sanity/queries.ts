import { groq } from 'next-sanity'

export const getSettingsQuery = () =>
  groq`
  *[_type == "settings"][0]`

export const getPodcastQuery = () =>
  groq`
  *[_type == "podcast" && _id == *[_type == "settings"][0].podcast._ref][0]
`
