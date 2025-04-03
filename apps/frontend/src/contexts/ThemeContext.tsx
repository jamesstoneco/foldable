import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    isUsingSystemPreference: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isUsingSystemPreference, setIsUsingSystemPreference] = useState(() => {
        return localStorage.getItem("darkMode") === null;
    });

    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === "undefined") return false;

        const savedPreference = localStorage.getItem("darkMode");
        if (savedPreference !== null) {
            return savedPreference === "true";
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        // Listen for system preference changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            if (isUsingSystemPreference) {
                setIsDarkMode(e.matches);
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [isUsingSystemPreference]);

    useEffect(() => {
        // Update document class
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Save preference to localStorage
        if (isUsingSystemPreference) {
            localStorage.removeItem("darkMode");
        } else {
            localStorage.setItem("darkMode", isDarkMode.toString());
        }
    }, [isDarkMode, isUsingSystemPreference]);

    const toggleDarkMode = () => {
        if (isUsingSystemPreference) {
            // Switch to manual mode with opposite of current system preference
            setIsUsingSystemPreference(false);
            setIsDarkMode(!isDarkMode);
        } else {
            // Switch back to system preference
            setIsUsingSystemPreference(true);
            setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, isUsingSystemPreference }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}; 
