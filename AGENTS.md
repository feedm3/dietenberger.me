# Personal website

Package manager: **pnpm**. After changes run `pnpm lint` (Biome, autofixes) and `pnpm test:types`.

- Stage changes with `git add .` (never `git -C <path> add .`).
- Add a shadcn/ui component: `pnpm dlx shadcn@latest add [name]`.

## Updating the projects ("After Hours" section)

`projects` array in `src/components/projects-section.tsx` (sorted by `start` desc). Each entry: `title`, `description`, `tech[]`, `href`, `start` (`"YYYY-MM"`), `end` (optional `"YYYY-MM"`, omit if ongoing). `project-repos.local.json` (gitignored, local-only) maps each project to its repo on disk — if present, derive `tech[]` / `description` / `start` (= first commit month) from there; if absent, skip.
