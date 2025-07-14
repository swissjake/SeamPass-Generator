# SeamPass Password Generator

A secure and flexible password generation library with support for random and memorable passwords.

## Features

- 🔐 **Random Password Generation** - Generate cryptographically secure random passwords
- 🧠 **Memorable Password Generation** - Create memorable passwords using word lists
- 📦 **Built-in Word List** - Includes EFF word list for memorable passwords
- 🌐 **Universal Support** - Works in browsers and Node.js environments
- 📝 **TypeScript Support** - Full TypeScript definitions included

## Installation

```bash
npm install seampass-password-generator
```

## Quick Start

```javascript
import {
  generateRandomPassword,
  generateMemorablePassword,
  EFF_WORDLIST,
} from "seampass-password-generator";

// Generate a random password
const randomPassword = generateRandomPassword({
  useNumbers: true,
  useLetters: true,
  useCharacters: true,
  useCapitals: true,
  length: 16,
});

// Generate a memorable password
const memorablePassword = generateMemorablePassword(EFF_WORDLIST, {
  useNumbers: true,
  useCharacters: true,
  useUppercase: true,
  wordCount: 4,
});
```

## API Reference

### Random Password Generation

```javascript
generateRandomPassword(options: RandomPasswordOptions): string
```

**Options:**

- `useNumbers` (boolean): Include numbers (default: false)
- `useLetters` (boolean): Include letters (default: false)
- `useCharacters` (boolean): Include special characters (default: false)
- `useCapitals` (boolean): Include capital letters (default: false)
- `length` (number): Password length (required)

### Memorable Password Generation

```javascript
generateMemorablePassword(wordList: string[], options: MemorablePasswordOptions): string
```

**Options:**

- `useNumbers` (boolean): Add random numbers to words (default: false)
- `useCharacters` (boolean): Add special characters to words (default: false)
- `useUppercase` (boolean): Capitalize random letters in words (default: false)
- `wordCount` (number): Number of words to use (required)

### Built-in Word List

```javascript
import { EFF_WORDLIST } from "seampass-password-generator";

const memorablePassword = generateMemorablePassword(EFF_WORDLIST, {
  wordCount: 4,
  useNumbers: true,
});
```

## License

MIT

## Contributing

This package is part of the SeamPass monorepo. For contributions, please refer to the main repository.
