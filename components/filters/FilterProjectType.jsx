"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export default function FilterProjectType( {projectType, changeProjectType, projectTypes } ) {
  const { t } = useTranslation();  

  const handleChange = (value) => {
    changeProjectType( value === "all" ? undefined : value);
  }

  
  return (
    <div className="container_select_label w-full lg:w-full">
    <Label htmlFor="search">{t("projects.filter.fieldTitle2")}</Label>
          <Select className="filter flex flex-col" onValueChange={(value) => handleChange(value) } value={projectType ? projectType : "all"}>
            <SelectTrigger className="w-full" htmlFor="publication" >
              <SelectValue onChange={(e) => handleChange(e.target.value)}>            
              </SelectValue>
            </SelectTrigger>
            <SelectContent id="publication" name="publication">
              {projectTypes.map((projectType, index) => (
              <SelectItem key={index} value={projectType}>
                {t(`projects.filter.${projectType}`)}
              </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>
  )
}
