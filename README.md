# Flow Finance

Flow Finance is a personal finance CRM for bookkeeping, budgeting, and cash-flow control. Built on TanStack Start with a focus on modular architecture, scalability, and financial precision.

## Technology Stack

- **TanStack Start** — SSR/SPA framework with file-based routing
- **TanStack Router** — routing and data loading
- **Vite** — fast dev server and build tooling
- **TypeScript (strict)** — type safety
- **Vitest + Testing Library** — UI testing
- **ESLint + Prettier** — linting and formatting
- **Husky + lint-staged** — pre-commit checks
- **CSS Modules** — scoped styling

## Architecture (domain-first)

```
src/
  app/        # layout, shell, global styles
  entities/   # business entities (Account, Transaction)
  features/   # use-cases (create/list/report)
  pages/      # route-level pages
  shared/     # types, utilities, UI primitives
  widgets/    # complex UI blocks
  routes/     # TanStack Router entry
  test/       # test setup
```

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
- `npm run format` — run Prettier
- `npm run test` — run tests

## Financial Data Standards

- Do not use `number` for money
- Use `bigint` or a decimal library
- Validation and business logic live at domain boundaries (`entities`, `features`)

## Getting Started

```bash
npm install
npm run dev
```

## Testing

```bash
npm run test
```
