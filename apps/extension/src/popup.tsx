import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";
import "@seampass/tailwind-config/styles";
import {
  RandomPassword,
  MemorablePassword,
  PasswordTabs,
  I18nProvider,
  type Translations,
} from "@seampass/ui";
import { analytics } from "./analytics";
import { getMessage } from "./utils/i18n";

declare global {
  interface Window {
    gtag: (command: string, action: string, parameters: any) => void;
  }
}

window.gtag = (command: string, action: string, parameters: any) => {
  console.log("🔗 gtag called:", command, action, parameters);

  if (command === "event") {
    switch (action) {
      case "generate_password":
        analytics.trackPasswordGeneration(
          parameters.password_type || "random",
          parameters
        );
        break;
      case "copy_password":
        analytics.trackPasswordCopy(parameters.password_type || "random");
        break;
      default:
        analytics.sendEvent(action, parameters);
    }
  }
};

const getExtensionTranslations = (): Partial<Translations> => {
  return {
    randomTab: getMessage("randomTab") || "Random",
    memorableTab: getMessage("memorableTab") || "Memorable",
    passwordLength: getMessage("passwordLength") || "Password Length",
    useNumbers: getMessage("useNumbers") || "Use numbers",
    useLetters: getMessage("useLetters") || "Use letters",
    useCharacters: getMessage("useCharacters") || "Use characters",
    useCapitals: getMessage("useCapitals") || "Use capitals",
    copy: getMessage("copy") || "Copy",
    copied: getMessage("copied") || "Copied!",
    strong: getMessage("strong") || "Strong",
    medium: getMessage("medium") || "Medium",
    weak: getMessage("weak") || "Weak",
    numberOfWords: getMessage("numberOfWords") || "Number of words",
    useNumber: getMessage("useNumber") || "Use number",
    useUppercase: getMessage("useUppercase") || "Use Uppercase",

    // Tooltip messages
    useNumbersTooltip:
      getMessage("useNumbersTooltip") ||
      "Add numbers (0-9) to strengthen the password.",
    useLettersTooltip:
      getMessage("useLettersTooltip") ||
      "Use a mix of upper (A-Z) and lower (a-z) case letters.",
    useCharactersTooltip:
      getMessage("useCharactersTooltip") ||
      "Add symbols (e.g., @, #, $) for extra security.",
    useCapitalsTooltip:
      getMessage("useCapitalsTooltip") ||
      "Capitals (A-Z) to strengthen the password.",
    useNumberMemorableTooltip:
      getMessage("useNumberMemorableTooltip") ||
      "Include numbers (0-9) to make your password stronger.",
    useCharactersMemorableTooltip:
      getMessage("useCharactersMemorableTooltip") ||
      "Use symbols like @, #, $ to add complexity to your password.",
    useUppercaseMemorableTooltip:
      getMessage("useUppercaseMemorableTooltip") ||
      "Capital letters (A-Z) can help secure your password further.",
  };
};

function Popup() {
  const [activeTab, setActiveTab] = useState("random");
  const [translations, setTranslations] = useState<Partial<Translations>>({});
  const [lang, setLang] = useState("es"); // Added lang state

  useEffect(() => {
    analytics.trackPopupOpen();
    setTranslations(getExtensionTranslations());
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    analytics.trackTabChange(tab);
  };

  return (
    <I18nProvider translations={translations}>
      <div className="w-full h-full p-4 bg-white overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {lang === "es"
            ? "Generador de Contraseñas SeamPass"
            : getMessage("title") || "SeamPass Password Generator"}
        </h1>

        <div className="my-3 max-w-[600px] mx-auto p-1 w-full">
          <PasswordTabs activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        <div className="space-y-4 w-full">
          {activeTab === "random" && (
            <div className="w-full">
              <RandomPassword />
            </div>
          )}
          {activeTab === "memorable" && (
            <div className="w-full">
              <MemorablePassword />
            </div>
          )}
        </div>
      </div>
    </I18nProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Popup />);
