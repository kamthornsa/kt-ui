# Vibe-code prompt — apply KT UI to an existing Next.js + Tailwind + shadcn project

วิธีใช้: แตก zip แล้ววางโฟลเดอร์ `kt-ui/` ไว้ที่ root ของโปรเจกต์ → commit งานเดิมก่อน (`git commit -am "before KT UI"`) → เปิด Claude Code / Cursor / Copilot Agent แล้ววาง prompt ด้านล่างทั้งก้อน

---

```text
You are applying the "KT UI" design system to this existing Next.js + Tailwind + shadcn/ui project.
All source material is in ./kt-ui/ . Work in small steps and show me a summary after each phase.

PHASE 0 — Inspect (only one edit: add "kt-ui" to the "exclude" array in tsconfig.json so the reference files are not type-checked)
- Report: Tailwind version (v4 = `@import "tailwindcss"` in CSS, no tailwind.config colours; v3 = tailwind.config with hsl(var(--x))),
  shadcn style/primitive library (components.json; Radix `@radix-ui/*` vs Base UI), location of globals.css,
  how dark mode works (next-themes? class or data-theme?), which of these exist in components/ui:
  button, card, input, label, badge, alert — and whether they were customised vs stock shadcn.
- List any hard-coded colours (hex, bg-blue-600, text-gray-500 ...) in app/ and components/ that bypass tokens.

PHASE 1 — Theme tokens (the part that changes the whole app)
- v4: open kt-ui/kt-theme.v4.css. In the project's globals.css REPLACE the values inside the existing `:root {}` and `.dark {}`
  with KT UI's values (keep any extra app-specific variables), MERGE the `@theme inline {}` block (add missing mappings:
  body, link, primary-hover, success/-subtle, warning/-subtle, info/-subtle, destructive-subtle, kt-*, shadow-kt-*, font-sans/mono,
  radius-*), and append the @utility blocks. Do not remove `@import "tailwindcss"` or other imports.
- v3: use kt-ui/kt-theme.v3.css (HSL channels) for :root/.dark and merge kt-ui/tailwind.v3.extend.js into theme.extend.
- Dark mode must use the `.dark` class. If the project uses something else, adapt the selector instead of changing the app's dark-mode system.
- Run the build. Stop and report.

PHASE 2 — Fonts
- Merge kt-ui/layout-fonts.snippet.tsx into app/layout.tsx: add Inter + IBM Plex Sans Thai + Source Code Pro via next/font
  with the CSS variables --font-inter, --font-plex-thai, --font-source-code. Remove the old font only if nothing else uses it.
- Add ThemeProvider only if the project has none.

PHASE 3 — Component look (apply DELTAS, do not blindly overwrite)
Reference implementations are in kt-ui/components/ui/*.tsx. For each existing component, keep the project's imports,
primitive library, extra variants and props, and apply only these KT UI changes:
- button: base `rounded-full font-semibold text-[15px]`; sizes default h-10 px-[18px], sm h-8 px-3, lg h-12 px-6, icon sizes;
  default = bg-primary hover:bg-primary-hover; secondary = bg-card text-foreground shadow-kt-sm hover:text-link;
  destructive = bg-destructive-subtle text-destructive (hover solid); link = text-link; add `group/button` to base and an
  optional `arrow` prop that renders ArrowIcon (copy it from the reference). Keep every existing variant/size name.
- card: `rounded-xl`, add `elevated` prop (no border + shadow-kt-md, else border); add CardEyebrow; CardDescription uses text-body.
- input: h-10 rounded-md border-input bg-card shadow-kt-sm; focus: border-ring ring-[3px] ring-accent; aria-invalid: border-destructive.
- label: font-semibold text-foreground.
- badge: rounded-sm, add variants info/success/warning (tone text on tone-subtle bg), destructive = subtle style.
- alert: filled tones — default bg-info-subtle text-info, add success/warning, destructive = bg-destructive-subtle.
- If a component doesn't exist yet, copy the reference file as-is.
- Optionally copy kt-ui/components/kt/{hero,site-header}.tsx and components/theme-toggle.tsx if I want them.

PHASE 4 — Clean up hard-coded styles
- Replace hard-coded colours found in Phase 0 with semantic tokens (see kt-ui/KT-UI-RULES.md). Ask me before changing
  anything that looks intentionally branded (logos, charts with meaning).

PHASE 5 — Lock it in
- Append kt-ui/KT-UI-RULES.md to CLAUDE.md or AGENTS.md (create if missing) so future AI edits follow KT UI.
- Run lint + build, fix errors, then list every file changed. Do not delete ./kt-ui/ — I will remove it myself (then also remove it from tsconfig exclude).
```
