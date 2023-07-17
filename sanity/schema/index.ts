import categories from './categories'
import episode from './episode'
import host from './host'
import itunes from './itunes'
import episodeSettings from './itunes/episodeSettings'
import owner from './itunes/owner'
import linkListItem from './linkListItem'
import podcast from './podcast'
import settings from './settings'

export const schema = {
  types: [
    podcast,
    episode,
    categories,
    itunes,
    episodeSettings,
    owner,
    host,
    linkListItem,
    settings,
  ],
}
