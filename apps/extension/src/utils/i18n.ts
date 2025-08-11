export const getMessage = (
  key: string,
  substitutions?: string | string[]
): string => {
  try {
    return chrome.i18n.getMessage(key, substitutions) || key;
  } catch (error) {
    console.warn(`Failed to get message for key: ${key}`, error);
    return key;
  }
};

export const getUILanguage = (): string => {
  try {
    return chrome.i18n.getUILanguage();
  } catch (error) {
    return "en";
  }
};
