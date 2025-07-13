const fs = require("fs");
const path = require("path");

// Read the word list file
const wordListPath = path.join(
  __dirname,
  "../apps/web/public/eff_large_wordlist.txt"
);
const outputDir = path.join(__dirname, "../packages/core/src/constants");
const outputPath = path.join(outputDir, "wordlist.ts");

try {
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read the file
  const content = fs.readFileSync(wordListPath, "utf8");

  // Split by lines and extract words
  const lines = content.split("\n").filter((line) => line.trim());
  const words = lines
    .map((line) => {
      // Handle both formats: "1000\tword" and "word"
      const parts = line.split("\t");
      return parts.length > 1 ? parts[1] : parts[0];
    })
    .filter((word) => word && word.length > 0);

  // Create the TypeScript file content
  const tsContent = `// Auto-generated from eff_large_wordlist.txt
// Source: https://www.eff.org/dice
// License: Creative Commons Attribution 3.0 Unported License

export const EFF_WORDLIST = [
${words.map((word) => `  "${word}"`).join(",\n")}
];
`;

  // Write the file
  fs.writeFileSync(outputPath, tsContent);

  console.log(`✅ Extracted ${words.length} words to ${outputPath}`);
  console.log(`📦 Package size: ~${Math.round(tsContent.length / 1024)}KB`);
} catch (error) {
  console.error("❌ Error:", error.message);
}
