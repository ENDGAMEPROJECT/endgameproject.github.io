"use client";
import * as React from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { endgameLogosPng } from "@/constants/assetsRoutes";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Divider, DividerVariants } from "@/components/ui/divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ResearchLineCard from "@/components/cards/ResearchLineCard";
import Image from "../components/ui/image";

//Banner
import {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerButton,
  BannerContent,
  BannerImg,
} from "@/components/core/Banner";

// UI
export default function Page() {
  //const [projects, setProjects] = useState(myprojectCards);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <main>
      <Banner>
        {/* <BannerImg></BannerImg> */}

        <BannerContent className="absolute ">
          <Image
            className="mb-6 md:mb-6 max-w-[480px] md:max-w-[720px]"
            src={endgameLogosPng + "logo_ENDGAME_main_darkBg.png"}
            alt="Endgame logo"
            fit="contain"
          />
          <BannerDescription className="h-full text-balance flex flex-col gap-2 font-normal">
            {t("home.description")}
          </BannerDescription>
          <Divider />
          <Link
            href="#researchlines"
            // scroll={false}
            className={ButtonVariants({
              variant: "outline",
              size: "lg",
              radius: "rounded_sm",
            })}
          >
            {t("home.action-button")}
            <ArrowForwardIcon className="mt-0.5" sx={{ fontSize: 22 }} />
          </Link>
        </BannerContent>
      </Banner>

      <section className="padding_group_description bg-background-200">
        <Divider size="lg" className="hidden md:flex"></Divider>
        <Divider size="sm"></Divider>

        <Heading level="h3">{t("home.section1Title")}</Heading>
        <Heading level="subtitle"> {t("home.section1Description")}</Heading>

        <Divider size="md"></Divider>
        <Divider size="xxl" className="hidden md:flex"></Divider>
        <div id="researchlines"></div>
      </section>

      <section
        className="standard_margin-s section-researchlines landing_cards"
        id="researchlines"
      >
        <Divider size="md"></Divider>
        <Heading level="h3">{t("home.latestContent.title")}</Heading>
        <header className="w-full flex justify-between border-b border-cyan-400">
          <Heading level='h4'>{t("home.latestContent.events.title")}</Heading>
          <Button
              className={
                ButtonVariants({
                  variant: "ghost",
                  size: "lg",
                  radius: "rounded_sm",
                }) + ""
              }
            >
              {t("research.button2")}
            </Button>
        </header>
        <section className="card"></section>

        <Divider size="md"></Divider>
      </section>
    </main>
  );
}
