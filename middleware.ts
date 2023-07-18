import { NextRequest, NextResponse } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import { i18n } from './i18n'

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request
  const defaultLocale = request.headers.get('x-default-locale') || 'en'

  if (request.nextUrl.pathname.endsWith('/opengraph-image')) {
    return NextResponse.next()
  }

  // Step 2: Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    // A list of all locales that are supported
    locales: i18n.locales,

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: i18n.defaultLocale,
  })
  const response = handleI18nRouting(request)

  // Step 3: Alter the response
  response.headers.set('x-default-locale', defaultLocale)

  return response
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|studio|_vercel|_next|.*\\..*).*)'],
}
