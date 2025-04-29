"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from '../constants/langs/en';
import { es } from '../constants/langs/es';
import { en2 } from '../constants/langs/en2';
import { es2 } from '../constants/langs/es2';


//merge en and en2 into one object, without overwriting the keys
const mergedEn = deepMerge({ ...en }, en2);
const mergedEs = deepMerge({ ...es }, es2);


  // init i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // for all options read: https://www.i18next.com/overview/configuration-options
  // pass the i18n instance to react-i18next.  
  i18n.use(initReactI18next).use(LanguageDetector).init({
    debug: true,
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en', // Set the fallback language to English
    resources: {
      en: {
        translation: mergedEn
      },
      es: {
        translation: mergedEs
      }
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      // order and from where user language should be detected
      order: ['localStorage', 'navigator'],
      // keys or params to lookup language from
      lookupLocalStorage: 'i18nextLng',
    }
  });
  

export default i18n;


function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && target[key] instanceof Object) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}