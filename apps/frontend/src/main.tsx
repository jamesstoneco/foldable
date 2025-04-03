import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'jotai';
import { darkModeAtom } from '@/atoms/theme';
import './index.css';
import App from './App.tsx';

// Initialize dark mode
const root = document.documentElement;
const savedPreference = localStorage.getItem("darkMode");
const isDarkMode = savedPreference !== null
  ? savedPreference === "true"
  : window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode) {
  root.classList.add('dark');
} else {
  root.classList.remove('dark');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
