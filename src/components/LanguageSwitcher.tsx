// src/components/LanguageSwitcher.tsx

import { useTranslation } from "react-i18next";

/**
 * LanguageSwitcher
 * useTranslation apenas para obter i18n.changeLanguage
 */
export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(lang: "pt" | "en") {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="language-switcher">
      <button
        className={`language-button${i18n.language === "pt" ? " active" : ""}`}
        onClick={() => changeLanguage("pt")}
      >
        <span aria-hidden>🇧🇷</span>
        PT
      </button>
      <button
        className={`language-button${i18n.language === "en" ? " active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        <span aria-hidden>🇺🇸</span>
        EN
      </button>
    </div>
  );
}
