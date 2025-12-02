import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex px-3 py-1 pt-[5px] text-center border h-fit w-fit font-title transition-colors bg-grey400",
  {
    variants: {
      variant: { // style
        default: 'bg-grey100 bg-opacity-10 text-myText border-none',
        type: " bg-opacity-100 border uppercase font-title !text-myTextInverse !font-bold",
        primary: " bg-opacity-10 border border-myPrimary uppercase font-title text-myText",
        secondary: " bg-opacity-15 border-none capitalize text-myText",
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
        default: "border-myPrimary bg-myPrimary text-myPrimary",
        activity: "border-accent400 bg-accent text-accent400",
        info: "border-secondary400 bg-secondary400 text-secondary400", ////////////////////////////////
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
