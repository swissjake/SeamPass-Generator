/// <reference types="vite/client" />
/// <reference types="chrome" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_GA_API_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
