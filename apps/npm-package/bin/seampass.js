#!/usr/bin/env node

const {
  generateRandomPassword,
  generateMemorablePassword,
  EFF_WORDLIST,
} = require("../dist/index.js");

const args = process.argv.slice(2);
const command = args[0];

function showHelp() {
  console.log(`
SeamPass Password Generator

Usage:
  seampass random [options]     Generate random password
  seampass memorable [options]  Generate memorable password
  seampass --help              Show this help

Options:
  --length <number>            Password length (default: 16)
  --numbers                    Include numbers
  --letters                    Include letters  
  --symbols                    Include symbols
  --capitals                   Include capitals
  --words <number>             Number of words for memorable (default: 4)
  --copy                       Copy to clipboard (if available)

Examples:
  seampass random --length 20 --numbers --symbols
  seampass memorable --words 5 --numbers
  seampass random --copy
`);
}

function parseArgs(args) {
  const options = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--length" && i + 1 < args.length) {
      options.length = parseInt(args[i + 1]);
      i++; // Skip next argument
    } else if (arg === "--words" && i + 1 < args.length) {
      options.words = parseInt(args[i + 1]);
      i++; // Skip next argument
    } else if (arg === "--numbers") {
      options.useNumbers = true;
    } else if (arg === "--letters") {
      options.useLetters = true;
    } else if (arg === "--symbols") {
      options.useSymbols = true;
    } else if (arg === "--capitals") {
      options.useCapitals = true;
    } else if (arg === "--copy") {
      options.copy = true;
    }
  }

  return options;
}

function generateRandom() {
  const parsedArgs = parseArgs(args);

  const options = {
    length: parsedArgs.length || 16,
    useNumbers: parsedArgs.useNumbers || false,
    useLetters: parsedArgs.useLetters !== false,
    useCharacters: parsedArgs.useSymbols || false,
    useCapitals: parsedArgs.useCapitals || false,
  };

  const password = generateRandomPassword(options);
  console.log(password);

  if (parsedArgs.copy) {
    try {
      require("child_process").execSync(`echo "${password}" | pbcopy`);
      console.log("Password copied to clipboard!");
    } catch (error) {
      console.log("Could not copy to clipboard");
    }
  }
}

function generateMemorable() {
  const parsedArgs = parseArgs(args);

  const options = {
    wordCount: parsedArgs.words || 4,
    useNumbers: parsedArgs.useNumbers || false,
    useCharacters: parsedArgs.useSymbols || false,
    useUppercase: parsedArgs.useCapitals || false,
  };

  const password = generateMemorablePassword(EFF_WORDLIST, options);
  console.log(password);

  if (parsedArgs.copy) {
    try {
      require("child_process").execSync(`echo "${password}" | pbcopy`);
      console.log("Password copied to clipboard!");
    } catch (error) {
      console.log("Could not copy to clipboard");
    }
  }
}

// Main CLI logic
if (args.includes("--help") || args.length === 0) {
  showHelp();
} else if (command === "random") {
  generateRandom();
} else if (command === "memorable") {
  generateMemorable();
} else {
  console.log("Unknown command. Use --help for usage.");
  process.exit(1);
}
