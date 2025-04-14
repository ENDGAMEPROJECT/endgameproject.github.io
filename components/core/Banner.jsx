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
      "w-full md:min-h-[85vh]",
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
      "h-fit md:max-w-[720px] md:max-w-[1000px] py-12 px-8 xs:px-10 md:px-20 xl:pl-40 z-10 ",
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
    level="h3"
    className={cn(
      "text-snow mb-4 text-xl sm:text-2xl md:text-3xl text-pretty",
      className
    )}
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
  <div className={"relative top-0 md:relative flex w-full z-0 h-[85vh]"}>
    <Image
      className="md:h-[85vh] opacity-80"
      src="assets/img/backgrounds/landing_4.svg"
      alt="background illustration"
      fit="cover"
    />
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
