// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: "pt", // idioma padrão
  fallbackLng: "pt", // se faltar chave, usa pt
  interpolation: { escapeValue: false },
});

export default i18n;
