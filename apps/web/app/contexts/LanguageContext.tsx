"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  getCurrentLanguage,
  setLanguage,
  getTranslations,
  type SupportedLanguage,
} from "../utils/i18n";
import type { Translations } from "@seampass/ui";

interface LanguageContextType {
  language: SupportedLanguage;
  translations: Translations;
  changeLanguage: (lang: SupportedLanguage) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setCurrentLanguage] = useState<SupportedLanguage>("en");
  const [translations, setTranslations] = useState<Translations>(
    getTranslations("en")
  );

  useEffect(() => {
    const lang = getCurrentLanguage();
    setCurrentLanguage(lang);
    setTranslations(getTranslations(lang));
  }, []);

  const changeLanguage = (lang: SupportedLanguage) => {
    setLanguage(lang);
    setCurrentLanguage(lang);
    setTranslations(getTranslations(lang));
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
