import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Check, Moon, Sun, Monitor } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const modes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
]

export function ModeSelect() {
    const { resolvedTheme, theme: mode, setTheme: setMode } = useTheme()

    const currentMode = modes.find(m => m.value === mode)
    const Icon = currentMode?.icon || Sun

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline" className="w-28 justify-between">
                    <Icon className="h-4 w-4 mr-2" />
                    {currentMode?.label || "Mode"}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {modes.map(({ value, label, icon: Icon }) => (
                    <DropdownMenuItem
                        key={value}
                        onClick={() => setMode(value)}
                    >
                        <Check
                            className={`mr-2 h-4 w-4 ${mode === value ? "opacity-100" : "opacity-0"}`}
                        />
                        <Icon className="h-4 w-4 mr-2" />
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
} 
