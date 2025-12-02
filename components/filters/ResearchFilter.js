"use client";

import React from "react";

import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

import FilterText from "./FilterText";
import FilterDate from "./FilterDate";
import FilterCategory from "./FilterCategory";
import TabsResearchLineFilter from "./TabsResearchLineFilter";
import { Divider } from "../ui/Divider";

export default function Filters({
  pathname,
  search,
  changeSearch,
  year,
  changeYear,
  items,
  category,
  changeCategory,
  results,
  categories,
  researchLines,
  researchLine,
  changeResearchLine,
}) {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center">
        <TabsResearchLineFilter
          researchLines={researchLines}
          researchLine={researchLine}
          changeResearchLine={changeResearchLine}
        />
      </div>
      <Divider size="sm" />
      <div className="filters">
        <div className="filter-block flex flex-col md:flex-row gap_filter">
          <FilterText
            pathname={pathname}
            search={search}
            changeSearch={changeSearch}
          ></FilterText>
          <div className="w-full md:w-1/2 flex gap_grid">
            <FilterCategory
              category={category}
              changeCategory={changeCategory}
              categories={categories}
            />
            <FilterDate items={items} year={year} changeYear={changeYear} />
          </div>
        </div>
        {results === undefined ? null : (
          <Badge className="research_results bg-background-300/60 border-gray-500 text-gray-300">
            <p className="">
              {t("research.filters.text")}
              <b> {results} </b>
            </p>
          </Badge>
        )}
      </div>
    </>
  );
}
