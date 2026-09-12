# Project Template Next

A production-ready Next.js 16 App Router project template with TypeScript, Redux Toolkit, RTK Query, Socket.IO, WebRTC, and shadcn/ui.

## Features

- **Next.js 16** with App Router and Server Components
- **TypeScript** with strict mode and path aliases (`@/*`)
- **Redux Toolkit** + **RTK Query** for state management and API caching
- **Socket.IO** for real-time WebSocket events
- **WebRTC** for audio/video/data communication
- **Zod** for runtime validation
- **shadcn/ui** + **Tailwind CSS** v4 for styling
- **NextAuth.js** for authentication
- **Axios** for HTTP requests

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui |
| State | Redux Toolkit + RTK Query |
| Real-time | Socket.IO (client + server) |
| Communication | WebRTC (audio/video/data) |
| Validation | Zod |
| HTTP | Axios |
| Auth | NextAuth.js |

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:3001` |
| `NEXT_PUBLIC_SOCKET_URL` | Socket.IO server URL | `http://localhost:3002` |
| `NEXT_PUBLIC_APP_URL` | App URL | `http://localhost:3000` |

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

### Lint & Typecheck

```bash
pnpm lint
pnpm typecheck
```

## Project Structure

```
my-nextjs-app/
├── public/              # Static assets
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/             # App Router
│   │   ├── (public)/    # Public pages (home, about, contact, products)
│   │   ├── (auth)/      # Authentication pages (login, register)
│   │   ├── (private)/   # Protected pages (dashboard, admin)
│   │   ├── api/         # API routes
│   │   ├── layout.tsx   # Root layout
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/      # UI, shared, layout, providers
│   │   ├── ui/          # shadcn/ui components
│   │   ├── shared/      # Reusable shared components
│   │   ├── layout/      # Layout components (Navbar, Sidebar)
│   │   └── providers/   # Redux, Socket, Theme providers
│   ├── features/        # Feature modules (auth, user, product, chat, call)
│   │   ├── auth/
│   │   ├── user/
│   │   ├── product/
│   │   ├── chat/
│   │   └── call/
│   ├── redux/           # Store, hooks, services (RTK Query)
│   ├── lib/             # Utilities (socket, webrtc, axios, validations)
│   ├── hooks/           # Custom hooks
│   ├── types/           # Shared TypeScript types
│   ├── constants/       # App constants (routes, roles, config)
│   ├── config/          # Site config, navigation, permissions
│   └── middleware.ts
├── .env.example
├── .env.local
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Home page |
| `/about` | Public | About page |
| `/contact` | Public | Contact page |
| `/products` | Public | Products listing |
| `/products/[slug]` | Public | Product detail |
| `/login` | Public | Login page |
| `/register` | Public | Registration page |
| `/dashboard` | Private | Dashboard |
| `/dashboard/profile` | Private | User profile |
| `/dashboard/settings` | Private | User settings |
| `/admin` | Private | Admin panel |
| `/admin/users` | Private | User management |
| `/admin/settings` | Private | Admin settings |
| `/api/health` | Public | Health check API |

## Architecture Patterns

- **Server Components** for SEO-critical and static content
- **Client Components** only where interactivity is required
- **Route groups** `(public)`, `(auth)`, `(private)` for layout separation without affecting URLs
- **Feature-based** organization under `src/features/`
- **RTK Query** for server state with caching, prefetching, and auto-refetching
- **Socket.IO** with context provider for real-time events
- **WebRTC** with native browser APIs for peer-to-peer communication

## Development Notes

- Tailwind CSS v4 uses CSS-based configuration in `src/app/globals.css` (no `tailwind.config.ts` needed)
- Path alias `@/*` maps to `src/*` (no `baseUrl` needed in tsconfig)
- All provider components are marked `"use client"` as required by Next.js
- RTK Query `providesTags`/`invalidatesTags` use `as const` assertions for type safety
