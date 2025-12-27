# Myers-Briggs Personality Test

## Overview

This is a Myers-Briggs Type Indicator (MBTI) personality quiz application built as a full-stack web app. Users answer 20 questions to discover their personality type from the 16 possible MBTI combinations (like INTJ, ENFP, etc.). The app features animated transitions, sound effects, and displays detailed personality results with career suggestions and traits.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with hot module replacement
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Radix UI primitives wrapped with shadcn/ui component library
- **State Management**: Zustand stores for quiz state (`useQuiz`), audio management (`useAudio`), and game state (`useGame`)
- **Animations**: Framer Motion for transitions and effects
- **3D Graphics**: React Three Fiber with Drei helpers (configured but not heavily used in current quiz flow)

### Application Flow
- Three-phase quiz structure: welcome → quiz → results
- Phase-based rendering in `App.tsx` determines which screen component to display
- Quiz state includes current question index, answer history, and calculated personality result

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx for development, esbuild for production builds
- **API Pattern**: RESTful endpoints prefixed with `/api` (routes defined in `server/routes.ts`)
- **Static Serving**: Vite dev server in development, static file serving from `dist/public` in production

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` defines database tables
- **Current Schema**: Basic users table with id, username, and password
- **Storage Interface**: `server/storage.ts` provides an abstraction layer with in-memory implementation (`MemStorage`) that can be swapped for database storage

### Build System
- Frontend builds to `dist/public` via Vite
- Backend bundles to `dist/index.cjs` via esbuild
- Common dependencies are bundled to reduce cold start times
- GLSL shader support configured in Vite for potential 3D effects

## External Dependencies

### Third-Party Libraries
- **UI Components**: Full Radix UI suite (dialog, dropdown, tabs, tooltips, etc.)
- **Data Fetching**: TanStack React Query for server state management
- **Audio**: Web Audio API via custom Zustand store
- **Confetti**: react-confetti for celebration effects on results screen
- **Date Handling**: date-fns
- **Validation**: Zod with drizzle-zod integration

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Drizzle Kit for migrations (output to `./migrations`)
- connect-pg-simple for session storage capability

### Development Tools
- Replit runtime error overlay plugin for Vite
- TypeScript with strict mode enabled
- Path aliases: `@/*` for client source, `@shared/*` for shared modules