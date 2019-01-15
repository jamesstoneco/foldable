# Foldable - An opinionated react starter kit

- Create React App Typescript
- Stricter Typing
- Components below configured for Typescript (Known Issues)
- Styled Components for CSS / visual styling
- Storybook
- Stylegudist + example

Future

- Redux
- Redux Loop (middleware / side effects)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Known Issues

### React Styleguidist

tsx code fences are not supported. Use jsx instead and leave a note if there is something specific about typescript implementation. Typically the root components are not being exposed in this way and it is more important to show props and just placeholder functions to show basic functionality. Issue is with dep package markdown-as-jsx not supporting tsx

        ```tsx
