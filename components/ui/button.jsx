"use client";

import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ButtonVariants = cva(
  "w-fit min-w-20 h-fit inline-flex gap-2 items-center justify-center font-normal whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary-800",
        outline:
          "border border-gray-300 text-gray-300 bg-transparent hover:bg-white/5 hover:text-white hover:border-white/20",
        outlineForeground: //for outline buttons over dark backgrounds
          "border border-input border-secondary text-secondary-100 shadow-sm hover:bg-primary/30 hover:text-accent-foreground",
        secondary:
          "bg-background-400 text-gray-300 hover:text-white hover:bg-background-200",
          ghost:
          "border border-transparent bg-transparent text-orange-400 hover:text-orange-300 rounded-full hover:underline-offset-4 hover:bg-orange-400/20 shadow-none",
        link: 
          "bg-transparent hover:bg-transparent text-primary underline hover:underline shadow-none",
        linkForeground:
          "bg-transparent text-primary-foreground underline-offset-4 underline hover:bg-secondary-100/60 shadow-none", 
        },
      size: {
        default: "px-4 py-2 text-base ",
        sm: "px-3 py-1.5 text-base md:text-sm font-semibold",
        lg: "px-5 py-2 text-lg",
        icon: "px-2.5 py-2.5 min-w-7 w-7 min-h-7 h-7",
        icon_sm:"w-6 h-6 min-w-6 min-h-6 p-0" 
      },
      radius: {
        rounded_sm: "rounded-sm",
        rounded_md: "rounded-md",
        rounded_lg: "rounded-lg",
        rounded_full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, radius, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(ButtonVariants({ variant, size, radius, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, ButtonVariants }
