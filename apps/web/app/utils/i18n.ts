import type { Translations } from "@seampass/ui";
import { defaultTranslations } from "@seampass/ui";

// Define supported languages
export const supportedLanguages = {
  en: "English",
  es: "Español",
  fr: "Français",
} as const;

export type SupportedLanguage = keyof typeof supportedLanguages;

const translations: Record<SupportedLanguage, Translations> = {
  en: defaultTranslations,
  es: {
    randomTab: "Aleatoria",
    memorableTab: "Memorable",
    passwordLength: "Longitud de Contraseña",
    useNumbers: "Usar números",
    useLetters: "Usar letras",
    useCharacters: "Usar caracteres",
    useCapitals: "Usar mayúsculas",
    copy: "Copiar",
    copied: "¡Copiado!",
    generate: "Generar",
    strong: "Fuerte",
    medium: "Medio",
    weak: "Débil",
    wordCount: "Cantidad de Palabras",
    includeNumbers: "Incluir Números",
    capitalizeWords: "Capitalizar Palabras",
    separator: "Separador",

    // Hero section
    heroTitle: "SeamPass: Tu Solución Esencial de Generador de Contraseñas",
    heroDescription:
      "SeamPass te proporciona las herramientas y características necesarias para generar contraseñas fuertes, seguras y memorables.",
    secureTitle: "🔒 100% Seguro",
    secureDescription:
      "Toda la generación de contraseñas ocurre localmente en tu navegador. Nunca se envían datos a nuestros servidores.",
    instantTitle: "⚡ Generación Instantánea",
    instantDescription:
      "Genera contraseñas fuertes instantáneamente con nuestros algoritmos avanzados y análisis de fortaleza en tiempo real.",
    customizableTitle: "🎯 Personalizable",
    customizableDescription:
      "Personaliza tus contraseñas con longitud, tipos de caracteres y combinaciones de palabras memorables.",

    // Memorable password specific
    numberOfWords: "Número de palabras",
    useNumber: "Usar número",
    useUppercase: "Usar mayúsculas",
    password: "contraseña",

    // Random tooltip messages
    useNumbersTooltip: "Agregar números (0-9) para fortalecer la contraseña.",
    useLettersTooltip:
      "Usar una mezcla de letras mayúsculas (A-Z) y minúsculas (a-z).",
    useCharactersTooltip:
      "Agregar símbolos (ej: @, #, $) para mayor seguridad.",
    useCapitalsTooltip: "Mayúsculas (A-Z) para fortalecer la contraseña.",

    // Memorable tooltip messages
    useNumberMemorableTooltip:
      "Incluir números (0-9) para hacer tu contraseña más fuerte.",
    useCharactersMemorableTooltip:
      "Usar símbolos como @, #, $ para agregar complejidad a tu contraseña.",
    useUppercaseMemorableTooltip:
      "Las letras mayúsculas (A-Z) ayudan a asegurar tu contraseña.",
  },
  fr: {
    randomTab: "Aléatoire",
    memorableTab: "Mémorable",
    passwordLength: "Longueur du Mot de Passe",
    useNumbers: "Utiliser des chiffres",
    useLetters: "Utiliser des lettres",
    useCharacters: "Utiliser des caractères",
    useCapitals: "Utiliser des majuscules",
    copy: "Copier",
    copied: "Copié!",
    generate: "Générer",
    strong: "Fort",
    medium: "Moyen",
    weak: "Faible",
    wordCount: "Nombre de Mots",
    includeNumbers: "Inclure des Chiffres",
    capitalizeWords: "Capitaliser les Mots",
    separator: "Séparateur",

    // Hero section
    heroTitle:
      "SeamPass: Votre Solution Essentielle de Générateur de Mots de Passe",
    heroDescription:
      "SeamPass vous fournit les outils et fonctionnalités nécessaires pour générer des mots de passe forts, sécurisés et mémorables.",
    secureTitle: "🔒 100% Sécurisé",
    secureDescription:
      "Toute la génération de mots de passe se fait localement dans votre navigateur. Aucune donnée n'est jamais envoyée à nos serveurs.",
    instantTitle: "⚡ Génération Instantanée",
    instantDescription:
      "Générez des mots de passe forts instantanément avec nos algorithmes avancés et l'analyse de force en temps réel.",
    customizableTitle: "🎯 Personnalisable",
    customizableDescription:
      "Personnalisez vos mots de passe avec la longueur, les types de caractères et les combinaisons de mots mémorables.",
    password: "mot de passe",
    numberOfWords: "Nombre de mots",
    useNumber: "Utiliser un chiffre",
    useUppercase: "Utiliser des majuscules",

    // Random tooltip messages
    useNumbersTooltip:
      "Ajouter des chiffres (0-9) pour renforcer le mot de passe.",
    useLettersTooltip:
      "Utiliser un mélange de lettres majuscules (A-Z) et minuscules (a-z).",
    useCharactersTooltip:
      "Ajouter des symboles (ex: @, #, $) pour plus de sécurité.",
    useCapitalsTooltip: "Majuscules (A-Z) pour renforcer le mot de passe.",

    // Memorable tooltip messages
    useNumberMemorableTooltip:
      "Inclure des chiffres (0-9) pour rendre votre mot de passe plus fort.",
    useCharactersMemorableTooltip:
      "Utiliser des symboles comme @, #, $ pour ajouter de la complexité.",
    useUppercaseMemorableTooltip:
      "Les lettres majuscules (A-Z) aident à sécuriser votre mot de passe.",
  },
};

export const getBrowserLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") return "en";

  const browserLang = navigator.language.split("-")[0] as SupportedLanguage;
  return browserLang in translations ? browserLang : "en";
};

export const getTranslations = (lang: SupportedLanguage): Translations => {
  return translations[lang] || translations.en;
};

export const getCurrentLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem("language") as SupportedLanguage;
  if (stored && stored in translations) return stored;

  return getBrowserLanguage();
};

// Set language in localStorage
export const setLanguage = (lang: SupportedLanguage): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
  }
};
