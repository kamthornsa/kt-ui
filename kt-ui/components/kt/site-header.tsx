import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "#", label: "Products" },
  { href: "#", label: "Docs" },
  { href: "#", label: "Pricing" },
]

export function SiteHeader({ brand = "kt/ui" }: { brand?: string }) {
  return (
    <header className="relative z-10">
      <nav className="mx-auto flex max-w-6xl items-center gap-8 px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          {brand}
        </Link>
        <ul className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-[15px] font-semibold text-foreground/85 hover:text-link"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <Link href="#" className="text-[15px] font-semibold text-link hover:text-foreground">
            Sign in
          </Link>
          <Button size="sm" arrow asChild={false}>
            Get started
          </Button>
        </div>
      </nav>
    </header>
  )
}
