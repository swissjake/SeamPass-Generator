export interface PasswordOptions {
  useNumbers: boolean;
  useLetters: boolean;
  useCharacters: boolean;
  useCapitals: boolean;
  length: number;
}

export interface MemorableOptions {
  useNumbers: boolean;
  useCharacters: boolean;
  useUppercase: boolean;
  wordCount: number;
}

export interface StrengthResult {
  strengthMessage: string;
  color: string;
  score: number;
}
