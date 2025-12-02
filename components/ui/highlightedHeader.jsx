"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

import Heading from "./heading";

const wordVariants = cva("text-myTextInverse px-1.5", {
  variants: {
    variant: {
      // style
      default: "bg-myPrimary",
      activity: "bg-accent400",
      info: "bg-secondary400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const HighlightedHeader = ({ string, level, className, variant }) => {
  // recibe string, separa palabras en spans y las pone en un flex con espaciado
  const words = string.split(" ");

  const levelSpecificClasses =
    level === "h2"
      ? "mt-0 pt-0 justify-center md:px-[2%] lg:px-[5%] xl:px-[10%] 2xl:px-[12.5%] 3xl:px-[16%]"
      : "";
  return (
    <Heading
      level={level}
      className={cn(
        "w-full !mb-0 flex flex-wrap normal-case",
        levelSpecificClasses, // clases condicionales
        className // clases recibidas por prop
      )}
    >
      {words.map((word, index) => (
        <span className={cn(wordVariants({ variant }))} key={index}>
          {word}
        </span>
      ))}
    </Heading>
  );
};

export default HighlightedHeader;
