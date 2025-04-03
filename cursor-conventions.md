# Cursor Conventions

This document outlines the conventions to follow when working with this project in Cursor.

## Terminal Commands

- Before executing any task in the terminal/shell, always navigate to the full path of the starting point first.
  ```bash
  cd /Users/james/kisko-os/foldable
  # or for subdirectories
  cd /Users/james/kisko-os/foldable/apps/frontend
  ```

## Package Management

- We use **asdf** for Node.js version management.
- We use **corepack** to manage Yarn 4.x.
- Always prefer Yarn commands over direct modifications to package.json files.

## shadcn Components

- shadcn components should always be installed using the shadcn CLI.
  ```bash
  # Navigate to the correct directory first
  cd /Users/james/kisko-os/foldable/apps/frontend
  
  # Then run the shadcn command
  yarn dlx shadcn@latest add button
  
  # Example: Adding dropdown menu component
  yarn dlx shadcn@latest add dropdown-menu
  ```

## Workflow Guidelines

- For monorepo commands, execute from the root directory.
- For app-specific commands, navigate to the appropriate app directory first.
- Use `yarn workspace` commands when possible for project-specific operations from the root.

## Project Structure

- `/apps` - Contains the application projects
- `/packages` - Contains shared packages and libraries 
