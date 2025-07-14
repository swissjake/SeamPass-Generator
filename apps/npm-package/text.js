const {
  generateRandomPassword,
  generateMemorablePassword,
  checkPasswordStrength,
  copyToClipboard,
  EFF_WORDLIST,
} = require("seampass-password-generator");

console.log("🔐 Testing SeamPass Password Generator (Local)\n");

// Test 1: Random Password
console.log("1️⃣ Random Password Generation:");
const randomPassword = generateRandomPassword({
  useNumbers: true,
  useLetters: true,
  useCharacters: true,
  useCapitals: true,
  length: 16,
});
console.log(`Generated: ${randomPassword}`);

// Test 2: Memorable Password
console.log("\n2️⃣ Memorable Password Generation:");
const memorablePassword = generateMemorablePassword(EFF_WORDLIST, {
  useNumbers: true,
  useCharacters: true,
  useUppercase: true,
  wordCount: 4,
});
console.log(`Generated: ${memorablePassword}`);

// Test 3: Password Strength
console.log("\n3️⃣ Password Strength Checking:");
const weakPassword = "password123";
const strongPassword = randomPassword;

const weakStrength = checkPasswordStrength(weakPassword);
const strongStrength = checkPasswordStrength(strongPassword);

console.log(`Weak password "${weakPassword}":`);
console.log(`  Score: ${weakStrength.score}/4`);
console.log(`  Message: ${weakStrength.strengthMessage}`);
console.log(`  Color: ${weakStrength.color}`);

console.log(`\nStrong password "${strongPassword}":`);
console.log(`  Score: ${strongStrength.score}/4`);
console.log(`  Message: ${strongStrength.strengthMessage}`);
console.log(`  Color: ${strongStrength.color}`);

// Test 4: Word List
console.log("\n4️⃣ Built-in Word List:");
console.log(`Word list length: ${EFF_WORDLIST.length} words`);
console.log(`Sample words: ${EFF_WORDLIST.slice(0, 5).join(", ")}`);

// Test 5: Clipboard (will show warning in Node.js)
console.log("\n5️⃣ Clipboard Test:");
try {
  copyToClipboard(randomPassword);
  console.log("✅ Password copied to clipboard!");
} catch (error) {
  console.log("⚠️  Clipboard not available in Node.js (this is expected)");
  console.log("   Clipboard works in browsers and desktop apps");
}

console.log("\n🎉 All local tests completed!");
