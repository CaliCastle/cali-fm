export const metadata = {
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Podcast Studio',
}

export default function StudioRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
