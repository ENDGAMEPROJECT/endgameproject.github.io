import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex px-3 py-1 items-center border h-fit w-fit rounded-sm transition-colors",
  {
    variants: {
      variant: {
        default: "bg-background-300 text-text",
        primary: "bg-text text-black",
        secondary: "bg-gray-900/20 text-gray-300 border-none ",
      },
      size: {
        default: "px-1.5 py-0.5 text-sm rounded-sm",
        lg: "px-3 py-1 border-1 text-[14px] font-bold uppercase",
        md: "px-3 py-1 border-1 text-[14px]",
        sm: "py-0.5 px-1.5 text-sm rounded-sm",
        xs: "py-0.5 px-1.5 text-xs rounded-sm",
      },
      type: {
        success: "border-green-100 bg-green-100 text-green-800",
        warn: "border-amber-100 bg-amber-100 text-amber-800",
        error: "border-red-200 bg-red-200 text-red-800",
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
