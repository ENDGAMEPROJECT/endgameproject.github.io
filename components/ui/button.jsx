"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const ButtonVariants = cva(
  "w-fit min-w-20 h-fit inline-flex gap-2 items-center justify-center font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-grey50 text-myText shadow hover:bg-myForeground",
        secondary:
        "bg-background400 text-gray300 hover:text-myForeground hover:bg-background200",
        tertiary:
        "border border-transparent bg-transparent text-myForeground shadow-none py-0",
        outline:
          "border border-grey50 bg-transparent text-grey50 hover:bg-myForeground/5 hover:text-myForeground hover:border-myForeground",
        //for outline buttons over dark backgrounds
        // outlineForeground:
        //   "border border-input border-secondary text-secondary-100 shadow-sm hover:bg-primary/30 hover:text-accent-foreground",
        ghost:
          "border border-transparent bg-transparent text-myText hover:bg-myForeground/10 shadow-none",
        link: "bg-transparent hover:bg-transparent underline hover:scale-[103%] hover:spa shadow-none",
        // linkForeground:
        //   "bg-transparent text-primary-foreground underline-offset-4 underline hover:bg-secondary-100/60 shadow-none",
      },
      size: {
        xl: 'px-6 py-2 text-2xl font-title border-2',
        lg: "px-6 py-2 text-lg",
        md: "px-4 py-2 text-base",
        sm: "px-3 py-1.5 text-sm",
        icon: "px-2.5 py-2.5 text-sm",
        icon_sm: "w-6 h-6 min-w-6 min-h-6 p-0",
      },
      // type: {
      //   default: "",
      //   primary: "border-primary bg-primary text-black",
      //   action: "border-accent bg-accent text-black",
      //   info: "border-secondary bg-secondary text-text",
      // },
      radius: {
        default: "rounded-none",
        rounded_sm: "rounded-sm",
        rounded_md: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      // type: 'default',
      radius: "rounded_sm",
    },
  }
);

const Button = React.forwardRef(
  (
    { className, variant, size, radius, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          ButtonVariants({ variant, size, radius, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, ButtonVariants };
