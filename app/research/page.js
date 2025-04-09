"use client";

import { useState, useEffect } from "react";
import Filters from "@/components/filters/ResearchFilter";
import { publications } from "@/constants/publications";
import { researchlines } from "@/constants/researchlines";
import { useTranslation } from "react-i18next";
import PublicationCard from "@/components/cards/PublicationCard";
import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Divider, DividerVariants } from "@/components/ui/divider";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

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
  const router = useRouter(); // Hook para manipular la URL
  let searchParams = useSearchParams();

  //state para manejar los filtros de la página
  const [items, setItems] = useState(publications);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [researchLine, setResearchLine] = useState(undefined);
  const [papersToShow, setPapersToShow] = useState(6);

  let pathname = "/research";

  // 2. Agregar objeto "all", que sería "todas las líneas de inv."
  let researchLines = ["all", ...researchlines];

  // creado array de categorías de publications
  const categories = [
    "all",
    ...new Set(publications.map((publication) => publication.type)),
  ];

  //actualizar la URL cuando cambia algo en el estado, usamos router.push
  useEffect(() => {
    let query = {};
    if (search) query.search = search;
    if (year) query.year = year;
    if (category) query.category = category;
    if (researchLine) query.researchline = researchLine;

    router.push(
      `${pathname}/?${new URLSearchParams(query).toString()}`,
      undefined
    );
  }, [search, year, category, researchLine]);

  // función para obtener todos los parámetros de la URL
  useEffect(() => {
    let researchLineURL = searchParams.get("researchline");
    console.log("researchLineURL: " + researchLineURL);
    setResearchLine(researchLineURL);

    let searchURL = searchParams.get("search");
    console.log("searchURL: " + searchURL);
    setSearch(searchURL);

    let yearURL = searchParams.get("year");
    console.log("yearURL: " + yearURL);
    setYear(yearURL);

    let categoryURL = searchParams.get("category");
    console.log("categoryURL: " + categoryURL);
    setCategory(categoryURL);
  }, []);

  let papersFiltered = items.filter((paper) => {
    return (
      (!search ||
        search
          .toLowerCase()
          .replace(new RegExp(/\s/g), "")
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/æ/g), "ae")
          .replace(new RegExp(/ç/g), "c")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/ñ/g), "n")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/œ/g), "oe")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(new RegExp(/[ýÿ]/g), "y")
          .replace(new RegExp(/\W/g), "")
          .split(" ")
          .every((item) =>
            paper.content
              .toLowerCase()
              .replace(new RegExp(/\s/g), "")
              .replace(new RegExp(/[àáâãäå]/g), "a")
              .replace(new RegExp(/æ/g), "ae")
              .replace(new RegExp(/ç/g), "c")
              .replace(new RegExp(/[èéêë]/g), "e")
              .replace(new RegExp(/[ìíîï]/g), "i")
              .replace(new RegExp(/ñ/g), "n")
              .replace(new RegExp(/[òóôõö]/g), "o")
              .replace(new RegExp(/œ/g), "oe")
              .replace(new RegExp(/[ùúûü]/g), "u")
              .replace(new RegExp(/[ýÿ]/g), "y")
              .replace(new RegExp(/\W/g), "")
              .includes(item)
          )) &&
      (!year ||
        (paper.date && paper.date[0] && paper.date[0].toString() === year)) &&
      (!category || (paper.type && paper.type === category)) &&
      (!researchLine ||
        (paper.researchlines && paper.researchlines.includes(researchLine)))
    );
  });

  const handleLoadMore = () => {
    setPapersToShow(papersToShow + 6);
  };

  return (
    <div className={"standard_margin research page_" + currentLang}>
      <div className="" id="banner-publications">
        <Heading level="h2">{t("research.title")}</Heading>
        <Text type="p">{t("research.description")}</Text>
      </div>
      <Divider size="md"/>
      <main className="research">
        <Filters
          search={search} // filtro 1: busqueda de texto
          year={year} // filtro 2: busqueda por año
          category={category} // filtro 3: busqueda por tipo de publicacion
          researchLines={researchLines} // filtro 4: busqueda por linea de investigacion
          researchLine={researchLine}
          pathname={pathname}
          items={items} // lista de papers
          changeSearch={(search) => setSearch(search)} // función para cambiar estado de input de busqueda
          changeYear={(year) => setYear(year)} // función para cambiar estado de input de año
          changeCategory={(category) => setCategory(category)} // función para cambiar estado de categoria
          changeResearchLine={(researchLine) => setResearchLine(researchLine)} // función para cambiar estado de linea de investigacion
          categories={categories}
          results={papersFiltered instanceof Array ? papersFiltered.length : 0}
        />
        <Divider size="md"/>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {papersFiltered
            .slice(0, papersToShow)
            .map(
              (
                {
                  className,
                  date,
                  type,
                  doi,
                  author,
                  title,
                  journal,
                  researchlines,
                  keywords,
                },
                key
              ) => {
                return (
                  <PublicationCard
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
                  ></PublicationCard>
                );
              }
            )}
        </section>
        <Divider size="sm"/>

        <div className="w-full flex justify-center">
          {papersFiltered.length > papersToShow && (
            <Button
              onClick={handleLoadMore}
              className={
                ButtonVariants({
                  variant: "secondary",
                  size: "lg",
                  radius: "rounded_sm",
                }) + " w-fit mt-4 my-auto"
              }
            >
              {t("research.button2")}
            </Button>
          )}
        </div>
        <Divider size="sm"/>

      </main>
    </div>
  );
}
