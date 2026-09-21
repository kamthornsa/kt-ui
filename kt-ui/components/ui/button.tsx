import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// KT UI: pill shape, semibold labels, secondary = white + navy shadow.
// Variant/size names match shadcn so other shadcn components that call
// buttonVariants({ variant: "outline", size: "icon" }) keep working.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full text-[15px] font-semibold transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive:
          "bg-destructive-subtle text-destructive hover:bg-destructive hover:text-background",
        outline:
          "border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-card text-foreground shadow-kt-sm hover:text-link",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-link hover:text-foreground !px-0",
      },
      size: {
        default: "h-10 px-[18px] has-[>svg:only-child]:px-3",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/** The KT UI hover arrow: chevron slides right and a stem appears. */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={cn("!size-2.5 fill-none stroke-current stroke-2", className)}
    >
      <path
        d="M0 5h7"
        className="opacity-0 transition-opacity duration-150 group-hover/button:opacity-100"
      />
      <path
        d="M1 1l4 4-4 4"
        className="transition-transform duration-150 group-hover/button:translate-x-[3px]"
      />
    </svg>
  )
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  arrow = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    /** show the animated arrow after the label */
    arrow?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {children}
          {arrow && <ArrowIcon />}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants, ArrowIcon }
