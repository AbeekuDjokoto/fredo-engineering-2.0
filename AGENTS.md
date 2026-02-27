# AGENTS.md

## Cursor Cloud specific instructions

This is a React (Create React App) single-page application for "Fredo Engineering" — a corporate website with no backend, database, or external API dependencies.

### Services

| Service | Command | Port |
|---|---|---|
| React Dev Server | `npm run dev:start` | 3000 |

### Key notes

- The dev start script is `dev:start` (not the CRA default `start`).
- No `.env` files or environment variables are needed.
- No test files exist yet; run tests with `CI=true npm test -- --passWithNoTests` to avoid a non-zero exit code.
- Lint: `npx eslint src/` (ESLint config is inline in `package.json` under `eslintConfig`).
- Build: `npm run build`.
- All data is hardcoded in `src/mocks/`; there are no external API calls.
