import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import en from "./locales/en.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import zh from "./locales/zh.json";
import hi from "./locales/hi.json";
import de from "./locales/de.json";
import it from "./locales/it.json";
import pl from "./locales/pl.json";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
] as const;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      zh: { translation: zh },
      hi: { translation: hi },
      de: { translation: de },
      it: { translation: it },
      pl: { translation: pl },
    },
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "zh", "hi", "es", "fr", "de", "it", "pl"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

// Detect URL/stored/browser language only on the client, after hydration.
if (typeof window !== "undefined") {
  const detect = () => {
    const supported = ["en", "zh", "hi", "es", "fr", "de", "it", "pl"];
    const urlLang = new URLSearchParams(location.search).get("lang");
    const stored = localStorage.getItem("lang");
    const nav = navigator.language?.split("-")[0];
    const lng = urlLang && supported.includes(urlLang)
      ? urlLang
      : stored && supported.includes(stored)
        ? stored
        : nav && supported.includes(nav)
          ? nav
          : "en";
    if (lng !== i18n.language) i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };
  setTimeout(detect, 0);
  i18n.on("languageChanged", (lng) => {
    localStorage.setItem("lang", lng);
    document.documentElement.lang = lng;
  });
}

export default i18n;
