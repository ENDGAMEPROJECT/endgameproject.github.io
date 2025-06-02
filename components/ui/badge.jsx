import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex px-3 py-1 pt-[5px] text-center border h-fit w-fit transition-colors bg-grey",
  {
    variants: {
      variant: { // style
        default: 'bg-grey-100 bg-opacity-10 text-text border-none font-body',
        type: " bg-opacity-100 border uppercase font-title !text-black !font-bold",
        primary: " bg-opacity-10 border uppercase font-title",
        secondary: " bg-opacity-15 border-none capitalize font-body",
      },
      size: {
        default: "border-1 text-[14px]",
        xl: "text-[18px] font-medium",
        lg: "text-[15px] font-medium",
        md: "text-[14px]",
        sm: "py-0.5 px-1.5 text-sm",
      },
      type: { // semantic colors
        // success: "border-green-100 bg-green-100 text-green-800",
        // warn: "border-amber-100 bg-amber-100 text-amber-800",
        // error: "border-red-200 bg-red-200 text-red-800",
        default: "border-primary bg-primary text-primary",
        activity: "border-accent bg-accent text-accent-400 bg-accent",
        info: "border-secondary-400 bg-secondary-400 text-secondary-400",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      type: "default",
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
