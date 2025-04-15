import * as i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import * as React from "react";
import { initReactI18next } from "react-i18next";
import { ERRORS, GLOSSARY, SITE_NAVIGATION } from "../../../shared/i18n";

export function useI18n() {
  //* State
  const [isPending, setIsPending] = React.useState(true);

  //* Effects
  React.useEffect(() => {
    try {
      i18next
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          backend: {
            loadPath: "/api/translations/{{lng}}/{{ns}}.json",
          },
          ns: [ERRORS, SITE_NAVIGATION, GLOSSARY],
          react: {
            bindI18n: "languageChanged",
            useSuspense: false,
          },
          supportedLngs: ["en"],
        });
    } finally {
      setIsPending(false);
    }
  }, []);

  return isPending;
}
