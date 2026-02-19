# Personal website

This is my personal website.

## Commands

Package manager: **pnpm**

```bash
pnpm lint          # Biome linter/formatter (always run after changes)
pnpm test:types    # TypeScript type check
pnpm build         # Production build
```

## Essentials

- Path alias: `@/*` maps to `src/*`
- Files: kebab-case (`home-page.tsx`). Use `import type` for type-only imports.
- Server Components by default. `'use client'` only for state, browser APIs, or event handlers.
- After completing a task: always stage changes with exactly `git add .` (never use absolute paths like `git -C <path> add .`).
- Aim for elegant solutions by default, but don't gold-plate simple fixes.
- Add new shadcn/ui components: `pnpm dlx shadcn@latest add [name]`