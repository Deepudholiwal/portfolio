# Deepak Yadav Premium Portfolio

A premium portfolio and lead-generation website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Prisma.

## Features
- Dark futuristic motion-driven landing page
- Hero section with immersive 3D visuals and AI storytelling
- Services, projects, experience, skills, testimonials, and contact sections
- Lead capture API with database persistence via Prisma + SQLite
- Secure admin dashboard for lead management
- Visitor tracking endpoint ready for analytics
- SEO-ready metadata, `robots.txt`, and `sitemap.xml`

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create local configuration and initialize the database:
   ```bash
   npm run setup:local
   ```
   This preserves an existing `.env`. For a new setup it generates an admin password in `.env` and uses a local SQLite database.
3. Run locally:
   ```bash
   npm run dev
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
