# foldable

## Motivation

Foldable v2 is guided by the following core philosophies:

1. **Modularity First**: The architecture deliberately separates concerns (apps, packages, config, scripts) to allow independent evolution of each part.

2. **Progressive Enhancement**: Starting with a lean foundation that can be incrementally enhanced, rather than a monolithic framework.

3. **Flexible Customization**: Building for adaptability with configuration-based approaches rather than hardcoded solutions, particularly with theming.

4. **Developer Experience**: Focusing on rapid iteration with modern tooling (Vite, Tailwind CSS v4) while maintaining robust type safety.

5. **Future-Proofing**: Creating a structure that accommodates different frontend approaches (Vite/React Router or Next.js) and device targets (web/mobile).

6. **Maintainable Architecture**: Emphasizing clarity in project organization to reduce technical debt and make onboarding easier.

Foldable v2 balances flexibility with structure - providing enough guidance to maintain consistency while allowing teams to adapt the starter kit to their specific needs without fighting against the framework.

## Implementation Status

Current implementation status of Foldable v2:

### ✅ Completed
- Basic monorepo structure with apps/frontend and packages/config
- Frontend app based on Vite + React + TypeScript
- Modern tooling setup: ESLint (flat config), Prettier, Vitest
- Tailwind CSS v4 configuration with PostCSS
- Code quality verification scripts
- Project documentation and task roadmap

### 🚧 In Progress
- Testing infrastructure with Vitest
- Organized project structure for scalability
- Configuration sharing between packages

### 📋 Planned Next
- Component library with Radix Primitives
- Storybook implementation
- Theming system with CSS variables
- React Router integration

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/foldable.git
cd foldable

# Install dependencies
yarn install

# Start the development server
yarn dev

# Run verification scripts
yarn verify:codebase
```
