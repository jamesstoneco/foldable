import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAtomValue } from 'jotai';
import { darkModeAtom } from '@/atoms/theme';

type Theme = 'default' | 'stone' | 'zinc' | 'neutral' | 'gray' | 'slate' | 'custom';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('default');
    const { isDarkMode } = useAtomValue(darkModeAtom);

    // Get the stored theme on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme;
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    // Store theme changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${isDarkMode ? 'dark' : ''} ${theme !== 'default' ? `theme-${theme}` : ''}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
} 
