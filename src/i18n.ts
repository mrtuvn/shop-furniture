import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en/translation.json";
import vnTranslation from "./locales/vn/translation.json";

// Translation resources
const resources = {
  en: {
    translation: enTranslation,
  },
  vn: {
    translation: vnTranslation,
  },
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language if detection fails
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
