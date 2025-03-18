import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders the app correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
