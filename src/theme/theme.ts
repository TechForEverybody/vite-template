import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#047857', // Emerald 700 (Dark Green)
            contrastText: '#FFF',
            light: '#6ee7b7', // Emerald 300 (Light Green)
            dark: '#065f46', // Emerald 800 (Dark Green)
        },
        secondary: {
            main: '#ec4899', // Pink 500,
            contrastText: '#FFF',
            light: '#9013fe', // Pink 300
            dark: '#db2777', // Pink 700
        },
        success: {
            main: '#16a34a', // Green 600
        },
        warning: {
            main: '#f97316', // Orange 500
        },
        error: {
            main: '#dc2626', // Red 600
        },
        info: {
            main: '#0ea5e9', // Sky Blue 500
        },
        tonalOffset: 0.2,
        contrastThreshold: 3,
        text: {
            primary: '#111827', // Cool Gray 900
            secondary: '#374151', // Cool Gray 700
            disabled: '#6b7280', // Cool Gray 500
        },
        action: {
            active: '#374151', // Cool Gray 700
            hover: '#f3f4f6', // Cool Gray 100
            selected: '#e5e7eb', // Cool Gray 200
            disabled: '#d1d5db', // Cool Gray 300
            disabledBackground: '#f3f4f6', // Cool Gray 100
            focus: '#e5e7eb', // Cool Gray 200
        },
        common: {
            black: '#000000',
            white: '#ffffff',
        },
        grey: {
            50: '#f9fafb', // Cool Gray 50
            100: '#f3f4f6', // Cool Gray 100
            200: '#e5e7eb', // Cool Gray 200
            300: '#d1d5db', // Cool Gray 300
            400: '#9ca3af', // Cool Gray 400
            500: '#6b7280', // Cool Gray 500
            600: '#4b5563', // Cool Gray 600
            700: '#374151', // Cool Gray 700
            800: '#1f2937', // Cool Gray 800
            900: '#111827', // Cool Gray 900
        },
        background: {
            default: '#f3f4f6', // Cool Gray 100
            paper: '#ffffff', // Pure white cards
        },
        divider: '#e5e7eb', // Cool Gray 200
    },
    typography: {
        fontFamily: 'Inter, sans-serif', // Modern font
        button: {
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 5, // Softer corner radius
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#065f46', // Emerald 800 (Dark Green)
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f472b6', // Pink 400
            light: '#9013fe', // Pink 300
            dark: '#db2777', // Pink 700
        },
        success: {
            main: '#22c55e', // Green 500
        },
        warning: {
            main: '#fb923c', // Orange 400
        },
        error: {
            main: '#ef4444', // Red 500
        },
        info: {
            main: '#38bdf8', // Sky Blue 400
        },
        tonalOffset: 0.2,
        contrastThreshold: 3,

        text: {
            primary: '#111827', // Cool Gray 900
            secondary: '#374151', // Cool Gray 700
            disabled: '#6b7280', // Cool Gray 500
        },
        action: {
            active: '#374151', // Cool Gray 700
            hover: '#f3f4f6', // Cool Gray 100
            selected: '#e5e7eb', // Cool Gray 200
            disabled: '#d1d5db', // Cool Gray 300
            disabledBackground: '#f3f4f6', // Cool Gray 100
            focus: '#e5e7eb', // Cool Gray 200
        },
        common: {
            black: '#000000',
            white: '#ffffff',
        },
        grey: {
            50: '#f9fafb', // Cool Gray 50
            100: '#f3f4f6', // Cool Gray 100
            200: '#e5e7eb', // Cool Gray 200
            300: '#d1d5db', // Cool Gray 300
            400: '#9ca3af', // Cool Gray 400
            500: '#6b7280', // Cool Gray 500
            600: '#4b5563', // Cool Gray 600
            700: '#374151', // Cool Gray 700
            800: '#1f2937', // Cool Gray 800
            900: '#111827', // Cool Gray 900
        },
        background: {
            default: '#0f172a', // The Deep Tech Navy you prefer
            paper: '#1e293b', // Darker blue-gray cards
        },
        divider: '#334155', // Blue-gray divider
    },
    typography: {
        fontFamily: 'Inter, sans-serif', // Modern font for a clean look
        button: {
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 5, // Softer corner radius
    },
})
