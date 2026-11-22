"use client";

import { useState, useEffect } from "react";
import Filters from "@/components/filters/ResearchFilter";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEOWrapper";
import StructuredData from "@/components/StructuredData";
import { getPageMetadata } from "@/constants/metadata";
import { researchPageSchema } from "@/constants/schemas";
import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import { Divider, DividerVariants } from "@/components/ui/divider";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { publications } from "@/constants/results";
import ResearchCard from "@/components/cards/ResearchCard";

// Results are grouped by `type` so papers, reports and datasets read as separate
// sets. Order within each group is the order the entries appear in results.js.
const TYPE_SECTIONS = [
  { type: "paper", labelKey: "research.sections.papers" },
  { type: "report", labelKey: "research.sections.reports" },
  { type: "dataset", labelKey: "research.sections.datasets" },
];

const groupByType = (items) => {
  const normalise = (value) => String(value ?? "").trim().toLowerCase();
  const known = TYPE_SECTIONS.map((section) => ({
    ...section,
    items: items.filter((item) => normalise(item.type) === section.type),
  }));
  // anything with a missing or unexpected type still gets shown, never dropped
  const rest = items.filter(
    (item) => !TYPE_SECTIONS.some((section) => section.type === normalise(item.type))
  );
  if (rest.length > 0) {
    known.push({ type: "other", labelKey: "research.sections.other", items: rest });
  }
  return known.filter((section) => section.items.length > 0);
};

const groupedPublications = groupByType(publications);

export default function Research() {
  return (
    <Suspense>
      <ResearchPage />
    </Suspense>
  );
}

function ResearchPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const metadata = getPageMetadata('research', currentLang);

  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      <StructuredData data={researchPageSchema} />
      <main className="standard_margin max-w-[1080px] xl:!mx-auto">
      <Heading level="h1" className={"text-secondary400"}>
        {t("research.title")}
      </Heading>
      <div className="mt-20 flex flex-col gap-12">
        {groupedPublications.map(({ labelKey, items }) => (
          <section key={labelKey}>
            <header className="mb-6 w-full border-b border-secondary400">
              <Heading level="h5" className="text-secondary400">
                {t(labelKey)}
              </Heading>
            </header>
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((publication, key) => (
                <ResearchCard publication={publication} key={key} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
    </>
  );
}

{/* <PublicationCard
  key={key}
  currentLang={currentLang}
  className={className + 'bg-background-300'}
  date={date}
  category={type}
  title={title}
  author={author}
  doi={doi}
  researchLine={researchlines}
  keywords={keywords}
></PublicationCard> */}