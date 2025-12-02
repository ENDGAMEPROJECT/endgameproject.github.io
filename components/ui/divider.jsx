"use client";

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

/* 
  ------------------------------------------------------------------
  Componente para meter espaciados en el contenido en bloque 
  ------------------------------------------------------------------
*/

  const DividerVariants = cva(
    "h-4",
    {
      variants: {
        size: {
          xs: "h-2",
          default: "h-4",
          sm: "h-6",
          md: "h-10",
          lg: "h-12",
          xl: "h-16",
          xxl: "h-24",
        },
      },
    }
  );

  // return <Component className={DividerVariants}></Component>;
  const Divider = React.forwardRef(({ className, size, ...props }, ref) => {
    return (
      <div
        className={cn(DividerVariants({ size }), className)} 
        ref={ref}
        {...props}
      />
    );
  });
  Divider.displayName = "Divider"

export { Divider, DividerVariants }

