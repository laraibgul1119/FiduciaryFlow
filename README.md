# FiduciaryFlow OS

The client acquisition and compliance operating system for fee-only RIAs and financial advisors.

Built with **React 19**, **TanStack Start**, **Supabase**, and **Tailwind CSS v4**.

## Features

- **Lead Qualification** — Public AI-powered quiz that scores prospects in 45 seconds
- **AI Voice Qualifier** — Vapi/Retell-powered call logs with transcripts and outcomes
- **Client Onboarding** — Magic-link portal with KYC, risk scoring, and doc vault
- **Meeting Intelligence** — AI-generated meeting notes with SEC 17a-4 compliance
- **Command Center** — Real-time dashboard with pipeline, KPIs, and morning brief
- **Billing** — Stripe-ready pricing page with 3 tiers (Starter / Growth / Scale)
- **Demo Mode** — Toggle realistic fake data for sales calls with one-click demo link

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start (React 19 + Vite 8) |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS v4 + shadcn/ui (New York) |
| Backend | Supabase (PostgreSQL + Auth) |
| Animation | Framer Motion |
| Charts | Recharts |
| Icons | Lucide React |

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun)
- A Supabase project (free tier works)

### 1. Clone and install

```bash
git clone https://github.com/laraibgul1119/FiduciaryFlow.git
cd FiduciaryFlow
npm install
```

### 2. Set up environment

Copy the example env and fill in your Supabase credentials:

```bash
cp .env.example .env
```

Get your keys from [Supabase Dashboard](https://supabase.com/dashboard) > Settings > API:

```
SUPABASE_PROJECT_ID=your-project-id
SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
VITE_SUPABASE_URL=https://your-project.supabase.co
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run build:dev` | Development build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project Structure

```
src/
├── components/
│   ├── AppShell.tsx          # Layout shell (nav, theme, command palette)
│   └── ui/                   # shadcn/ui components
├── hooks/
│   └── use-mobile.tsx
├── integrations/
│   └── supabase/             # Supabase client + types
├── lib/
│   ├── constants.ts          # App constants + helpers
│   ├── demo-data.ts          # Mock data for demo mode
│   ├── demo-mode.tsx          # Demo mode context provider
│   └── utils.ts              # cn() utility
├── routes/
│   ├── __root.tsx            # Root layout (HTML shell)
│   ├── index.tsx             # Landing page
│   ├── dashboard.tsx         # Command center
│   ├── voice-logs.tsx        # AI voice qualifier logs
│   ├── meetings.tsx          # Meeting intelligence
│   ├── billing.tsx           # Pricing page
│   ├── settings.tsx          # Firm settings
│   ├── q.$slug.tsx           # Public lead qualifier quiz
│   └── onboarding.$id.tsx    # Client onboarding portal
├── styles.css                # Tailwind + design tokens
├── router.tsx                # Router config
└── routeTree.gen.ts          # Auto-generated (don't edit)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, social proof |
| `/dashboard` | Command center — KPIs, pipeline, charts, morning brief |
| `/voice-logs` | AI voice qualifier call logs with audio player |
| `/meetings` | Meeting transcript analysis and compliance flags |
| `/billing` | Pricing plans with comparison table |
| `/settings` | Firm settings |
| `/q/:slug` | Public lead qualifier quiz (shareable link) |
| `/onboarding/:id` | Client onboarding portal |

## Demo Mode

Click **Demo mode** in the header to toggle realistic fake data:

- **Firm**: Crestline Capital Advisors, $68M AUM
- **Leads**: 12 prospects with scores 84–96
- **Pipeline**: 2 new, 4 qualified, 2 booked, 2 onboarding, 2 active
- **Copy Demo Link**: Copies `/q/demo-firm` to clipboard for sales calls

## Deployment

### Option 1: Vercel (Recommended)

1. Push to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Vercel auto-detects TanStack Start — confirm the settings and deploy
4. Add environment variables in Vercel dashboard > Settings > Environment Variables

```bash
# Or deploy via CLI
npm i -g vercel
vercel
vercel --prod
```

### Option 2: Lovable

Push to your connected Lovable project — it auto-deploys on every commit.

### Option 3: Cloudflare Workers

```bash
npm run build
npx wrangler deploy
```

### Option 4: Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Environment Variables

| Variable | Description | Client | Server |
|----------|-------------|--------|--------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes | Yes |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase publishable key | Yes | Yes |
| `SUPABASE_URL` | Your Supabase project URL | No | Yes |
| `SUPABASE_PUBLISHABLE_KEY` | Your Supabase publishable key | No | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (bypasses RLS) | No | Yes |
| `SUPABASE_PROJECT_ID` | Your Supabase project ID | No | Yes |

> **Security:** Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client. It bypasses Row Level Security.

## License

Private — All rights reserved.
