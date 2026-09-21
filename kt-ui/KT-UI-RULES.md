# KT UI design rules (for AI coding agents)
<!-- Copy this section into CLAUDE.md / AGENTS.md / .cursor/rules so every future change keeps the KT UI look. -->

## Design system: KT UI (on shadcn/ui + Tailwind)
- Use shadcn components from `@/components/ui/*`; never hard-code hex colours or arbitrary shadows.
- Colours: only semantic tokens — `bg-background`, `bg-secondary` (pale band), `bg-card`, `text-foreground` (headings), `text-body` (paragraphs), `text-muted-foreground` (helper), `text-link`, `bg-primary`.
- Status: `bg-success-subtle text-success`, `bg-warning-subtle text-warning`, `bg-info-subtle text-info`, `bg-destructive-subtle text-destructive`.
- Brand palette: `#01244C` navy (primary, ink), `#00A6F7` blue (interactive accent → `text-link`), `#38E0FB` cyan and `#B8F456` lime (decorative).
- `kt-navy / kt-blue / kt-cyan / kt-lime` are raw brand colours for gradients, charts and illustration only — never text colour; readable text uses `text-link`.
- Buttons are pills (`rounded-full`). One primary button per view. Forward actions: `<Button arrow>`.
- Cards: `<Card>` (hairline border) on `bg-background`; `<Card elevated>` (shadow-kt-md) on `bg-secondary` bands.
- Shadows: `shadow-kt-sm` controls, `shadow-kt-md` cards/dropdowns, `shadow-kt-lg` floating panels. No other shadows.
- Radius: `rounded-sm` badges, `rounded-md` inputs/alerts, `rounded-xl` cards, `rounded-full` buttons.
- Type: headings `font-semibold tracking-tight`; page hero `text-display`; intro `text-lead`; kicker `eyebrow`. Thai + English mixed; sentence case.
- Spacing: sections `py-20 md:py-24`, card grid `gap-8`, container `mx-auto max-w-6xl px-4`.
- Dark mode via `.dark` class (next-themes). Every new UI must look right in both themes.
- Never re-run `shadcn add` for button/card/input/label/badge/alert (they are customised). New shadcn components are fine.
