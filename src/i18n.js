import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { de } from "./Languages/de";
import { en } from "./Languages/en";
import { hi } from "./Languages/hi";
import { ar } from "./Languages/ar";
import { fr } from "./Languages/fr";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: en,
      },
      de: {
        translations: de,
      },
      hi: {
        translations: hi,
      },
      ar: {
        translations: ar,
      },
      fr: {
        translations: fr,
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
