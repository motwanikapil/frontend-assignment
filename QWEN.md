# Project Overview

This is a **Next.js 16** project bootstrapped with `create-next-app`. It is a frontend assignment built with modern React technologies.

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.6 (App Router) |
| **React** | 19.2.3 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans & Geist Mono (via `next/font`) |
| **Package Manager** | pnpm |
| **Linting** | ESLint 9 with `eslint-config-next` |

## Project Structure

```
frontend-assignment/
├── app/                      # Next.js App Router directory
│   ├── _components/          # Reusable React components
│   │   ├── Hero.tsx          # Hero section component
│   │   └── Navbar.tsx        # Navigation bar component
│   ├── favicon.ico
│   ├── globals.css           # Global styles (Tailwind imports)
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page
├── public/                   # Static assets
│   ├── hero-bg.png           # Hero background image
│   ├── navbar-logo.png       # Navigation logo
│   └── *.svg                 # Various SVG assets
├── .next/                    # Next.js build output (git-ignored)
├── node_modules/             # Dependencies (git-ignored)
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── pnpm-lock.yaml            # pnpm lock file
├── pnpm-workspace.yaml       # pnpm workspace config
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Building and Running

### Prerequisites

- Node.js 20+ (as indicated by `@types/node: ^20`)
- pnpm (recommended package manager)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Starts the Next.js development server. Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
pnpm build    # Build for production
pnpm start    # Start production server
```

### Linting

```bash
pnpm lint
```

## Development Conventions

### TypeScript

- **Strict mode** enabled (`strict: true`)
- **Module resolution**: `bundler`
- **JSX**: `react-jsx`
- **Path aliases**: `@/*` maps to the project root (`./*`)
- No emit (`noEmit: true`) - Next.js handles compilation

### Code Style

- ESLint 9 with flat config format (`eslint.config.mjs`)
- Uses `eslint-config-next` with Next.js core web vitals and TypeScript rules
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### Styling

- Tailwind CSS v4 with PostCSS
- Uses CSS custom properties for theming (`--background`, `--foreground`)
- Dark mode support via `prefers-color-scheme`
- Geist font family for sans-serif and mono text

### Component Patterns

- Components are stored in `app/_components/` (underscore prefix for private/internal components)
- Uses TypeScript with functional components and typed props
- Imports Lucide React for icons
- Uses Next.js `Image` component for optimized images

### File Naming

- Components: PascalCase (e.g., `Hero.tsx`, `Navbar.tsx`)
- Configuration: lowercase with extensions (e.g., `next.config.ts`)

## Key Configuration Details

### Path Aliases

```typescript
// tsconfig.json
"@/*": ["./*"]
```

Allows imports like `import Foo from "@/components/Foo"`

### Ignored Built Dependencies (pnpm)

```yaml
# pnpm-workspace.yaml
ignoredBuiltDependencies:
  - sharp
  - unrs-resolver
```

## Assets

- **Images**: Stored in `public/` directory
- **Hero background**: `/hero-bg.png`
- **Logo**: `/navbar-logo.png`

## Notes

- The project uses Next.js 16's App Router (not Pages Router)
- React 19 with the new JSX transform
- Tailwind CSS v4 (latest version with updated configuration)
- The root layout exports `Metadata` for SEO optimization
