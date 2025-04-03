import { atom } from "jotai";

type DarkModeState = {
    isDarkMode: boolean;
    isUsingSystemPreference: boolean;
};

const getSystemPreference = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getInitialState = (): DarkModeState => {
    if (typeof window === "undefined") {
        return { isDarkMode: false, isUsingSystemPreference: true };
    }

    const savedPreference = localStorage.getItem("darkMode");
    if (savedPreference !== null) {
        return {
            isDarkMode: savedPreference === "true",
            isUsingSystemPreference: false,
        };
    }

    return {
        isDarkMode: getSystemPreference(),
        isUsingSystemPreference: true,
    };
};

// Base atom for the state
const baseDarkModeAtom = atom<DarkModeState>(getInitialState());

// Derived atom for the toggle action
export const darkModeAtom = atom(
    (get) => {
        const state = get(baseDarkModeAtom);
        if (state.isUsingSystemPreference) {
            return {
                ...state,
                isDarkMode: getSystemPreference(),
            };
        }
        return state;
    },
    (get, set) => {
        const currentState = get(baseDarkModeAtom);

        if (currentState.isUsingSystemPreference) {
            // Switch to manual mode with opposite of current system preference
            const newDarkMode = !getSystemPreference();
            set(baseDarkModeAtom, {
                isDarkMode: newDarkMode,
                isUsingSystemPreference: false,
            });
            localStorage.setItem("darkMode", newDarkMode.toString());
        } else {
            // Switch back to system preference
            const systemPreference = getSystemPreference();
            set(baseDarkModeAtom, {
                isDarkMode: systemPreference,
                isUsingSystemPreference: true,
            });
            localStorage.removeItem("darkMode");
        }
    }
); 
