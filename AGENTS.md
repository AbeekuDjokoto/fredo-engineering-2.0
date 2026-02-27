# AGENTS.md

## Cursor Cloud specific instructions

This is a React (Create React App) single-page application for "Fredo Engineering" -- a corporate website with no backend, database, or external API dependencies.

### Services

| Service | Command | Port |
|---|---|---|
| React Dev Server | `npm run dev:start` | 3000 |

### Key notes

- The dev start script is `dev:start` (not the CRA default `start`). It sets `NODE_PATH=src` for absolute imports.
- `jsconfig.json` sets `baseUrl: "src"` for IDE support. The `NODE_PATH=src` in package.json scripts handles the webpack resolution.
- No `.env` files or environment variables are needed.
- No test files exist yet; run tests with `CI=true npm test -- --passWithNoTests` to avoid a non-zero exit code.
- Lint: `npx eslint src/` (ESLint config is inline in `package.json` under `eslintConfig`).
- Build: `npm run build`.

### Architecture

- `pages/` -- Route-level page components (Home, Products, AboutUs, ContactUs).
- `components/` -- Shared/reusable components (Navbar, Footer, SubNavBar, NavMenu).
- `layouts/` -- Layout wrappers using React Router `<Outlet>`. `MainLayout` wraps pages with SubNavBar + Footer.
- `pages/Home/sections/` -- Home-page-specific sections (ProfessionalServices, ProvideForTheFuture, WhyChooseUs, Teams).
- `constants/` -- Static config data (navigation links, footer links).
- `data/` -- Mock/seed data (products, about stats).
- `assets/` -- Icons (`assets/icons/`) and images (`assets/images/`). Icon barrel is `assets/icons/index.js`.
- `styles/` -- Global SCSS (Tailwind, CSS reset, variables, layer components).
- `hooks/` and `utils/` -- Empty scaffolds for future shared hooks and utilities.
- All imports use absolute paths from `src/` (e.g. `import { Navbar } from "components"`).
