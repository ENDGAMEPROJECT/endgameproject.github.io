"use client";

import * as React from "react";

import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { Button, ButtonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "../ui/image";

// la imagen de fondo del banner está enganchada en tailwind.config

const Banner = React.forwardRef(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      " md:min-h-[85vh]",
      "text-snow",
      // "gap-6 xl:gap-12",
      "flex justify-start items-center h-[85vh]",
      className
    )}
    {...props}
  />
));
Banner.displayName = "Banner";

const BannerContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    level="h1"
    className={cn(
      "h-fit py-12 px-8 xs:px-10 md:px-20 xl:px-40 w-full md:w-2/3 z-10 ",
      className
    )}
    {...props}
  />
));
BannerContent.displayName = "BannerContent";

const BannerLogo = React.forwardRef(({ className, ...props }, ref) => (
  <img src="" alt="" />
));
BannerLogo.displayName = "BannerLogo";

const BannerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Heading
    ref={ref}
    level="h2"
    className={cn("text-snow", className)}
    {...props}
  />
));
BannerTitle.displayName = "BannerTitle";

const BannerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <Heading
    ref={ref}
    level="h4"
    className={cn("text-snow mb-4", className)}
    {...props}
  />
));
BannerDescription.displayName = "BannerDescription";

const BannerButton = React.forwardRef(({ className, ...props }, ref) => (
  <Button
    href="#"
    className={`${ButtonVariants({
      variant: "primary",
      size: "default",
      radius: "rounded_sm",
    })}`}
    {...props}
  ></Button>
));
BannerButton.displayName = "BannerButton";

const BannerImg = React.forwardRef(({ className, ...props }, ref) => (
  // <div ref={ref} className={cn("hidden md:flex relative w-1/2 h-full overflow-hidden  justify-center", className)}>
  //   <img
  //     className="w-80 h-80 p-8 rounded-full bg-background-200  flex items-center justify-center object-contain"
  //     src="ging_logo.png"
  //     alt="icon"
  //   />
  // </div>
  <div
    className={
      //landing 1 /2
      // " absolute top-0 md:relative flex w-full md:w-7/12 z-0 h-20 md:h-[90vh] "
      //  +
      //landing 3
      "relative top-0 md:relative flex w-full z-0 h-[85vh]"
    }
  >
    <Image
      className="md:h-[85vh] opacity-80"
      src="assets/img/backgrounds/landing_4.svg"
      alt="background illustration"
      fit="cover"
    />
    {/* <div className="hidden md:flex md:flex-col absolute  h-[90vh]  p-3 justify-start">
      <a className="flex text-24 opacity-45 font-semibold text-white items-center justify-center row-start-2 col-start-2">
         DATA </a>
      <a className="flex text-24 opacity-45 font-semibold text-white items-center justify-center row-start-1 col-start-5">
         VIDEOCONFERENCE </a>
         <a className="flex text-24 opacity-45 font-semibold text-white items-center justify-center row-start-4 col-start-3">
        ARTIFICIAL INTELLIGENCE </a>
         <a className="flex text-24 opacity-45 font-semibold text-white items-center justify-center row-start-3 col-start-6 col-span-2">
          E-LEARNING  </a>
         <a className="flex text-24 opacity-45 font-semibold text-white items-center justify-center row-start-6 col-start-6">
          NETWORKS  </a>
    
    </div> */}
  </div>
));
BannerImg.displayName = "BannerImg";

export {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerContent,
  BannerImg,
  BannerButton,
  BannerLogo,
};
