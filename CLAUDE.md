# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Personal portfolio website for Janpeter Visser, built with **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS**. Deployed on Vercel at `jp-visser.nl`.

### Data flow

All CV content lives in a single source of truth: `lib/cv-data.ts` (`CV_DATA` const). Components import directly from there — no API calls, no state management.

### Page structure

`app/page.tsx` composes the single-page layout by stacking section components in order: `Nav → Hero → ExperienceSection → SkillsSection → AppsSection → ContactSection → Footer`.

### Adding apps to the portfolio

- **Subdomain approach**: deploy separately on Vercel and add a subdomain (e.g. `app1.jp-visser.nl`)
- **Route approach**: create `app/apps/<name>/page.tsx`, then update `components/apps.tsx` to link to it
