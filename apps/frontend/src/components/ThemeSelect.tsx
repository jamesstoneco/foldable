import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Check, Palette } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const themes = [
    { value: "default", label: "Default" },
    { value: "stone", label: "Stone" },
    { value: "zinc", label: "Zinc" },
    { value: "neutral", label: "Neutral" },
    { value: "gray", label: "Gray" },
    { value: "slate", label: "Slate" },
    { value: "blue", label: "Blue" },
]

export function ThemeSelect() {
    const { resolvedTheme: mode, theme, setTheme } = useTheme()

    // Handle theme change
    const handleThemeChange = (selectedTheme: string) => {
        // Keep the current light/dark mode while changing the color theme
        const root = document.documentElement
        root.classList.forEach((className) => {
            if (className.match(/^theme-.*/)) {
                root.classList.remove(className)
            }
        })
        if (selectedTheme !== 'default') {
            root.classList.add(`theme-${selectedTheme}`)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline" className="w-28 justify-between">
                    <Palette className="h-4 w-4 mr-2" />
                    {themes.find(t => t.value === theme)?.label || "Theme"}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {themes.map(({ value, label }) => (
                    <DropdownMenuItem
                        key={value}
                        onClick={() => handleThemeChange(value)}
                    >
                        <Check
                            className={`mr-2 h-4 w-4 ${theme === value ? "opacity-100" : "opacity-0"}`}
                        />
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
} 
