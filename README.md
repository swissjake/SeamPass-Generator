# SeamPass - Secure Password Generator

A comprehensive password generation solution with web app, browser extension, and CLI package.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build
```

## Applications

- **Web App** (`apps/web`) - Next.js web application
- **Extension** (`apps/extension`) - Chrome browser extension
- **CLI** (`apps/npm-package`) - Command line tool
- **Docs** (`apps/docs`) - Documentation site

## Packages

- **Core** (`packages/core`) - Password generation logic
- **UI** (`packages/ui`) - React component library
- **Shared** (`packages/shared`) - Utilities and types
- **Tailwind Config** (`packages/tailwind-config`) - Shared styling

## 📦 NPM Package

**NPM Package:** [seampass-password-generator](https://www.npmjs.com/package/seampass-password-generator)

**Install:**

```bash
npm install -g seampass-password-generator
```

**Usage:**

```bash
seampass random --length 16
seampass memorable --words 4
```

For detailed CLI usage and installation instructions, see the [NPM Package README](apps/npm-package/README.md).

## 🛠️ Tech Stack

- Next.js, React, TypeScript
- Tailwind CSS
- Turborepo, pnpm
- Radix UI components

## 📝 Scripts

- `pnpm dev` - Start all apps
- `pnpm build` - Build all packages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License
