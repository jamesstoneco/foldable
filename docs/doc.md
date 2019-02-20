---
id: doc
title: Foldable Documentation
sidebar_label: docs
---

## What's Included

- Create React App Typescript
- Stricter Typing
- Components below configured for Typescript (Known Issues)
- Styled Components for CSS / visual styling
- Storybook
- Stylegudist + example
- Styled Normalize
- Redux
- Redux Loop (middleware / side effects)

## Future

- Lock down and force manual version updates
- Create basic theme super structure for styled components
- Some sort of basic "mixins" for common patterns
- Create basic app structure
- Add example for basic redux / redux loop side effects

## Additional Reading

- https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/
- https://vimeo.com/168648012
- Why Redux-loop https://lorefnon.tech/2018/02/04/redux-loop-a-better-solution-for-managing-asynchronous-operations-in-redux/
- React Boilerplate, a different community opinion https://github.com/react-boilerplate/react-boilerplate

## Frequently Asked Questions (FAQ)

### Q: Why not install via NPM?

It is to show code folder and config structure not just a program that you install. This adds a few steps but allows you to quickly get started with your project.

### Q: Why Styled Components?

CSS is not good at component isolation / encapsulation.

### Q: Why redux-loop vs. Thunk or Redux Saga?

One of the goals of the project is to provide a pure functional redux state / store and to keep the reducers pure. Redux-loop allows you to provide a predictable and isolated way to handle side effects and makes it very easy to understand and debug your application. It is a direct influence from the Elm ecosystem as is Redux and provides a more "functional appproach" to building your react application. [More information on this article](https://lorefnon.tech/2018/02/04/redux-loop-a-better-solution-for-managing-asynchronous-operations-in-redux) which outlines more specifics.

### Q: Why not just CRA?

### Q: Why not React Boilerplate?

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Known Issues

### React Styleguidist

tsx code fences are not supported. Use jsx instead and leave a note if there is something specific about typescript implementation. Typically the root components are not being exposed in this way and it is more important to show props and just placeholder functions to show basic functionality. Issue is with dep package markdown-as-jsx not supporting tsx

        ```tsx

Questionable patch for typescript (commit: d9e7c83d7b9bee4e400fe946c10bffc71682c010). Current version of CRA breaks the build and it has been patched manually based on the [information on issue 1247](https://github.com/styleguidist/react-styleguidist/issues/1247)
