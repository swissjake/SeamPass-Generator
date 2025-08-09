import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  treeshake: false,
  splitting: false,
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  minify: false,
  clean: true,
  external: ["react", "react-dom", "@seampass/core", "@seampass/shared"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
  ...options,
}));
