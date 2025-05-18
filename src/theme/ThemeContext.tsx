import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from './theme'
import { CssBaseline, GlobalStyles } from '@mui/material'

interface ThemeContextProps {
    toggleTheme: () => void
    mode: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextProps>({
    toggleTheme: () => {},
    mode: 'light',
})

export const useThemeContext = () => useContext(ThemeContext)

export default function CustomThemeProvider({
    children,
}: {
    children: ReactNode
}) {
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const storedMode =
            (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
        setMode(storedMode)
        if (storedMode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        const newMode = mode === 'light' ? 'dark' : 'light'
        setMode(newMode)
        localStorage.setItem('theme', newMode)
        if (newMode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
                <CssBaseline enableColorScheme />
                <GlobalStyles
                    styles={(theme) => ({
                        body: {
                            backgroundColor: theme.palette.background.default,
                            color: theme.palette.text.primary,
                            fontFamily: 'Rubik, sans-serif',
                            transition: 'background-color 0.3s, color 0.3s',
                        },
                        a: {
                            textDecoration: 'none',
                            color: 'inherit',
                        },
                    })}
                />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
