import sharedConfig from "@seampass/tailwind-config/tailwind.config.js";

export default {
  ...sharedConfig,
  content: [
    "src/components/**/*.{ts,tsx}",
    // "./src/styles/**/**/*.{tsx}",
  ],
};
