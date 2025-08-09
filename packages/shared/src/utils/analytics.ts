declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPasswordGeneration = (
  type: "random" | "memorable",
  options?: any
) => {
  trackEvent("generate_password", "password_generator", type, 1);

  if (options) {
    if (type === "random") {
      trackEvent(
        "password_settings",
        "random_options",
        `length_${options.length}`
      );
      trackEvent(
        "password_settings",
        "random_options",
        `numbers_${options.useNumbers}`
      );
      trackEvent(
        "password_settings",
        "random_options",
        `letters_${options.useLetters}`
      );
      trackEvent(
        "password_settings",
        "random_options",
        `characters_${options.useCharacters}`
      );
      trackEvent(
        "password_settings",
        "random_options",
        `capitals_${options.useCapitals}`
      );
    }
  }
};

export const trackPasswordCopy = (type: "random" | "memorable") => {
  trackEvent("copy_password", "user_action", type, 1);
};

export const trackPasswordStrength = (
  strength: string,
  type: "random" | "memorable"
) => {
  trackEvent(
    "password_strength",
    "password_quality",
    `${type}_${strength.toLowerCase()}`,
    1
  );
};

export const trackSettingsChange = (
  setting: string,
  value: any,
  type: "random" | "memorable"
) => {
  trackEvent(
    "change_setting",
    "user_interaction",
    `${type}_${setting}_${value}`,
    1
  );
};
