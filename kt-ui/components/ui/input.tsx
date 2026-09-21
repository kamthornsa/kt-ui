import * as React from "react"

import { cn } from "@/lib/utils"

// KT UI: 3:1 control border, soft navy shadow, primary focus halo.
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full min-w-0 rounded-md border border-input bg-card px-3 py-2 text-[15px] text-foreground shadow-kt-sm transition-[color,box-shadow,border-color] outline-none",
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent",
        "aria-invalid:border-destructive aria-invalid:ring-destructive-subtle",
        className
      )}
      {...props}
    />
  )
}

export { Input }
