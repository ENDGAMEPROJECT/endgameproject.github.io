"use client";
import * as React from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { escaperooms } from "@/constants/escaperooms";

import { events } from "@/constants/events";
import EventCard from "@/components/cards/EventCard";
import { publications } from "@/constants/results";

// assets
import { endgameLogosPng } from "@/constants/assetsRoutes";
import ArrowForwardSharp from "@mui/icons-material/ArrowForwardSharp";
import EventSharp from "@mui/icons-material/EventSharp";

// components
import { Button, ButtonVariants } from "@/components/ui/button";
import { Badge, BadgeVariants } from "@/components/ui/badge";
import Heading from "@/components/ui/Heading";
import { Divider, DividerVariants } from "@/components/ui/divider";
import HighlightedHeader from "@/components/ui/highlightedHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "../components/ui/image";
import Text from "../components/ui/text";
import PartnerCard from "../components/cards/PartnerCard";
import MissionCard from "../components/cards/MissionCard";
import EscaperoomCard from "../components/cards/EscaperoomCard";

import {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerButton,
  BannerContent,
  BannerImg,
} from "@/components/core/Banner";
import {
  CustomCard,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardContent,
  CardFooter,
  CardBody,
} from "@/components/ui/customCard";
import { mission } from "@/constants/mission";
import { partners } from "@/constants/partners";

import { useContext, useEffect } from "react";
import { ThemeContext } from "@/components/ThemeContext";

// UI
export default function Page() {
  //const [projects, setProjects] = useState(myprojectCards);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { webTheme } = useContext(ThemeContext);

  return (
    <main>
      <Banner className="relative flex flex-col ">
        <BannerImg className=""></BannerImg>

        <BannerContent className="absolute !w-full top-0 left-0 bg-gradient-to-r from-black to-black/50">
          <Image
            className="h-fit mb-6 md:mb-6 max-w-[480px] md:max-w-[720px]"
            src={endgameLogosPng + "logo_ENDGAME_main_darkBg.png"}
            alt="Endgame logo"
            fit="contain"
          />
          <BannerDescription className="flex flex-col gap-2 font-normal">
            {t("home.description")}
          </BannerDescription>
          <Divider />
          {/* <Link
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
          </Link> */}
        </BannerContent>
      </Banner>
      <Divider size="xl" />

      {/* SECTION ABOUT */}
      <Heading level="h2" className="text-myPrimary">{t("home.aboutSection")}</Heading>
      <section className="standard_margin flex flex-col gap-24 bg-background300 text-myText">
        <article>
          <Heading level="h3" className>{t("home.about.title")}</Heading> 
          <Heading level="subtitle" className="text-myText"> {t("home.about.content")}</Heading>
        </article>
        <article>
          <Heading level="h3">{t("home.mission.title")}</Heading>
          <ul className="gap-4 justify-center grid sm:grid-cols-3 xl:grid-cols-5">
            {mission.map((mission, key) => (
              <MissionCard mission={mission} key={key} />
            ))}
          </ul>
        </article>
        <article>
          <Heading level="h3">Escaperooms</Heading>
          <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-8">
            <div>
              {escaperooms.map((escaperoom, key) => {
                return <EscaperoomCard escaperoom={escaperoom} key={key} />;
              })}
            </div>
            <ul className="flex flex-col gap-4">
              <Heading level="h5" className="text-myPrimary uppercase">{t("escaperooms.oncoming")}</Heading>
              <li className="flex justify-start gap-4 wrap">
                <Text
                  type="pre"
                  className="text-wrap"
                ><HighlightedHeader
                    level="h6"
                    string="March '26"
                    className="w-fit inline mr-4"
                  />Escaperoom title to be anounced
                <Text
                  type="pre"
                  className="text-primary inline mx-2 text-wrap"
                >by FNE & Maldita · FI</Text>
                </Text>
              </li>
              <li className="flex justify-start gap-4 wrap">
                <Text
                  type="pre"
                  className="text-wrap"
                ><HighlightedHeader
                    level="h6"
                    string="June '26"
                    className="w-fit inline mr-4"
                  />Escaperoom title to be anounced
                <Text
                  type="pre"
                  className="text-primary inline mx-2 text-wrap"
                >by UPM & Maldita · ES</Text>
                </Text>
              </li>
            </ul>
          </div>
        </article>

        {/* ABOUT partners */}
        <article>
          <Heading level="h3">{t("home.partners.title")}</Heading>
          <Heading
            level="h5"
            className="text-center mb-4 uppercase text-myPrimary"
          >
            {t("home.partners.universities")}
          </Heading>
          <ul className="md:grid grid-cols-3 gap-8 items-end">
            <PartnerCard partner={partners.uef} webTheme={webTheme}/>
            <PartnerCard partner={partners.upm} webTheme={webTheme}/>
            <PartnerCard partner={partners.bmu} webTheme={webTheme}/>
          </ul>
          <Heading
            level="h5"
            className="text-center my-4 uppercase text-myPrimary"
          >
            {t("home.partners.agencies")}
          </Heading>
          <ul className="md:grid grid-cols-3 gap-8">
            <PartnerCard partner={partners.mdt} webTheme={webTheme}/>
            <PartnerCard partner={partners.ftb} webTheme={webTheme}/>
            <PartnerCard partner={partners.fnt} webTheme={webTheme}/>
          </ul>
        </article>
      </section>
      <Divider size="xl" />
      {/* LATEST CONTENT */}
      <section className="standard_margin" id="researchlines">
        <Divider size="md"></Divider>
        <Heading level="h2" className="text-myPrimary">{t("home.latestContent.title")}</Heading>
        {/* EVENTS AND NEWS */}
        <section className="cards">
          <header className="mb-4 w-full flex justify-between border-b border-myPrimary">
            <Heading level="h4">{t("home.latestContent.events.title")}</Heading>
            <Button
              className={
                ButtonVariants({
                  variant: "tertiary",
                  size: "lg",
                  radius: "rounded_sm",
                }) + " hover:text-myPrimary"
              }
            >
              <Link
                href={"/events"}
                rel="noopener noreferrer"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                {/* <Heading level="h6">{t("home.latestContent.title")}</Heading> */}
                {t("home.latestContent.events.button")}
                <ArrowForwardSharp />
              </Link>
            </Button>
          </header>
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.slice(0, 3).map((event, key) => {
              return (
                <Link
                  key={key}
                  href={`/events/${event.eventname}`}
                  className="min-h-40 p-4 bg-myBackground border border-transparent hover:border-accent400 transition-all duration-200 ease-in-out"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <CustomCard>
                    {/*  */}
                    <CardHeader className="pb-0">
                      {event.type && (
                        <Badge variant="type" size="md" type="activity">
                          {event.type}
                        </Badge>
                      )}
                      {/* {event.category && (
                        <Badge variant="primary" size="md" type="activity">
                          {event.category}
                        </Badge>
                      )} */}
                      {event.country && (
                        <Badge variant="primary" size="md" type="activity" className="bg-accent/15">
                          {event.country}
                        </Badge>
                      )}
                    </CardHeader>
                    {/*  */}
                    <CardBody>
                      <CardTitle level="h5" className="grow text-pretty">
                        {t(event.title_en)}
                      </CardTitle>
                      <CardSubtitle
                        level="h6"
                        className="text-accent flex gap-2 items-center border"
                      >
                        <EventSharp className="h-5 w-5" />
                        {event.date + (event.hour ? " - " + event.hour : "")}
                      </CardSubtitle>
                      {Array.isArray(event.keywords) && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {event.keywords.map((keyword, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              size="sm"
                              className="text-accent400 bg-accent/15"
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardBody>
                  </CustomCard>
                </Link>
              );
            })}
          </section>
        </section>
        {/* --------------------------------------------------------------------
        RESEARCH AND RESULTS 
        --------------------------------------------------------------------*/}
        <section className="cards mt-8">
          <header className="mb-4 w-full flex justify-between border-b border-myPrimary">
            <Heading level="h4" className="text-myText">
              {t("home.latestContent.research.title")}
            </Heading>
            <Button
              className={
                ButtonVariants({
                  variant: "tertiary",
                  size: "lg",
                  radius: "rounded_sm",
                }) + " hover:text-myPrimary"
              }
            >
              <Link
                href={"/research"}
                rel="noopener noreferrer"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                {t("home.latestContent.research.button")}
                <ArrowForwardSharp />
              </Link>
            </Button>
          </header>
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {publications.slice(0, 3).map((publication, key) => {
              return (
                <Link // aquí quizás no tiene sentido el link, ya que no habrá un single de publicación
                  key={key}
                  href={`/research`}
                  className="min-h-40 p-4 bg-myBackground border border-transparent hover:border-secondary400 transition-all duration-200 ease-in-out"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <CustomCard>
                    <CardHeader>
                      {publication.type && (
                        <Badge variant="type" size="lg" type="info">
                          {publication.type}
                        </Badge>
                      )}
                      {publication.country && (
                        <Badge variant="primary" size="lg" type="info" className="bg-secondary/15">
                          {publication.country}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardBody className="h-full justify-start">
                      <CardContent className="gap-1 h-full justify-start">
                        <CardTitle level="h5" className="text-pretty">
                          {publication.title_en}
                        </CardTitle>

                        {publication.date?.[0] && (
                          <div className="flex items-center !text-secondary200">
                            <Text
                              type="small"
                              className="font-bold text-sm !text-current"
                            >
                              {/* {t(`research.filter.${category}`)} */}
                              {publication.category}
                            </Text>
                            <span className="mx-2">·</span>
                            <Text type="small" className="!text-current">
                              {publication.date}
                            </Text>
                          </div>
                        )}

                        {Array.isArray(publication.keywords) && (
                          <div className="flex flex-wrap gap-1.5">
                            {publication.keywords.map((keyword, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                size="sm"
                                className="text-secondary-400 bg-secondary/15"
                              >
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </CardBody>
                  </CustomCard>
                </Link>
              );
            })}
          </section>
        </section>

        <Divider size="md"></Divider>
      </section>
    </main>
  );
}
