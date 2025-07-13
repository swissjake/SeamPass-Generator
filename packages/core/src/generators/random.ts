export const generateRandomPassword = (options: {
  useNumbers: boolean;
  useLetters: boolean;
  useCharacters: boolean;
  useCapitals: boolean;
  length: number;
}): string => {
  const numbers = "0123456789";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

  const newPasswordComponents: string[] = [];
  const availableOptions: string[] = [];

  // Secure random number generator
  const secureRandom = (max: number) => {
    if (
      typeof window !== "undefined" &&
      window.crypto &&
      window.crypto.getRandomValues
    ) {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      return (array[0] ?? 0) % max;
    } else {
      // Node.js
      const { randomInt } = require("crypto");
      return randomInt(max);
    }
  };

  // Add available options
  if (options.useLetters) availableOptions.push("letter");
  if (options.useNumbers) availableOptions.push("number");
  if (options.useCharacters) availableOptions.push("special");

  // If no options are selected, default to letters
  if (availableOptions.length === 0) {
    availableOptions.push("letter");
  }

  while (newPasswordComponents.length < options.length) {
    const optionIndex = secureRandom(availableOptions.length);
    // Since we ensure availableOptions is never empty, this is safe
    const selectedOption = availableOptions[optionIndex]!;

    switch (selectedOption) {
      case "letter": {
        let character = letters.charAt(secureRandom(letters.length));
        if (options.useCapitals) {
          character = Math.random() < 0.5 ? character.toUpperCase() : character;
        }
        newPasswordComponents.push(character);
        break;
      }
      case "number":
        newPasswordComponents.push(
          numbers.charAt(secureRandom(numbers.length))
        );
        break;
      case "special":
        newPasswordComponents.push(
          specialCharacters.charAt(secureRandom(specialCharacters.length))
        );
        break;
    }
  }

  return newPasswordComponents.join("");
};
