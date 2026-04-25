# RareSoul 16 MVP Development Plan

## Current Findings

- `AGENTS.md` was present as `AGENTS.md.txt`; it asks for a Next.js, TypeScript, Tailwind, Supabase, Recharts MVP.
- `docs/PRD.md` was missing and the local `docsPRD.md.txt` file was empty.
- The latest shared PRD is used as the implementation baseline.
- Public UI avoids MBTI and Myers-Briggs branding.

## Phase 1: Foundation

- Create Next.js App Router project files.
- Add mobile-first Tailwind styling.
- Add data modules for archetypes and generated 108-question seed data.
- Add local-storage MVP persistence.

## Phase 2: Product Flow

- Homepage with product promise, sample archetypes, and CTA.
- Quiz page with one-question flow, progress, autosave, and scoring.
- Result preview page with archetype, rarity, dimensions, and locked modules.
- Report page with locked/unlocked state and full report sections.
- Couple invite placeholder page.

## Phase 3: Backend Readiness

- Supabase migration for users, questions, answers, sessions, profiles, reports, orders, invites, couple reports, coupons, admin logs.
- Seed data folder describing JSON/SQL shape.
- Scoring spec and TypeScript scoring engine.

## Phase 4: Later Production Work

- Replace local storage with Supabase Auth and tables.
- Add real payment provider callback verification.
- Add admin CRUD.
- Add AI personalization worker with guarded prompts.
- Add PDF/share image generation.
