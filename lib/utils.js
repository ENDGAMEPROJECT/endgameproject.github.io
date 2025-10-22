import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const translator = (currentLang, string_en, string_es, string_sr, string_fi) => {

    let string_translated = currentLang === "es"
      ? string_es
      : currentLang === "sr"
        ? string_sr
        : currentLang === "fi"
          ? string_fi
          : string_en;

    //fallback in case there is no translation
    string_translated === undefined? string_translated= string_en:null;

    
    return(string_translated)
  }