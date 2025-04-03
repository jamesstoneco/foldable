#!/bin/bash

set -e

echo "🔍 Running Foldable Ecosystem CI..."

# 1. Build check
echo "📦 Checking build..."
yarn build

# 2. Tailwind compilation
echo "🎨 Checking Tailwind compilation..."
yarn test:tailwind

# 3. Type checking
echo "📝 Checking TypeScript..."
yarn workspace @foldable/frontend tsc --noEmit

# 4. Basic render test
echo "🖥️  Checking basic render..."
yarn workspace @foldable/frontend vitest run src/App.test.tsx

# 5. Package resolution
echo "📦 Checking package resolution..."
yarn install --check-cache

echo "✅ Foldable Ecosystem CI passed!" 
