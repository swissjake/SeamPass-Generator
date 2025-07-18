import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "fs";

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

        // Fix HTML paths for Chrome extension
        try {
          const htmlPath = "dist/popup.html";
          let htmlContent = readFileSync(htmlPath, "utf8");

          // Replace absolute paths with relative paths
          htmlContent = htmlContent.replace(/src="\//g, 'src="');
          htmlContent = htmlContent.replace(/href="\//g, 'href="');

          writeFileSync(htmlPath, htmlContent);
          console.log("Fixed HTML paths for Chrome extension");
        } catch (error) {
          console.log("Error fixing HTML paths:", error);
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
    assetsDir: "",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "popup.html"),
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
