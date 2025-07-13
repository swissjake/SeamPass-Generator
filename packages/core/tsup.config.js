import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  treeshake: true,
  splitting: true,
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  clean: true,
  ...options,
}));
