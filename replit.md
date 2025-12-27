# Myers-Briggs Personality Test

## Overview

A full-stack web application that delivers a Myers-Briggs Type Indicator (MBTI) personality assessment. Users answer 20 questions across four personality dimensions (Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving) to discover their personality type from the 16 possible MBTI combinations. The app features a three-phase flow: welcome screen, quiz questions, and results display with personality type images and descriptions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite
- **Styling**: Tailwind CSS with CSS custom properties for theming (HSL color system)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: Zustand stores for quiz state (`useQuiz`), audio management (`useAudio`), and game state (`useGame`)
- **Animations**: Framer Motion for page transitions and micro-interactions
- **3D Support**: React Three Fiber with Drei helpers configured (GLSL shader support enabled in Vite)

### Application Flow
The quiz operates through a phase-based state machine:
1. **Welcome Phase**: Introduction screen with start button
2. **Quiz Phase**: 20 sequential questions with A/B answer options, progress tracking, and navigation
3. **Results Phase**: Calculated MBTI type display with confetti animation, personality description, and reset option

Phase transitions are managed by the `useQuiz` Zustand store, with `App.tsx` conditionally rendering the appropriate screen component.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (tsx for development, esbuild for production builds)
- **API Pattern**: RESTful endpoints prefixed with `/api` (routes in `server/routes.ts`)
- **Development**: Vite dev server middleware with HMR support
- **Production**: Static file serving from `dist/public`, server bundle at `dist/index.cjs`

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Located in `shared/schema.ts` - currently has a basic users table (id, username, password)
- **Storage Abstraction**: `server/storage.ts` provides an `IStorage` interface with an in-memory implementation (`MemStorage`) that can be swapped for database-backed storage
- **Database Config**: `drizzle.config.ts` expects `DATABASE_URL` environment variable for PostgreSQL connection

### Build System
- Frontend builds via Vite to `dist/public`
- Backend bundles via esbuild to `dist/index.cjs`
- Common server dependencies are bundled (allowlist in `script/build.ts`) to reduce cold start times
- Path aliases: `@/*` maps to `client/src/*`, `@shared/*` maps to `shared/*`

## External Dependencies

### Third-Party Services
- **Database**: PostgreSQL (via Drizzle ORM with `pg` driver and `connect-pg-simple` for sessions)
- **Audio**: Browser Web Audio API (managed through custom Zustand store, expects audio files in `/sounds/`)

### Key Libraries
- **UI Framework**: Full Radix UI primitive suite wrapped by shadcn/ui
- **Data Fetching**: TanStack React Query for server state management
- **Animation**: Framer Motion for transitions, react-confetti for celebration effects
- **3D Graphics**: React Three Fiber, Drei, and postprocessing (configured but minimally used)
- **Forms**: React Hook Form with Zod validation (via drizzle-zod for schema-derived types)
- **Utilities**: date-fns, clsx, tailwind-merge, nanoid