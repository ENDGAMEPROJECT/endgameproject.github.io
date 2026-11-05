"use client";
import * as React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { translator } from "@/lib/utils.js";

import SEO from "@/components/SEOWrapper";
import StructuredData from "@/components/StructuredData";
import { getPageMetadata } from "@/constants/metadata";
import { simoPageSchema } from "@/constants/schemas";

// Data
import { events } from "@/constants/events";
import { escaperooms } from "@/constants/escaperooms";

// Components
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import Image from "@/components/ui/image";
import { Button } from "@/components/ui/button";

// Icons
import EventSharp from "@mui/icons-material/EventSharp";
import ArrowForwardSharp from "@mui/icons-material/ArrowForwardSharp";
import NorthEastSharp from "@mui/icons-material/NorthEastSharp";
import PlayArrowSharp from "@mui/icons-material/PlayArrowSharp";
import SaveAltSharp from "@mui/icons-material/SaveAltSharp";
import EmailOutlined from "@mui/icons-material/EmailOutlined";

// Content shown on this page
const STREAMING_EVENT = "StreamingLASTCHANCE";
const SIMO_ESCAPEROOMS = ["theClickTrap", "echo", "lastchance"];
const CONTACT_EMAIL = "enrique.barra@upm.es";
const SIMO_URL = "https://www.ifema.es/simo-educacion";

const pick = (obj, field, lang) =>
  translator(lang, obj[`${field}_en`], obj[`${field}_es`], obj[`${field}_sr`], obj[`${field}_fi`]);

function StreamingBanner({ event, lang, t }) {
  const date = new Date(event.date).toLocaleDateString(lang, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const joinLink =
    event.externalLinkJoin && event.externalLinkJoin !== "TBD" ? event.externalLinkJoin : null;

  return (
    <section className="w-full grid lg:grid-cols-[3fr_2fr] border border-myPrimary bg-primary/10 overflow-hidden">
      <div className="p-6 md:p-10 flex flex-col gap-4 justify-center">
        <span className="w-fit px-3 py-1 text-sm font-semibold uppercase tracking-wide bg-myPrimary text-myTextInverse">
          {t("simo.banner.tag")}
        </span>
        <Heading level="h3" className="text-pretty">
          {pick(event, "title", lang)}
        </Heading>
        <div className="flex items-center gap-3 text-accent font-semibold text-lg">
          <EventSharp className="h-7 w-7" />
          <span className="first-letter:uppercase">
            {date} · {event.hour.split(" ")[0]} h ({t("simo.banner.timezone")})
          </span>
        </div>
        <Text className="text-base max-w-[65ch]">{t("simo.banner.text")}</Text>
        <div className="flex flex-wrap gap-3 mt-2">
          {joinLink && (
            <Button
              asChild
              variant="primary"
              size="lg"
              radius="rounded_sm"
              type="primary"
              className="font-medium uppercase hover:bg-myBackground hover:text-myPrimary"
            >
              <Link href={joinLink} target="_blank" rel="noopener noreferrer">
                {t("simo.banner.register")} <NorthEastSharp />
              </Link>
            </Button>
          )}
          <Button
            asChild
            variant="outline"
            size="lg"
            radius="rounded_sm"
            className="font-medium uppercase hover:bg-myBackground hover:border-accent-400 hover:text-accent-300"
          >
            <Link href={`/events/${event.eventname}`}>
              {t("simo.banner.moreInfo")} <ArrowForwardSharp />
            </Link>
          </Button>
        </div>
        {!joinLink && (
          <Text type="small" className="opacity-80">
            {t("simo.banner.registerSoon")}
          </Text>
        )}
      </div>
      <Link
        href={`/events/${event.eventname}`}
        className="min-h-[220px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-myPrimary"
      >
        <Image src="/assets/images/lastchance.png" alt="LASTCHANCE" fit="cover" />
      </Link>
    </section>
  );
}

function SimoEscaperoomCard({ escaperoom, lang, t }) {
  const title = pick(escaperoom, "title", lang);
  const guide = escaperoom.resources?.[0];
  const guideLink = guide
    ? translator(lang, guide.resourceLink_en, guide.resourceLink_es, guide.resourceLink_sr, guide.resourceLink_fi)
    : null;

  return (
    <article className="flex flex-col border border-myPrimary bg-myBackground">
      <Link
        href={escaperoom.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="h-56 border-b border-myPrimary bg-background200"
      >
        <Image
          className="hover:opacity-80 transition duration-300"
          src={escaperoom.image}
          alt={title}
          fit="cover"
        />
      </Link>
      <div className="p-5 flex flex-col gap-3 h-full">
        <Heading level="h4" className="text-myPrimary">
          {title}
        </Heading>
        <Text className="text-base">{pick(escaperoom, "claim", lang)}</Text>
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          <Button
            asChild
            variant="primary"
            size="sm"
            radius="rounded_sm"
            type="primary"
            className="font-medium hover:bg-myBackground hover:text-myPrimary"
          >
            <Link href={escaperoom.externalLink} target="_blank" rel="noopener noreferrer">
              {t("simo.escaperooms.play")} <PlayArrowSharp />
            </Link>
          </Button>
          {guideLink && (
            <Button
              asChild
              variant="outline"
              size="sm"
              radius="rounded_sm"
              className="hover:bg-myBackground hover:border-primary300 hover:text-primary300"
            >
              <Link href={guideLink} target="_blank" rel="noopener noreferrer">
                {t("simo.escaperooms.guide")} <SaveAltSharp />
              </Link>
            </Button>
          )}
          <Button
            asChild
            variant="outline"
            size="sm"
            radius="rounded_sm"
            className="hover:bg-myBackground hover:border-primary300 hover:text-primary300"
          >
            <Link href={`/escaperooms/${escaperoom.escaperoomname}`}>
              {t("simo.escaperooms.moreInfo")} <ArrowForwardSharp />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function Simo() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const metadata = getPageMetadata("simo", lang);

  const streamingEvent = events.find((e) => e.eventname === STREAMING_EVENT);
  const simoEscaperooms = SIMO_ESCAPEROOMS
    .map((name) => escaperooms.find((er) => er.escaperoomname === name))
    .filter(Boolean);

  return (
    <>
      <SEO title={metadata.title} description={metadata.description} keywords={metadata.keywords} />
      <StructuredData data={simoPageSchema} />
      <main className="standard_margin flex flex-col gap-12 md:gap-16 text-myText">
        {/* SIMO intro */}
        <section className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <Link href={SIMO_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <img src="/LOGO-SIMO.svg" alt="SIMO Educación" className="w-56 md:w-64 h-auto" />
          </Link>
          <div className="flex flex-col gap-2">
            <Heading level="h2">{t("simo.intro.title")}</Heading>
            <Text className="text-lg">
              {t("simo.intro.text")}{" "}
              <Link
                href={SIMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-myPrimary hover:underline"
              >
                SIMO Educación 2026
              </Link>{" "}
              {t("simo.intro.dates")}
            </Text>
          </div>
        </section>

        {/* Streaming banner */}
        {streamingEvent && <StreamingBanner event={streamingEvent} lang={lang} t={t} />}

        {/* Escape rooms */}
        <section className="flex flex-col gap-6">
          <header className="border-b border-myPrimary pb-2">
            <Heading level="h3">{t("simo.escaperooms.title")}</Heading>
          </header>
          <Text className="text-base max-w-[75ch]">{t("simo.escaperooms.text")}</Text>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {simoEscaperooms.map((escaperoom) => (
              <SimoEscaperoomCard key={escaperoom.escaperoomname} escaperoom={escaperoom} lang={lang} t={t} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col md:flex-row md:items-center gap-4 p-6 md:p-8 border border-accent/40 bg-accent/10">
          <EmailOutlined className="text-accent" sx={{ fontSize: 40 }} />
          <Text className="text-lg">
            {t("simo.contact.text")}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            {t("simo.contact.text2")}
          </Text>
        </section>
      </main>
    </>
  );
}
