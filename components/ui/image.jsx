"use client";

import React from "react";
import clsx from "clsx";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

const Image = ({
  fit = "cover",
  src,
  alt = "",
  className,
  layout = "top-right",
  badgeVariant = "",
  badgeSize = "",
  badgeContent = "",
  svgCode,  // SVG en formato de código
}) => {

  /**----------------------------------
   * Component Styles
   * ----------------------------------
   */
  const imageContainerClasses = "relative flex w-full h-full overflow-hidden " + className;

  const imageClasses = clsx(
    "w-full h-full flex items-center justify-center", 
    {
      "object-cover": fit === "cover",
      "object-contain": fit === "contain",
    }
  );

  const badgeLayout = clsx(
    "absolute", 
    {
      "top-2 left-2": layout === "top-left",
      "top-2 right-2": layout === "top-right",
      "bottom-2 left-2": layout === "bottom-left",
      "bottom-2 right-2": layout === "bottom-right",
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2": layout === "center",
    }
  );

  return (
    <div className={cn(imageContainerClasses)}>
      {/* Se pinta si hay código svg */}
      {svgCode && (
        <div
          className={imageClasses + ""}
          dangerouslySetInnerHTML={{ __html: svgCode }} // Renderizamos SVG
        />
      )}
      {/* Se pinta si hay una ruta de imagen */}
      { src && (
        <img src={src} alt={alt} className={imageClasses} />
      )}
      {badgeContent && (
        <Badge className={badgeLayout} variant={badgeVariant} size={badgeSize}>
          {badgeContent}
        </Badge>
      )}
    </div>
  );
};

export default Image;
