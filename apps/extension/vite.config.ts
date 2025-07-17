import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { copyFileSync, mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-manifest",
      writeBundle() {
        // Copy manifest.json to dist
        copyFileSync("manifest.json", "dist/manifest.json");

        // Copy icons (only the PNG files)
        try {
          mkdirSync("dist/icons", { recursive: true });
          copyFileSync("public/icons/icon16.png", "dist/icons/icon16.png");
          copyFileSync("public/icons/icon48.png", "dist/icons/icon48.png");
          copyFileSync("public/icons/icon128.png", "dist/icons/icon128.png");
        } catch (error) {
          console.log("Icons not found, skipping...");
        }

        // Clean up unwanted files
        try {
          const fs = require("fs");
          if (fs.existsSync("dist/icons/.DS_Store")) {
            fs.unlinkSync("dist/icons/.DS_Store");
          }
          if (fs.existsSync("dist/src/")) {
            fs.rmSync("dist/src/", { recursive: true, force: true });
          }
        } catch (error) {
          console.log("Cleanup completed");
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "popup.html"),
        content: resolve(__dirname, "src/content.ts"),
        background: resolve(__dirname, "src/background.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  optimizeDeps: {
    include: ["@seampass/tailwind-config/styles"],
  },
});
