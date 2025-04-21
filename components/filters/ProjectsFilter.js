"use client";

import React from "react";

import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

import FilterText from "./FilterText";
import FilterDate from "./FilterDate";
import FilterProjectType from "./FilterProjectType";
import TabsResearchLineFilter from "./TabsResearchLineFilter";

export default function Filters({
  pathname,
  search,
  changeSearch,
  year,
  changeYear,
  items,
  projectType,
  changeProjectType,
  results,
  projectTypes,
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
      <div className="filters mt-8 justify-center flex ">
        <div className="filter-block flex flex-col md:flex-row w-full sm:w-2/3 md:w-full lg:w-2/3  gap_filter">
          <FilterText
            pathname={pathname}
            search={search}
            changeSearch={changeSearch}
          ></FilterText>
          <div className="w-full flex gap_grid">
            <FilterProjectType
              projectType={projectType}
              changeProjectType={changeProjectType}
              projectTypes={projectTypes}
            />
            {/* <FilterDate items={items} year={year} changeYear={changeYear} /> */}
          </div>
        </div>
        {results === undefined ? null : (
          <Badge className="research_results">
            <p className="">
              {t("research.filter.text")}
              <b> {results} </b>
            </p>
          </Badge>
        )}
      </div>
    </>
  );
}
