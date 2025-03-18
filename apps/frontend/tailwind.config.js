/** @type {import('tailwindcss').Config} */

// Import base configuration
import baseConfig from '../../packages/config/tailwind/base.js';

export default {
  ...baseConfig,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...baseConfig.theme?.extend,
      // Add additional theme extensions here
    },
  },
  plugins: [],
};
