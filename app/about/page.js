
"use client";
import * as React from "react";

import { useTranslation } from "react-i18next";
import SEO from "@/components/SEOWrapper";
import StructuredData from "@/components/StructuredData";
import { getPageMetadata } from "@/constants/metadata";
import { aboutPageSchema } from "@/constants/schemas";

// Data
import { mission } from "@/constants/mission";
import { partners } from "@/constants/partners";

// Components
import Heading from "@/components/ui/heading";
import MissionCard from "@/components/cards/MissionCard";
import PartnerCard from "@/components/cards/PartnerCard";
import { Divider } from "@mui/material";

export default function About() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const metadata = getPageMetadata('about', currentLang);

  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      <StructuredData data={aboutPageSchema} />
      <main className="standard_margin ">
      {/* SECTION ABOUT */}
      <Heading level="h1">{t("home.aboutSection")}</Heading>
      <section className="flex flex-col gap-24">
        <article>
          <Heading level="h3">{t("home.about.title")}</Heading>
          <Heading level="subtitle"> {t("home.about.content")}</Heading>
        </article>
        <article>
          <Heading level="h3">{t("home.mission.title")}</Heading>
          <ul className="gap-4 justify-center grid sm:grid-cols-3 xl:grid-cols-5">
            {mission.map((mission, key) => (
              <MissionCard mission={mission} key={key} />
            ))}
          </ul>
        </article>
        {/* ABOUT partners */}
        <article>
          <Heading level="h3">{t("home.partners.title")}</Heading>
          <Heading level="h5" className="text-center mb-4 uppercase !text-primary">
            {t("home.partners.universities")}
          </Heading>
          <ul className="md:grid grid-cols-3 gap-8 items-end">
            <PartnerCard partner={partners.uef} />
            <PartnerCard partner={partners.upm} />
            <PartnerCard partner={partners.bmu} />
          </ul>
          <Heading level="h5" className="text-center my-4 uppercase !text-primary">
            {t("home.partners.agencies")}
          </Heading>
          <ul className="md:grid grid-cols-3 gap-8">
            <PartnerCard partner={partners.mdt} />
            <PartnerCard partner={partners.ftb} />
            <PartnerCard partner={partners.fnt} />
          </ul>
        </article>
      </section>
      <Divider size="xl" />
    </main>
    </>
  );
}