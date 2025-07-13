# SeamPass Password Generator

A secure and flexible password generation library with support for random and memorable passwords, strength checking, and clipboard utilities.

## Features

- 🔐 **Random Password Generation** - Generate cryptographically secure random passwords
- 🧠 **Memorable Password Generation** - Create memorable passwords using word lists
- 📊 **Password Strength Checking** - Comprehensive strength analysis
- 📋 **Clipboard Utilities** - Copy passwords to clipboard with fallback support
- 🎨 **Color Utilities** - Get color codes for password strength visualization
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
  checkPasswordStrength,
  EFF_WORDLIST,
} from "seampass-password-generator";

// Generate a random password
const randomPassword = generateRandomPassword({
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
});

// Generate a memorable password
const memorablePassword = generateMemorablePassword({
  wordCount: 4,
  separator: "-",
  capitalizeWords: true,
  addNumbers: true,
  wordList: EFF_WORDLIST,
});

// Check password strength
const strength = checkPasswordStrength(randomPassword);
console.log(strength.score);
console.log(strength.feedback);
```

## API Reference

### Random Password Generation

```javascript
generateRandomPassword(options: PasswordOptions): string
```

**Options:**

- `length` (number): Password length (default: 16)
- `includeUppercase` (boolean): Include uppercase letters (default: true)
- `includeLowercase` (boolean): Include lowercase letters (default: true)
- `includeNumbers` (boolean): Include numbers (default: true)
- `includeSymbols` (boolean): Include symbols (default: true)
- `excludeSimilar` (boolean): Exclude similar characters (default: false)

### Memorable Password Generation

```javascript
generateMemorablePassword(options: MemorableOptions): string
```

**Options:**

- `wordCount` (number): Number of words to use (default: 4)
- `separator` (string): Character to separate words (default: '-')
- `capitalizeWords` (boolean): Capitalize each word (default: true)
- `addNumbers` (boolean): Add random numbers (default: true)
- `wordList` (string[]): Array of words to choose from (required)

### Password Strength Checking

```javascript
checkPasswordStrength(password: string): StrengthResult
```

**Returns:**

- `score` (number): Strength score from 0-4
- `feedback` (string[]): Array of improvement suggestions
- `details` (object): Detailed analysis breakdown

### Built-in Word List

The package includes the EFF word list for memorable password generation:

```javascript
import { EFF_WORDLIST } from "seampass-password-generator";

const memorablePassword = generateMemorablePassword({
  wordCount: 4,
  wordList: EFF_WORDLIST,
});
```

## Advanced Usage

### Custom Word Lists

You can provide your own word list for memorable passwords:

```javascript
const customWordList = ["apple", "banana", "cherry", "dragon", "eagle"];

const password = generateMemorablePassword({
  wordCount: 3,
  wordList: customWordList,
  separator: ".",
  capitalizeWords: false,
});
```

### Strength Analysis

```javascript
const password = generateRandomPassword({ length: 20 });
const strength = checkPasswordStrength(password);

console.log(`Score: ${strength.score}/4`);
console.log("Suggestions:", strength.feedback);
console.log("Details:", strength.details);
```

## Browser vs Node.js

This package works in both browser and Node.js environments:

- **Browser**: Full functionality including clipboard utilities
- **Node.js**: All features except clipboard utilities (not available in Node.js)

## TypeScript

Full TypeScript support is included:

```typescript
import type {
  PasswordOptions,
  MemorableOptions,
  StrengthResult,
} from "seampass-password-generator";

const options: PasswordOptions = {
  length: 16,
  includeSymbols: true,
};
```

## License

MIT

## Contributing

This package is part of the SeamPass monorepo. For contributions, please refer to the main repository.
