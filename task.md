📌 Roadmap for Foldable v2: Upgrading Foldable v1 React Starter Kit

🚀 Goal: Transform Foldable v1 into a more modular, scalable, and flexible frontend starter kit while maintaining its speed and rapid prototyping focus.

Key Improvements in Foldable v2:
✔️ More structured architecture (decoupling Storybook, components, and app logic)
✔️ Better theming and styling (unstyled ShadCN with Tailwind CSS variables)
✔️ Optional support for Vite + React Router or Next.js
✔️ Isolated Capacitor support for mobile/web hybrid apps
✔️ Automated dependency management and CI testing
✔️ Modern testing strategy with Vitest and Playwright

⸻

📌 Foldable v2 Architecture & Structure

🔹 New Project Structure

/foldable
├── apps/ # Actual applications
│ ├── frontend/ ✅ # Main web frontend (Vite + React + TypeScript) - IMPLEMENTED
│ ├── mobile/ # Optional Capacitor-based mobile frontend
│ ├── backend/ # Optional Rails API backend
│ └── docs/ # Developer documentation
├── packages/ # Shared dependencies across projects
│ ├── ui/ # Unstyled ShadCN-based UI components
│ ├── themes/ # Tailwind theming utilities
│ ├── storybook/ # Storybook configuration & shared stories
│ ├── utils/ # Common utilities/helpers
│ ├── assets/ # Icons, images, fonts
│ ├── testing/ # Shared testing utilities and configs
│ ├── config/ ✅ # Shared configurations - IMPLEMENTED
├── sandbox/ # Experimental playground for new features
├── scripts/ ✅ # Automation scripts (dependency management, CI/CD) - IMPLEMENTED
├── tests/ ✅ # Testing scripts and utilities - IMPLEMENTED
├── .github/ # GitHub Actions for automated testing & updates
├── .nvmrc ✅ # Node.js version management - IMPLEMENTED
├── package.json ✅ # Monorepo root package.json - IMPLEMENTED
├── README.md ✅ # Documentation - IMPLEMENTED

✅ Benefits of This Structure:
• Separation of concerns → Apps are isolated from shared packages
• Easier maintenance → Each layer (UI, theming, utilities) is independently upgradable
• Flexible frontend choice → Can start with Vite and later migrate to Next.js
• Scalable → Can add new apps (mobile, embedded web, or full-stack apps) easily

⸻

📌 Key Enhancements in Foldable v2

🔹 1. Component Library (packages/ui)
• Unstyled ShadCN → Fork of ShadCN that works without styling, making it theme-agnostic
• Radix Primitives → Accessible, unstyled UI components
• Layout Primitives → Grid, flex, container, spacing utilities
• Pattern-Based Structure → Atomic design naming (optional, if useful)

📌 New Features:
✔️ Customizable via Tailwind tokens & CSS variables
✔️ Fully compatible with ShadCN styling (for teams that prefer default styling)
✔️ Optimized for rapid prototyping in Storybook

⸻

🔹 2. Theming System (packages/themes)

📌 Moving away from hardcoded Tailwind utilities to a settings-based approach
• Uses Tailwind CSS Variables ✅ - PARTIALLY IMPLEMENTED
• Theming follows a Zurb Foundation-style settings file
• Supports dark mode, contrast mode, and custom themes

📌 Example tailwind.config.js

module.exports = {
theme: {
extend: {
colors: {
primary: "var(--color-primary)",
secondary: "var(--color-secondary)",
},
borderRadius: {
DEFAULT: "var(--radius)",
},
},
},
};

📌 Example themes/default.css

:root {
--color-primary: #007aff;
--color-secondary: #ff3b30;
--radius: 0.5rem;
}

✅ Easier customization → No need to override Tailwind classes manually
✅ Supports design tokens from Figma → Can be easily updated

⸻

🔹 3. Storybook (packages/storybook)

📌 Decoupled Storybook Instance → Not included in the main app, lives separately
• Collocates stories with components but also has global demo stories (Kitchen Sink, Layouts)
• Uses mock data JSON for rapid UI iteration
• Deployable via Netlify or Vercel for feedback

📌 New Features:
✔️ Kitchen Sink stories for full UI views
✔️ Interactive mock data + API hooks
✔️ Separate configuration for different environments

⸻

🔹 4. App Scaffolding (apps/web)

📌 Two starter templates available:
✅ Vite + React Router (default) ✅ - PARTIALLY IMPLEMENTED (Vite + React + TypeScript)
✅ Next.js (optional, when SSR is needed)

📌 New Features:
• Pluggable authentication (Auth.js, Clerk, or custom REST API)
• Hybrid API approach → Can use a Rails API backend or local mock data
• Capacitor support → Mobile version can be added seamlessly

⸻

🔹 5. CI/CD & Dependency Automation

📌 Automated dependency updates to prevent conflicts
• Uses GitHub Actions to run:
• Dependency audits (yarn outdated)
• Safe upgrades (npx npm-check-updates -t minor -u)
• Storybook + build tests

📌 Best Practices:
✔️ Claude only modifies sandboxed scripts before they go live
✔️ Dependency upgrades are tested before merging
✔️ Patch breaking updates using patch-package

⸻

🔹 6. Testing Strategy

📌 Modern Testing Approach
• Unit & Component Testing → Vitest for fast, efficient component & unit tests ✅ - IMPLEMENTED
• End-to-end Testing → Playwright for comprehensive browser testing
• Visual Regression → Integration with Storybook for visual testing

📌 New Features:
✔️ Shared testing utilities across packages and apps ✅ - PARTIALLY IMPLEMENTED
✔️ Component tests run alongside Storybook stories
✔️ CI integration for continuous test validation
✔️ Mock service worker for API testing

📌 Benefits:
✅ Faster development cycles with immediate test feedback
✅ Consistent testing patterns across the entire codebase
✅ Better test coverage with less effort

⸻

📌 Implementation Roadmap

Phase Tasks Expected Outcome Status
1️⃣ Architecture & Structure - Set up monorepo (apps/, packages/, sandbox/) Clear folder structure for modularity ✅ IN PROGRESS (75%)
2️⃣ Component Library & Theming - Fork ShadCN as unstyled components- Implement Tailwind settings-based theming Fully customizable UI components ⏳ NOT STARTED
3️⃣ Storybook & Testing - Move Storybook to its own package- Set up Vitest for unit testing- Configure Playwright for e2e tests Comprehensive testing & UI preview ✅ IN PROGRESS (30%)
4️⃣ App Scaffolding - Set up Vite + React Router template- Add optional Next.js support Flexible frontend framework choice ✅ IN PROGRESS (50%)
5️⃣ CI/CD & Dependency Management - Automate dependency updates- Test & validate updates before merging Stable and up-to-date stack ⏳ NOT STARTED

⸻

📌 Next Steps

🚀 What needs to be finalized before implementation?
• Decide on the default backend strategy → Rails API-only, or mock-first?
• Confirm approach to mobile support → Capacitor in main repo or separate?
• Define core UI components → What does the unstyled UI kit need to include?
• Clarify Storybook deployment workflow → Private or public access?
• Determine testing coverage requirements → What level of test coverage is expected?

🔥 Once those are set, we can start implementing Foldable v2 in a structured way.
Would you like me to break down Phase 1: Architecture Setup into a more detailed plan? 🚀
