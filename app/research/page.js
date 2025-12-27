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
      <div className="mt-20 grid md:grid-cols-2 gap-6">
        {publications.map(( publication , key) => {
          return <ResearchCard publication={publication} key={key} />;
        })}
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