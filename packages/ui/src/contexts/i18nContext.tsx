import React, { createContext, useContext, ReactNode } from "react";

export interface Translations {
  // Password tabs
  randomTab: string;
  memorableTab: string;

  // Random password
  passwordLength: string;
  useNumbers: string;
  useLetters: string;
  useCharacters: string;
  useCapitals: string;

  // General
  copy: string;
  copied: string;
  generate: string;
  password: string;

  // Strength
  strong: string;
  medium: string;
  weak: string;

  // Memorable password
  wordCount: string;
  includeNumbers: string;
  capitalizeWords: string;
  separator: string;

  // Memorable password specific
  numberOfWords: string;
  useNumber: string;
  useUppercase: string;

  // Hero section
  heroTitle: string;
  heroDescription: string;
  secureTitle: string;
  secureDescription: string;
  instantTitle: string;
  instantDescription: string;
  customizableTitle: string;
  customizableDescription: string;

  // Tooltip messages
  useNumbersTooltip: string;
  useLettersTooltip: string;
  useCharactersTooltip: string;
  useCapitalsTooltip: string;

  // Memorable tooltip messages
  useNumberMemorableTooltip: string;
  useCharactersMemorableTooltip: string;
  useUppercaseMemorableTooltip: string;
}

export const defaultTranslations: Translations = {
  // English defaults
  randomTab: "Random",
  memorableTab: "Memorable",
  passwordLength: "Password Length",
  useNumbers: "Use numbers",
  useLetters: "Use letters",
  useCharacters: "Use characters",
  useCapitals: "Use capitals",
  copy: "Copy",
  copied: "Copied!",
  generate: "Generate",
  password: "password",
  strong: "Strong",
  medium: "Medium",
  weak: "Weak",
  wordCount: "Word Count",
  includeNumbers: "Include Numbers",
  capitalizeWords: "Capitalize Words",
  separator: "Separator",

  // Memorable password specific
  numberOfWords: "Number of words",
  useNumber: "Use number",

  useUppercase: "Use Uppercase",

  // Hero section
  heroTitle: "SeamPass: Your Essential Password Generator Solution",
  heroDescription:
    "SeamPass provides you with the tools and features needed to generate strong, secure, and memorable passwords.",
  secureTitle: "🔒 100% Secure",
  secureDescription:
    "All password generation happens locally in your browser. No data is ever sent to our servers.",
  instantTitle: "⚡ Instant Generation",
  instantDescription:
    "Generate strong passwords instantly with our advanced algorithms and real-time strength analysis.",
  customizableTitle: "🎯 Customizable",
  customizableDescription:
    "Customize your passwords with length, character types, and memorable word combinations.",

  // Tooltip messages
  useNumbersTooltip: "Add numbers (0-9) to strengthen the password.",
  useLettersTooltip: "Use a mix of upper (A-Z) and lower (a-z) case letters.",
  useCharactersTooltip: "Add symbols (e.g., @, #, $) for extra security.",
  useCapitalsTooltip: "Capitals (A-Z) to strengthen the password.",

  // Memorable tooltip messages
  useNumberMemorableTooltip:
    "Include numbers (0-9) to make your password stronger.",
  useCharactersMemorableTooltip:
    "Use symbols like @, #, $ to add complexity to your password.",
  useUppercaseMemorableTooltip:
    "Capital letters (A-Z) can help secure your password further.",
};

const I18nContext = createContext<Translations>(defaultTranslations);

export const useTranslations = () => useContext(I18nContext);

interface I18nProviderProps {
  children: ReactNode;
  translations?: Partial<Translations>;
}

export const I18nProvider = ({
  children,
  translations = {},
}: I18nProviderProps) => {
  const mergedTranslations = { ...defaultTranslations, ...translations };

  return (
    <I18nContext.Provider value={mergedTranslations}>
      {children}
    </I18nContext.Provider>
  );
};
