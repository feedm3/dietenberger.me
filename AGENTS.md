# Personal website

Package manager: **pnpm**. After changes run `pnpm lint` (Biome, autofixes) and `pnpm test:types`.

- Stage only the paths changed for the task (for example, `git add -- path/to/file ...`). Do not stage unrelated user changes.
- Add a shadcn/ui component: `pnpm dlx shadcn@latest add [name]`.

## Updating the projects ("After Hours" section)

`projects` array in `src/components/projects-section.tsx` (sorted by `start` desc). Each entry: `title`, `description`, `tech[]`, `href`, `start` (`"YYYY-MM"`), `end` (optional `"YYYY-MM"`, omit if ongoing). `project-repos.local.json` (gitignored, local-only) maps each project to its repo on disk — if present, derive `tech[]` / `description` / `start` (= first commit month) from there; if absent, skip.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
