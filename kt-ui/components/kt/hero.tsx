import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * KT UI hero: angled lime → cyan → blue gradient band behind a large headline.
 * Text over the band stays `text-foreground`; in dark mode the band drops
 * to 40% opacity (--hero-band-opacity) so white text keeps contrast.
 */
export function Hero({
  eyebrow,
  title,
  lead,
  actions,
  className,
}: {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  lead?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("relative overflow-hidden pt-24 pb-20", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bottom-[35%] origin-top-left -skew-y-[8deg] bg-linear-[115deg] from-kt-lime via-kt-cyan via-45% to-kt-blue"
        style={{ opacity: "var(--hero-band-opacity)" }}
      >
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          {eyebrow && <div className="eyebrow mb-3 !text-foreground">{eyebrow}</div>}
          <h1 className="text-display mb-4 max-sm:text-[2.5rem]">{title}</h1>
          {lead && <p className="text-lead mb-8 text-foreground">{lead}</p>}
          {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  )
}
