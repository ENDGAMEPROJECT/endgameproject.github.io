"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const usePageFilter = (items) => {
  const router = useRouter(); // Hook para manipular la URL
  let searchParams = useSearchParams();
  const [filteredItems, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(true);
  const [selectedResearchLine, setSelectedResearchLine] = useState("all")

  const handleBasePath = (pathname, researchLine) => {
    console.error("pathname" + pathname)
    router.push(`${pathname}`, undefined);
    console.error("researchline " + researchLine);
    if (researchLine === "all" || "") {
       router.push(`${pathname}/`, undefined);
    } else {
       router.push(`${pathname}/?researchline=${researchLine}`, undefined);
    }
    setLoading(false)
  }
// OKAY AHORA LA IDEA ES PODER PASARLE A HANDLERESEARCHLINE EL 
// PARÁMETRO DE PATHNAME
  // Función para manejar el cambio de categoría
  const changeResearchLine = (researchLine) => {
    setSelectedResearchLine(researchLine);
    if (researchLine === "all" || "") {
      setFilteredItems(items);
    // handleBasePath
    } else {
      const newFilteredCards = items.filter((proj) =>        
        proj.researchlines &&  proj.researchlines.some((l) => l === researchLine)
      );
      setFilteredItems(newFilteredCards);
    }
          //esto no se activa hasta que alguien no le da click
   
          setLoading(false)
  };
  
// función para obtener las researchlines de la URL
  useEffect(() => {
    let researchLineURL = searchParams.get('researchline')
    // este operador sirve para que setSelectedResearchLine no pase a ser "null", cuando estén
    // todas las líneas seleccionadas
    setSelectedResearchLine(researchLineURL === null ? (researchLineURL = "all") : (researchLineURL))
    if (researchLineURL) {
      changeResearchLine(researchLineURL)
    } else {
      setLoading(false)
    }
  }, [])

  return {
    filteredItems,
    changeResearchLine,
    loading,
    selectedResearchLine,
    handleBasePath
  };
};
