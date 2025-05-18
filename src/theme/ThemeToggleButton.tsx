import { IconButton, Tooltip } from '@mui/material'
import { Moon, Sun } from 'lucide-react'
import { useThemeContext } from './ThemeContext'

export default function ThemeToggleButton() {
    const { toggleTheme, mode } = useThemeContext()

    return (
        <Tooltip title="Toggle Theme">
            <IconButton onClick={toggleTheme} color="primary">
                {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </IconButton>
        </Tooltip>
    )
}
