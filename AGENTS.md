# Personal website

Package manager: **pnpm**. After changes run `pnpm lint` (Biome, autofixes) and `pnpm test:types`.

- Stage changes with `git add .` (never `git -C <path> add .`).
- Add a shadcn/ui component: `pnpm dlx shadcn@latest add [name]`.

## Updating the projects ("After Hours" section)

Projects are `<ProjectCard>` entries in `src/components/projects-section.tsx` (`title`, `description`, `tech[]`, `href`). `project-repos.local.json` (repo root, gitignored / local-only) maps each project to its source repo on disk — skip silently if absent. To refresh: per repo derive `tech[]` from `package.json` deps, `description` from README + recent `git log`, confirm `href`; then edit `projects-section.tsx`.
