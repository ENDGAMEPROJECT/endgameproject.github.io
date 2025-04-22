"use client";

import React from "react";
import { cn } from "@/lib/utils";

import Heading from "./Heading";
// import Heading from "./Heading";

// recibe string, separa palabras en spans y las pone en un flex con espaciado

const HighlightedHeader = ({ string, level, className }) => {
  const words = string.split(" ");
  return (
    <Heading
      level={level}
      className={cn("w-full !mb-0 flex flex-wrap text-black normal-case", className)} // necesita cn() para que se concatenen bien las clases
    >
      {words.map((word, index) => (
        <span className="px-1 bg-primary" key={index}>{word}</span>
      ))}
    </Heading>
  );
};

export default HighlightedHeader;
