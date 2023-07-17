import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { apiVersion, dataset, projectId } from '~/sanity/api'
import { schema } from '~/sanity/schema'
import settings from '~/sanity/schema/settings'
import {
  settingsPlugin,
  settingsStructure,
} from '~/sanity/schema/settings/plugin'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Podcast Studio'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema,
  plugins: [
    deskTool({
      structure: settingsStructure(settings),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    settingsPlugin({
      type: settings.name,
    }),
  ],
})
