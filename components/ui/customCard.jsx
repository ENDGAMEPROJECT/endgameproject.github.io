"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import Heading from "@/components/ui/Heading";
import Text from "../ui/Text";
import { Button, ButtonVariants } from "@/components/ui/button";



/** --------------------------------------
 * CARD CONTAINER
 * ---------------------------------------
 */
const CustomCard = React.forwardRef(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "h-full w-full flex flex-col justify-start gap-4 overflow-hidden",
      className
    )}
    {...props}
  />
));
CustomCard.displayName = "CustomCard";

/** --------------------------------------
 * CARD HEADER
 * ---------------------------------------
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn("w-full pb-3 flex gap-2 justify-start", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/** --------------------------------------
 * CARD TITLE
 * ---------------------------------------
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading ref={ref} level="h3" className={cn(" ", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

/** --------------------------------------
 * CARD SUBTITLE
 * ---------------------------------------
 */
const CardSubtitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading ref={ref} level="h6" className={cn(className)} {...props} />
));
CardSubtitle.displayName = "CardSubtitle";

/** --------------------------------------
 * CARD DESCRIPTION
 * ---------------------------------------
 */
// const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
//   <Text
//     ref={ref}
//     className={cn("text-muted-foreground", className)}
//     {...props} />
// ))
// CardDescription.displayName = "CardDescription"

const CardDescription = React.forwardRef(
  ({description}, ref) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const [isChecked, setIsChecked] = useState(false);  // Estado para controlar si ya se comprobó la truncación
    const textRef = useRef(null);

    const toggleDescription = () => setIsExpanded(!isExpanded);

    // Efecto para detectar si el texto está truncado, solo se ejecuta la primera vez
    useEffect(() => {
      if (!isChecked) {
        const checkTruncation = () => {
          if (textRef.current) {
            const isTruncated = textRef.current.scrollHeight > textRef.current.clientHeight;
            setIsTruncated(isTruncated);
          }
        };

        checkTruncation(); // Comprueba la truncación al montar el componente
        setIsChecked(true); // Marcar como comprobado

        window.addEventListener("resize", checkTruncation); // Vuelve a comprobar cuando se redimensione la ventana
        return () => {
          window.removeEventListener("resize", checkTruncation); // Limpiar el evento de resize
        };
      }
    }, [isChecked, description]);  // Se ejecuta solo una vez cuando el texto cambia

    return (
      <div className="pb-3">
        <Text
          ref={textRef}
          className={clsx("text-white", {
            "line-clamp-none": isExpanded,
            "line-clamp-3": !isExpanded,
          })}
        >
          {description}
        </Text>

        {isTruncated && (
          <Button
            size="sm"
            variant="link"
            className="min-w-fit p-0 font-bold hover:text-blue-300 text-white underline underline-offset-2"
            onClick={toggleDescription}
          >
            {isExpanded
              ? t("projects.card.toggleLess")
              : t("projects.card.toggleMore")}
          </Button>
        )}
      </div>
    );
  }
);


CardDescription.displayName = "CardDescription";

  /* usage:
     <CardDescription 
      description={description_translation}
    />
  */

export default CardDescription;


/** -----------------------------------
 * CARD BODY
 * ------------------------------------
 */
const CardBody = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-full w-full flex flex-col justify-between", className)}
    {...props}
  />
));
CardBody.displayName = "CardBody";

/**
 * CARD CONTENT
 * Component for grouping content inside a main Card part (Header, Body, Footer)
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-full w-full flex flex-col justify-start", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

/** --------------------------------------
 * CARD FOOTER
 * ---------------------------------------
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn("pt-2 w-full flex gap-3 justify-end items-center", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  CustomCard,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardContent,
};