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

function generateRandom() {
  const options = {
    length:
      parseInt(
        args.find((arg) => arg.startsWith("--length="))?.split("=")[1]
      ) || 16,
    useNumbers: args.includes("--numbers"),
    useLetters: args.includes("--letters") || true,
    useCharacters: args.includes("--symbols"),
    useCapitals: args.includes("--capitals"),
  };

  const password = generateRandomPassword(options);
  console.log(password);

  if (args.includes("--copy")) {
    try {
      require("child_process").execSync(`echo "${password}" | pbcopy`);
      console.log("Password copied to clipboard!");
    } catch (error) {
      console.log("Could not copy to clipboard");
    }
  }
}

function generateMemorable() {
  const options = {
    wordCount:
      parseInt(args.find((arg) => arg.startsWith("--words="))?.split("=")[1]) ||
      4,
    useNumbers: args.includes("--numbers"),
    useCharacters: args.includes("--symbols"),
    useUppercase: args.includes("--capitals"),
  };

  const password = generateMemorablePassword(EFF_WORDLIST, options);
  console.log(password);

  if (args.includes("--copy")) {
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
