## Podcast Studio

This is your one-stop shop for:
- Creating and hosting your podcast(s)
- A website for your podcast(s)

## Getting Started

First, you'd need a Sanity account. You can sign up for free [here](https://www.sanity.io/signup).

Then, you'd need to create a new project. You can do that [here](https://www.sanity.io/get-started/create-project).

Then, grab your project ID and deploy this repo (fork it to your GitHub first) on [Vercel](https://vercel.com)

Fill in the required environment variables:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID="xxx"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_PROJECT_TITLE="Podcast Studio"
```

## Running Locally
```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
