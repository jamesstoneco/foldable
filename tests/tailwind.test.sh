#!/bin/bash
# Use set -e for error detection, but not set -x for verbosity as it's too noisy
set -e

echo "🧪 Testing Tailwind CSS v4 configuration..."

# Make sure we're at the project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
cd "$SCRIPT_DIR/.."
echo "Current directory: $(pwd)"

# Create temporary directory
TEMP_DIR="$(mktemp -d)"
TEMP_INPUT="$TEMP_DIR/test-input.css"
TEMP_OUTPUT="$TEMP_DIR/test-output.css"
echo "Temp directory: $TEMP_DIR"

cleanup() {
  echo "🧹 Cleaning up..."
  rm -rf "$TEMP_DIR"
}

# Set up cleanup on exit
trap cleanup EXIT

echo "📝 Creating test CSS file..."
cat > "$TEMP_INPUT" << EOF
@import "tailwindcss";

.test-element {
  @apply bg-blue-500 text-white p-4 rounded;
}
EOF

echo "Content of test input file:"
cat "$TEMP_INPUT"

echo "🔄 Processing CSS with PostCSS CLI and Tailwind..."

# Change to the frontend directory
cd apps/frontend
echo "Now in directory: $(pwd)"

echo "Checking PostCSS config..."
if [ -f "postcss.config.mjs" ]; then
  echo "PostCSS config found:"
  cat postcss.config.mjs
else
  echo "PostCSS config not found!"
  exit 1
fi

# Run PostCSS directly with npx using the local Node.js environment
echo "Running PostCSS CLI command using Yarn:"
yarn postcss "$TEMP_INPUT" -o "$TEMP_OUTPUT" --config postcss.config.mjs || {
  echo "❌ PostCSS processing failed"
  echo "🔍 Debug information:"
  echo "  - Current directory: $(pwd)"
  echo "  - PostCSS config exists: $([ -f "postcss.config.mjs" ] && echo "Yes" || echo "No")"
  echo "  - PostCSS config content:"
  cat postcss.config.mjs
  echo "  - Input file exists: $([ -f "$TEMP_INPUT" ] && echo "Yes" || echo "No")"
  exit 1
}

# Check if output file was created
if [ ! -f "$TEMP_OUTPUT" ]; then
  echo "❌ Output file was not created"
  exit 1
fi

echo "✅ Verifying output..."
if grep -q "tailwindcss v4" "$TEMP_OUTPUT"; then
  echo "✨ Success! Tailwind CSS v4 is working correctly."
else
  echo "❌ Failed! Tailwind CSS v4 is not processing correctly."
  echo "🔍 Output file content:"
  head -n 10 "$TEMP_OUTPUT"
  exit 1
fi

if grep -q ".test-element" "$TEMP_OUTPUT" && grep -q "color: var(--color-white)" "$TEMP_OUTPUT"; then
  echo "✨ Success! Custom styles are being processed correctly."
else
  echo "❌ Failed! Custom styles are not being processed correctly."
  echo "🔍 Output file content related to test-element:"
  grep -A 5 ".test-element" "$TEMP_OUTPUT" || echo "  No .test-element found in output"
  exit 1
fi

echo "🎉 All tests passed! Tailwind CSS v4 is configured correctly." 
