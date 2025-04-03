# Foldable

A modern web application built with React, TypeScript, and Yarn 4.

## Prerequisites

- Node.js (version specified in `.tool-versions`)
- Yarn (will be installed via Corepack)

## Setup

1. Install required versions using asdf:

   ```bash
   asdf install
   ```

2. Enable Corepack and install dependencies:

   ```bash
   corepack enable
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

## Project Structure

- `apps/` - Contains the main application
- `packages/` - Shared packages and components

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn test:tailwind` - Run Tailwind CSS tests
- `yarn verify` - Run build verification
- `yarn verify:codebase` - Run codebase verification
- `yarn env:load` - Load environment variables

## Contributing

1. Follow the setup instructions above
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## License

MIT
