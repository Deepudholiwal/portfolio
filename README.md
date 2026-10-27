# Deepak Yadav Premium Portfolio

A premium portfolio and lead-generation website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Netlify Database with Drizzle ORM.

## Features
- Dark futuristic motion-driven landing page
- Hero section with immersive 3D visuals and AI storytelling
- Services, projects, experience, skills, testimonials, and contact sections
- Lead capture API with database persistence via Netlify Database (Postgres)
- Secure admin dashboard for lead management
- Visitor tracking endpoint ready for analytics
- SEO-ready metadata, `robots.txt`, and `sitemap.xml`

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create local admin configuration:
   ```bash
   node scripts/setup-local.mjs
   ```
   This preserves an existing `.env`. For a new setup it generates an admin password in `.env`. The legacy SQLite setup is no longer used by the application endpoints.
3. Run locally:
   ```bash
   netlify dev --port 8889
   ```

## Admin Panel
- Visit `/admin` or `/datasubmit` to view and manage form submissions
- Use the `ADMIN_PASSWORD` from `.env`
- Submission details are password-protected and are not publicly accessible.
- A successful login stays active for 7 days, including after a page refresh. The dashboard checks for new submissions automatically every 3 seconds.

## Notes
- Replace `NEXT_PUBLIC_SITE_URL` with the production domain.
- Add GA4 and Microsoft Clarity IDs to `.env`.
- Update project URLs and images for real deployment.

## Persistent storage
Contact submissions, admin lead management, and visitor tracking use the managed Postgres database. The schema is defined in `db/schema.ts`, and Netlify applies the generated migrations in `netlify/database/migrations` during deployment. The previous Prisma/SQLite files are legacy tooling, not the active storage path. Existing SQLite records are not automatically imported.
