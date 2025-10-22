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
      "w-full h-[calc(80vh-5rem)]",
      "text-snow",
      // "gap-6 xl:gap-12",
      "flex justify-start items-center",
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
      "h-full z-10 flex flex-col items-start justify-center px-8 xs:px-10 md:px-20",
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
      "mb-4 text-20 sm:text-24 md:text-3xl text-pretty max-w-[40ch]",
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
  <div className={"relative top-0 md:relative flex w-full z-0 h-[calc(80vh-5rem)]"}>
    <Image
      className="md:h-[calc(80vh-5rem)] opacity-80"
      src="assets/images/bannerBg-placeholder.png"
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
