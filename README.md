# Sumanth Reddy Portfolio

Premium, dark-themed personal portfolio for Sumanth Reddy, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, shadcn-inspired UI components, Prisma, and PostgreSQL.

## Features

- Responsive home page with premium hero, about, experience, skills, projects, learning, stats, blog, assistant, and contact sections
- Blog listing and individual blog pages with search, categories, tags, and markdown rendering
- Local JSON-based AI assistant with an API-ready architecture for OpenAI later
- Secure admin dashboard shell with login and Prisma-backed content mutation endpoints
- SEO utilities: metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots
- Resume download endpoint

## Install

```bash
npm install
```

## Environment Variables

Create `.env.local`:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
ADMIN_EMAIL="admin@sumanthreddy.com"
ADMIN_PASSWORD="change-me"
ADMIN_SESSION_SECRET="a-long-random-secret"
```

## Database Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

If you are using Prisma Studio:

```bash
npx prisma studio
```

## Run

```bash
npm run dev
```

## Deployment

### Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Set the environment variables in Vercel.
4. Add your Postgres connection string.

### Railway or Render

1. Create a Node.js service.
2. Attach a PostgreSQL database.
3. Set the environment variables above.
4. Run `npm run build` and `npm run start`.

## Notes

- The resume route currently serves a placeholder PDF generated on the server.
- The admin API is schema-ready and will persist once `DATABASE_URL` is connected.
- Replace placeholder GitHub/demo links and project images with live assets as needed.
