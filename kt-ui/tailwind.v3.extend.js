// KT UI additions for Tailwind v3 — palette #01244C / #00A6F7 / #38E0FB / #B8F456 — merge into theme.extend of tailwind.config.(js|ts)
// (shadcn's own entries: background, primary, card ... are already there; keep them)
const c = (v) => `hsl(var(--${v}) / <alpha-value>)`

module.exports = {
  theme: {
    extend: {
      colors: {
        body: c("body"),
        link: c("link"),
        "primary-hover": c("primary-hover"),
        success: { DEFAULT: c("success"), subtle: c("success-subtle") },
        warning: { DEFAULT: c("warning"), subtle: c("warning-subtle") },
        info: { DEFAULT: c("info"), subtle: c("info-subtle") },
        "destructive-subtle": c("destructive-subtle"),
        kt: { navy: c("kt-navy"), blue: c("kt-blue"), cyan: c("kt-cyan"), lime: c("kt-lime") },
      },
      boxShadow: {
        "kt-sm": "0 2px 5px -1px rgb(1 36 76 / 0.22), 0 1px 3px -1px rgb(1 36 76 / 0.28)",
        "kt-md": "0 13px 27px -5px rgb(1 36 76 / 0.22), 0 8px 16px -8px rgb(1 36 76 / 0.28)",
        "kt-lg": "0 50px 100px -20px rgb(1 36 76 / 0.25), 0 30px 60px -30px rgb(1 36 76 / 0.3)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-plex-thai)", "system-ui", "sans-serif"],
        mono: ["var(--font-source-code)", "ui-monospace", "monospace"],
      },
    },
  },
}
