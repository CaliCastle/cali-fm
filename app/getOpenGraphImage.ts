export function getOpenGraphImage(cover: string) {
  const url = new URL('/api/og', process.env.NEXT_PUBLIC_OG_URL ?? '')
  url.searchParams.set('cover', cover)

  return {
    url: url.toString(),
    width: 1200,
    height: 630,
  }
}
