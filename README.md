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
1. Copy `.env.example` to `.env`.
2. Set `DATABASE_URL="file:./dev.db"` and `ADMIN_PASSWORD`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Generate Prisma client and migrate:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
5. Run locally:
   ```bash
   npm run dev
   ```

## Admin Panel
- Visit `/admin`
- Use the `ADMIN_PASSWORD` from `.env`

## Notes
- Replace `NEXT_PUBLIC_SITE_URL` with the production domain.
- Add GA4 and Microsoft Clarity IDs to `.env`.
- Update project URLs and images for real deployment.
