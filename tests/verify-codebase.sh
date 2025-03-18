#!/usr/bin/env bash

# Script to verify that our code quality tools are working correctly
# Run from the root of the project

set -e

echo "🔍 Verifying codebase tooling..."
cd "$(dirname "$0")/.."
ROOT_DIR=$(pwd)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Check if yarn is available
if ! command -v yarn &> /dev/null; then
  echo -e "${RED}❌ Yarn is not installed. Please install yarn first.${NC}"
  exit 1
fi

# Check if files are formatted according to Prettier
check_prettier() {
  echo -e "\n${YELLOW}Checking Prettier formatting...${NC}"
  yarn prettier --check "**/*.{js,jsx,ts,tsx,json,md,css}" --ignore-path .prettierignore || {
    echo -e "${RED}❌ Prettier check failed${NC}"
    echo -e "Run 'yarn format' to fix formatting issues"
    return 1
  }
  echo -e "${GREEN}✅ Prettier check passed${NC}"
  return 0
}

# Check ESLint rules
check_eslint() {
  echo -e "\n${YELLOW}Checking ESLint rules...${NC}"
  # Check if frontend app has files to lint
  if [ -d "apps/frontend/src" ] && [ "$(find apps/frontend/src -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' -o -name '*.js' | wc -l)" -gt 0 ]; then
    echo "Linting frontend app..."
    yarn workspace @foldable/frontend lint || {
      echo -e "${RED}❌ ESLint check failed for frontend${NC}"
      return 1
    }
  fi

  # Add more workspace-specific lint checks as needed
  
  echo -e "${GREEN}✅ ESLint check passed${NC}"
  return 0
}

# Check TypeScript compilation
check_typescript() {
  echo -e "\n${YELLOW}Checking TypeScript compilation...${NC}"
  
  # Check TypeScript in the frontend app
  if [ -d "apps/frontend" ] && [ -f "apps/frontend/tsconfig.json" ]; then
    echo "Checking TypeScript in frontend app..."
    cd apps/frontend
    yarn tsc --noEmit || {
      echo -e "${RED}❌ TypeScript check failed in frontend${NC}"
      cd "$ROOT_DIR"
      return 1
    }
    cd "$ROOT_DIR"
  fi

  # Add more workspace-specific TypeScript checks as needed
  
  echo -e "${GREEN}✅ TypeScript check passed${NC}"
  return 0
}

# Run tests with Vitest
run_tests() {
  echo -e "\n${YELLOW}Running tests with Vitest...${NC}"
  
  # Run tests in the frontend app
  if [ -d "apps/frontend" ]; then
    echo "Running tests in frontend app..."
    yarn workspace @foldable/frontend test || {
      echo -e "${RED}❌ Tests failed in frontend${NC}"
      return 1
    }
  fi

  # Add more workspace-specific test runners as needed
  
  echo -e "${GREEN}✅ All tests passed${NC}"
  return 0
}

# Main function to run all checks
main() {
  local exit_code=0
  
  echo -e "${YELLOW}Starting codebase verification...${NC}"
  
  # Ensure all dependencies are installed
  echo -e "\n${YELLOW}Ensuring all dependencies are installed...${NC}"
  yarn install --silent
  
  check_prettier || exit_code=1
  check_eslint || exit_code=1
  check_typescript || exit_code=1
  run_tests || exit_code=1
  
  if [ $exit_code -eq 0 ]; then
    echo -e "\n${GREEN}✅ All checks passed! Code quality tools are working as expected.${NC}"
  else
    echo -e "\n${RED}❌ Some checks failed. Please review the errors above.${NC}"
  fi
  
  return $exit_code
}

# Run the main function
main "$@" 
