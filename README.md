## Podcast Studio

This is a template for a podcast website. It is built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. First, you'd need a podcast RSS url and the final production domain URL for your website.

```dotenv
NEXT_PUBLIC_PODCAST_RSS="yoururl"
NEXT_PUBLIC_OG_URL="https://example.com"
```

2. Open `podcast.config.ts` to configure your podcast.

## Running Locally
```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
