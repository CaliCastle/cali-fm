import createMiddleware from 'next-intl/middleware'
import { i18n } from './i18n'

export default createMiddleware({
  // A list of all locales that are supported
  locales: i18n.locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: i18n.defaultLocale,
})

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|favicon.ico|assets|studio|.*\\..*).*)'],
}
