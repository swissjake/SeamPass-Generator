export const generateMemorablePassword = (
  wordList: string[],
  options: {
    useNumbers: boolean;
    useCharacters: boolean;
    useUppercase: boolean;
    wordCount: number;
  }
): string => {
  if (wordList.length === 0) return "";

  const transformWord = (word: string): string => {
    let transformedWord = word;

    if (options.useUppercase) {
      const index = Math.floor(Math.random() * word.length);
      transformedWord =
        word.substring(0, index) +
        word.charAt(index).toUpperCase() +
        word.substring(index + 1);
    }

    if (options.useNumbers) {
      transformedWord += Math.floor(Math.random() * 10).toString();
    }

    if (options.useCharacters) {
      const specialChars = "!@#$%^&*";
      transformedWord +=
        specialChars[Math.floor(Math.random() * specialChars.length)];
    }

    return transformedWord;
  };

  const newPassword: string[] = [];
  for (let i = 0; i < options.wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const entry = wordList[randomIndex]?.split("\t")[1];
    if (entry) {
      const word = transformWord(entry);
      newPassword.push(word);
    }
  }

  return newPassword.join("-");
};
