import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        // estilos generales
        "flex h-9 rounded-md border border-gray-500 bg-transparent px-3 py-1 text-base text-white transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50",
        // margin
        "mb-2 md:mb-4 xl:mb-6",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
