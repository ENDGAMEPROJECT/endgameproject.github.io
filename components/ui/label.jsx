import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "pb-1.5 md:pb-2 xl:pb-2.5 flex text-sm 2xl:text-base font-base text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ",
)

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(),
    className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
