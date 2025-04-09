// "use client";

// import React from "react";
// import clsx from "clsx";

// /* 
//   ------------------------------------------------------------------
//   Componente para los titulos y etiquetas <h> -> jerarquías de texto 
//   ------------------------------------------------------------------
// */

// const Heading = ({ level = "h1", children, className }) => {
//   // Determinar el componente HTML según el nivel
//   let Component;
//   switch (level) {
//     case "h1":
//       Component = "h1";
//       break;
//     case "h2":
//       Component = "h2";
//       break;
//     case "h3":
//       Component = "h3";
//       break;
//     case "h4":
//       Component = "h4";
//       break;
//     case "h5":
//       Component = "h5";
//       break;
//     case "h6":
//       Component = "h6";
//       break;
//     case "highlight":
//       Component = "h4";
//       break;
//     case "title-sm":
//       Component = "h6";
//       break;
//     case "subtitle":
//       Component = "h5";
//       break;
//     default:
//       Component = "h1"; // Por defecto, usar h1 si no se especifica nivel válido
//       break;
//   }

//   // clsx, aplica clases según el valor del atributo level de manera dinámica
//   const classes = clsx([
//     "text-text font-title text-pretty",
//     {
//       "text-36 sm:text-40 mb-6 font-medium": level === "h1",
//       "text-32 sm:text-36 mb-4 font-medium": level === "h2",
//       "text-28 sm:text-32 mb-4 font-medium": level === "h3",
//       "text-24 sm:text-28 mb-2 font-medium": level === "h4",
//       "text-20 sm:text-24 mb-2 font-medium": level === "h5",
//       "text-base font-medium uppercase mb-2": level === "h6",
//       "text-base sm:text-20 font-normal mb-2 leading-snug": level === "title-sm",
//       "text-base sm:text-20 md:text-24 mb-2 font-light max-w-[50ch] md:max-w-[70ch] 2xl:max-w-[75ch]": level === "subtitle",
//     }, className,
//   ]);
//   return <Component className={classes}>{children}</Component>;
// };

// export default Heading;
"use client";

import React from "react";

const Heading = ({ level = "h1", children, className = "" }) => {
  const Component = {
    h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6",
    highlight: "h4", "title-sm": "h6", subtitle: "h5",
  }[level] || "h1";

  const baseClasses = "text-text font-title text-balance";
  const sizeClasses = {
    h1: "text-36 sm:text-40 mb-6 font-medium",
    h2: "text-32 sm:text-36 mb-4 font-medium",
    h3: "text-28 sm:text-32 mb-4 font-medium",
    h4: "text-24 sm:text-24 mb-2 font-medium",
    h5: "text-20 sm:text-24 mb-2 font-medium",
    h6: "text-base font-medium uppercase mb-2",
    "title-sm": "text-base sm:text-20 font-normal mb-2 leading-snug",
    subtitle: "text-20 md:text-24 mb-2 font-light max-w-[50ch] md:max-w-[70ch] 2xl:max-w-[75ch]",
  }[level] || "";

  return (
    <Component className={baseClasses + " " + sizeClasses + " " + className}>
      {children}
    </Component>
  );
};

export default Heading;


