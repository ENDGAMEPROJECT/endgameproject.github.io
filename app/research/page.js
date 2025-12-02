"use client";

import { useState, useEffect } from "react";
import Filters from "@/components/filters/ResearchFilter";
import { useTranslation } from "react-i18next";
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
  // const router = useRouter(); // Hook para manipular la URL
  // let searchParams = useSearchParams();

  //state para manejar los filtros de la página
  // const [items, setItems] = useState(publications);
  // const [search, setSearch] = useState("");
  // const [year, setYear] = useState(undefined);
  // const [category, setCategory] = useState(undefined);
  // const [researchLine, setResearchLine] = useState(undefined);
  // const [papersToShow, setPapersToShow] = useState(6);

  // let pathname = "/research";

  // // 2. Agregar objeto "all", que sería "todas las líneas de inv."
  // let researchLines = ["all", ...researchlines];

  // // creado array de categorías de publications
  // const categories = [
  //   "all",
  //   ...new Set(publications.map((publication) => publication.type)),
  // ];

  //actualizar la URL cuando cambia algo en el estado, usamos router.push
  // useEffect(() => {
  //   let query = {};
  //   if (search) query.search = search;
  //   if (year) query.year = year;
  //   if (category) query.category = category;
  //   if (researchLine) query.researchline = researchLine;

  //   router.push(
  //     `${pathname}/?${new URLSearchParams(query).toString()}`,
  //     undefined
  //   );
  // }, [search, year, category, researchLine]);

  // // función para obtener todos los parámetros de la URL
  // useEffect(() => {
  //   let researchLineURL = searchParams.get("researchline");
  //   console.log("researchLineURL: " + researchLineURL);
  //   setResearchLine(researchLineURL);

  //   let searchURL = searchParams.get("search");
  //   console.log("searchURL: " + searchURL);
  //   setSearch(searchURL);

  //   let yearURL = searchParams.get("year");
  //   console.log("yearURL: " + yearURL);
  //   setYear(yearURL);

  //   let categoryURL = searchParams.get("category");
  //   console.log("categoryURL: " + categoryURL);
  //   setCategory(categoryURL);
  // }, []);

  // let papersFiltered = items.filter((paper) => {
  //   return (
  //     (!search ||
  //       search
  //         .toLowerCase()
  //         .replace(new RegExp(/\s/g), "")
  //         .replace(new RegExp(/[àáâãäå]/g), "a")
  //         .replace(new RegExp(/æ/g), "ae")
  //         .replace(new RegExp(/ç/g), "c")
  //         .replace(new RegExp(/[èéêë]/g), "e")
  //         .replace(new RegExp(/[ìíîï]/g), "i")
  //         .replace(new RegExp(/ñ/g), "n")
  //         .replace(new RegExp(/[òóôõö]/g), "o")
  //         .replace(new RegExp(/œ/g), "oe")
  //         .replace(new RegExp(/[ùúûü]/g), "u")
  //         .replace(new RegExp(/[ýÿ]/g), "y")
  //         .replace(new RegExp(/\W/g), "")
  //         .split(" ")
  //         .every((item) =>
  //           paper.content
  //             .toLowerCase()
  //             .replace(new RegExp(/\s/g), "")
  //             .replace(new RegExp(/[àáâãäå]/g), "a")
  //             .replace(new RegExp(/æ/g), "ae")
  //             .replace(new RegExp(/ç/g), "c")
  //             .replace(new RegExp(/[èéêë]/g), "e")
  //             .replace(new RegExp(/[ìíîï]/g), "i")
  //             .replace(new RegExp(/ñ/g), "n")
  //             .replace(new RegExp(/[òóôõö]/g), "o")
  //             .replace(new RegExp(/œ/g), "oe")
  //             .replace(new RegExp(/[ùúûü]/g), "u")
  //             .replace(new RegExp(/[ýÿ]/g), "y")
  //             .replace(new RegExp(/\W/g), "")
  //             .includes(item)
  //         )) &&
  //     (!year ||
  //       (paper.date && paper.date[0] && paper.date[0].toString() === year)) &&
  //     (!category || (paper.type && paper.type === category)) &&
  //     (!researchLine ||
  //       (paper.researchlines && paper.researchlines.includes(researchLine)))
  //   );
  // });

  // const handleLoadMore = () => {
  //   setPapersToShow(papersToShow + 6);
  // };

  return (
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