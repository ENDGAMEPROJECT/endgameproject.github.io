import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex px-3 py-1 place-content-center text-center border h-fit w-fit transition-colors !leading-0",
  {
    variants: {
      variant: {
        default: 'bg-grey-100/10 text-text border-none capitalize font-body',
        primary: "bg-primary/5 border-primary text-primary uppercase font-title",
        secondary: "bg-primary/10 text-primary border-none capitalize font-body",
      },
      size: {
        default: "px-3 py-1 border-1 text-[14px]",
        lg: "px-3 py-1 text-[15px]",
        md: "px-3 py-1 text-[14px]",
        sm: "py-0.5 px-1.5 text-sm",
      },
      type: {
        success: "border-green-100 bg-green-100 text-green-800",
        warn: "border-amber-100 bg-amber-100 text-amber-800",
        error: "border-red-200 bg-red-200 text-red-800",
        // default: "border-green-100 bg-green-100 text-green-800",
        // activity: "border-amber-100 bg-amber-100 text-amber-800",
        // info: "border-red-200 bg-red-200 text-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, size, type, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, type }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
