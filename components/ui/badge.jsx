import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex px-3 py-1 pt-[5px] text-center border h-fit w-fit transition-colors bg-grey",
  {
    variants: {
      variant: { // style
        default: 'bg-grey-100/10 bg-opacity-10 text-text border-none capitalize font-body',
        primary: " bg-opacity-10 border-primary text-primary uppercase font-title",
        secondary: " bg-opacity-15 text-primary border-none capitalize font-body",
      },
      size: {
        default: "border-1 text-[14px]",
        lg: "text-[15px]",
        md: "text-[14px]",
        sm: "py-0.5 px-1.5 text-sm",
      },
      type: { // semantic colors
        // success: "border-green-100 bg-green-100 text-green-800",
        // warn: "border-amber-100 bg-amber-100 text-amber-800",
        // error: "border-red-200 bg-red-200 text-red-800",
        default: "border-primary bg-primary/10 text-primary",
        activity: "border-accent bg-accent bg-opacity-10 text-accent",
        info: "border-secondary bg-secondary/10 text-secondary",
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
