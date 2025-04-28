"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

import Heading from "./Heading";


const wordVariants = cva(
  "text-black px-2",
  {
    variants: {
      variant: { // style
        default: "bg-primary",
        activity: "bg-accent",
        info: "bg-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
const HighlightedHeader = ({ string, level, className, variant }) => {
  // recibe string, separa palabras en spans y las pone en un flex con espaciado
  const words = string.split(" ");

  return (
    <Heading
      level={level}
      className={cn('w-full !mb-0 flex flex-wrap normal-case', className)} // necesita cn() para que se concatenen bien las clases
    >
      {words.map((word, index) => (
        <span className={cn(wordVariants({ variant }))} key={index}>{word}</span>
      ))}
    </Heading>
  );
};

export default HighlightedHeader;
