# SeamPass Password Generator

[![npm version](https://img.shields.io/npm/v/seampass-password-generator)](https://www.npmjs.com/package/seampass-password-generator)
[![npm downloads](https://img.shields.io/npm/dm/seampass-password-generator)](https://www.npmjs.com/package/seampass-password-generator)
[![license](https://img.shields.io/npm/l/seampass-password-generator)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A secure and flexible password generation library with CLI support for random and memorable passwords.

## Features

- 🔐 **Random Password Generation** - Generate cryptographically secure random passwords
- 🧠 **Memorable Password Generation** - Create memorable passwords using word lists
- 📦 **Built-in Word List** - Includes EFF word list for memorable passwords
- 🌐 **Universal Support** - Works in browsers and Node.js environments
- 📝 **TypeScript Support** - Full TypeScript definitions included
- 🖥️ **CLI Tool** - Command-line interface for quick password generation

## Installation

```bash
npm install seampass-password-generator
```

## Quick Start

### As a Library

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

### As a CLI Tool

```bash
# Install globally for CLI access
npm install -g seampass-password-generator

# Generate random password
seampass random --length 20 --numbers --symbols

# Generate memorable password
seampass memorable --words 5 --numbers

# Copy to clipboard
seampass random --copy

# Show help
seampass --help
```

> **Note**: The `--copy` flag requires clipboard support on your terminal system. On Linux, you may need `xclip` or `xsel` installed.

> **Tip**: To use the CLI locally without global installation, run `npx seampass-password-generator` or add scripts to your `package.json`.

## CLI Usage

### Random Password Generation

```bash
seampass random [options]
```

**Options:**

- `--length <number>` - Password length (default: 16)
- `--numbers` - Include numbers
- `--letters` - Include letters
- `--symbols` - Include symbols
- `--capitals` - Include capitals
- `--copy` - Copy to clipboard

**Examples:**

```bash
# Generate 20-character password with numbers and symbols
seampass random --length 20 --numbers --symbols

# Generate password and copy to clipboard
seampass random --length 16 --numbers --symbols --copy
```

### Memorable Password Generation

```bash
seampass memorable [options]
```

**Options:**

- `--words <number>` - Number of words (default: 4)
- `--numbers` - Add random numbers to words
- `--symbols` - Add special characters to words
- `--capitals` - Capitalize random letters in words
- `--copy` - Copy to clipboard

**Examples:**

```bash
# Generate 5-word memorable password with numbers
seampass memorable --words 5 --numbers

# Generate memorable password with symbols and copy to clipboard
seampass memorable --words 4 --symbols --copy
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

**Example:**

```javascript
const password = generateRandomPassword({
  useNumbers: true,
  useLetters: true,
  useCharacters: true,
  useCapitals: true,
  length: 16,
});
// Output: "K8#mN9$pL2@vX7q"
```

### Memorable Password Generation

```javascript
generateMemorablePassword(wordList: string[], options: MemorablePasswordOptions): string
```

**Options:**

- `useNumbers` (boolean): Add random numbers to words (default: false)
- `useCharacters` (boolean): Add special characters to words (default: false)
- `useUppercase` (boolean): Capitalize random letters in words (default: false)
- `wordCount` (number): Number of words to use (required)

**Example:**

```javascript
const memorablePassword = generateMemorablePassword(EFF_WORDLIST, {
  useNumbers: true,
  useCharacters: true,
  useUppercase: true,
  wordCount: 4,
});
// Output: "Correct-Horse-Battery-Staple-42"
```

### Built-in Word List

```javascript
import { EFF_WORDLIST } from "seampass-password-generator";

const memorablePassword = generateMemorablePassword(EFF_WORDLIST, {
  wordCount: 4,
  useNumbers: true,
});
```

## Advanced Usage

### Custom Word Lists

You can provide your own word list for memorable passwords:

```javascript
const customWordList = ["apple", "banana", "cherry", "dragon", "eagle"];

const password = generateMemorablePassword(customWordList, {
  wordCount: 3,
  useUppercase: true,
});
```

### Programmatic Usage

```javascript
import {
  generateRandomPassword,
  generateMemorablePassword,
  EFF_WORDLIST,
} from "seampass-password-generator";

// Generate multiple passwords
const passwords = [];
for (let i = 0; i < 5; i++) {
  passwords.push(
    generateRandomPassword({
      useNumbers: true,
      useLetters: true,
      useCharacters: true,
      length: 12,
    })
  );
}

console.log("Generated passwords:", passwords);
```

## Browser vs Node.js

This package works in both browser and Node.js environments:

- **Browser**: Full functionality
- **Node.js**: Full functionality including CLI

## TypeScript

Full TypeScript support is included:

```typescript
import type {
  RandomPasswordOptions,
  MemorablePasswordOptions,
} from "seampass-password-generator";

const options: RandomPasswordOptions = {
  useNumbers: true,
  useLetters: true,
  length: 16,
};
```

## License

MIT

## Contributing

This package is part of the SeamPass monorepo. For contributions, please refer to the main repository.
