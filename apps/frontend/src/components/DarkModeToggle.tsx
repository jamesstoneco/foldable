import { useAtomValue, useSetAtom } from "jotai";
import { darkModeAtom } from "@/atoms/theme";

export const DarkModeToggle = () => {
    const { isDarkMode, isUsingSystemPreference } = useAtomValue(darkModeAtom);
    const toggleDarkMode = useSetAtom(darkModeAtom);

    const getIcon = () => {
        if (isUsingSystemPreference) {
            return isDarkMode ? "🌙 (System)" : "🌞 (System)";
        }
        return isDarkMode ? "🌙 (User)" : "🌞 (User)";
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-24 text-center"
            aria-label={isUsingSystemPreference ? "Toggle dark mode (System)" : "Toggle dark mode (User)"}
        >
            {getIcon()}
        </button>
    );
}; 
