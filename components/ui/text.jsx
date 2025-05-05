"use client";

import React from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

/* 
  ------------------------------------------------------------------
  Componente para los titulos y etiquetas <h> -> jerarquías de texto // para esto se usa el Heading, este para bloques de texto
  ------------------------------------------------------------------
*/

const Text = React.forwardRef(({ type = "p", children, className, ...props }, ref) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (type) {
    case "p":
      Component = "p";
      break;
    case "small":
      Component = "small";
      break;
      case "short-p":
        Component = "p";
        break;
    case "pre":
      Component = "pre";
      break;
    default:
      Component = "p"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo level de manera dinámica
  const classes = clsx([
    "font-main max-w-[70ch] text-text/90",
    {
      " text-18 sm:text-base text-pretty": type === "p",
      "text-sm text-wrap leading-normal": type === "small",
      " text-18 sm:text-base": type === "short-p",
      " text-18 sm:text-base text-pretty": type === "pre",
    },
    className
  ])

  return <Component ref={ref} className={cn(classes)} {...props}>{children}</Component>;
});

export default Text;
