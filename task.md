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

🔹 ShadCN Theme Implementation Notes

📌 Color System Mapping

| Foundation Color | ShadCN Variable | UI Usage | Notes |
|-----------------|----------------|----------|-------|
| Primary (#1779ba) | `--primary` | Default buttons, links, important UI elements | Main brand color |
| Secondary (#767676) | `--secondary` | Secondary buttons, less prominent UI elements | Complementary to primary |
| Success (#3adb76) | `--accent` | Success states, positive actions | Currently mapped to accent |
| Alert (#cc4b37) | `--destructive` | Error states, destructive actions | Direct mapping |
| Warning (#ffae00) | Not mapped | Warning states | Consider adding if needed |

📌 Button Variant Implementation

| ShadCN Button Variant | CSS Variables Used | Foundation Equivalent |
|----------------------|-------------------|----------------------|
| default | `--primary`, `--primary-foreground` | Primary button |
| outline | `--primary` (border/text) | Secondary button with border |
| ghost | `--primary` (hover states) | Transparent button |
| destructive | `--destructive`, `--destructive-foreground` | Alert button |
| secondary | `--secondary`, `--secondary-foreground` | Secondary button |
| link | `--primary` (text) | Text link |

📌 Future Theme Enhancements

1. **Spacing System**
   - ShadCN relies on Tailwind's spacing scale
   - Consider adding Foundation's spacing scale as CSS variables:
     - `--spacing-xxs` (0.25rem)
     - `--spacing-xs` (0.5rem)
     - `--spacing-sm` (0.75rem)
     - `--spacing-md` (1rem)
     - `--spacing-lg` (1.5rem)
     - `--spacing-xl` (2rem)
     - `--spacing-xxl` (3rem)

2. **Color System**
   - Evaluate splitting `--accent` into `--success` and `--accent`
   - Consider dedicated warning state styling
   - Document color usage patterns

3. **Component Consistency**
   - Ensure consistent variable naming across components
   - Document deviations from ShadCN patterns
   - Create style guide for custom components

📌 References

1. **Foundation Settings**
   - [Foundation SCSS Settings](https://github.com/foundation/foundation-sites/blob/develop/scss/settings/_settings.scss) - Source for Foundation's default variables and settings

2. **ShadCN Documentation**
   - [ShadCN Themes](https://ui.shadcn.com/docs/themes) - Official theming documentation
   - [ShadCN Components](https://ui.shadcn.com/docs/components) - Component documentation and styling patterns
   - [ShadCN Colors](https://ui.shadcn.com/docs/colors) - Color system documentation

3. **Tailwind Integration**
   - [Tailwind CSS Variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables) - Using CSS variables with Tailwind
   - [Tailwind Theme Configuration](https://tailwindcss.com/docs/theme) - Theme configuration documentation

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

📌 UI Framework Vision & Approaches

🔹 Two Distinct Development Paths

1. **Unstyled Foundation Approach** (Zurb Foundation-like)

   - Start with unstyled components from our fork
   - Rapid prototyping with basic layouts and brand colors
   - Create "mid-fi" prototypes (between wireframe and high-fi)
   - Focus on functionality and user flows first
   - Polish styling later with Tailwind
   - Best for: Projects needing custom design systems or unique brand identities

2. **Themed shadcn Approach** (Bootstrap-like)
   - Start with styled shadcn components
   - Customize theme for brand identity immediately
   - Build with production-ready styling from the start
   - Focus on both functionality and visual design together
   - Best for: Projects needing rapid development with polished UI

🔹 Storybook as Development Workshop

Storybook serves three primary purposes:

1. **Rapid Prototyping Environment**

   - Test layouts and patterns quickly
   - Simulate user flows
   - Create clickable prototypes
   - Document design decisions

2. **Component Documentation**

   - Usage examples for both approaches
   - Theme customization guides
   - Pattern libraries
   - Interaction documentation

3. **Testing & Validation**
   - Component behavior
   - Theme variations
   - Accessibility
   - Responsive design

🔹 Package Structure

```
packages/
├── shadcn/            # Original shadcn (for Themed Approach)
│   ├── components/    # Generated components
│   ├── themes/        # Brand theme customizations
│   └── package.json
├── foldable-ui/       # Unstyled fork (for Foundation Approach)
│   ├── components/    # Unstyled components
│   ├── themes/        # Theme system
│   └── package.json
└── storybook/         # Development workshop
    ├── src/
    │   ├── patterns/  # Common UI patterns
    │   ├── layouts/   # Page layouts
    │   ├── flows/     # User flow prototypes
    │   └── themes/    # Theme documentation
    └── package.json
```

🔹 Development Workflow

1. **Initial Setup**

   - Choose development approach (Unstyled or Themed)
   - Set up Storybook workshop
   - Configure theme system

2. **Prototyping Phase**

   - Create basic layouts
   - Define user flows
   - Test interactions
   - Document patterns

3. **Production Development**

   - Implement in frontend app
   - Customize as needed
   - Maintain documentation

4. **Iteration & Refinement**
   - Update patterns
   - Refine themes
   - Document changes
   - Share learnings

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
