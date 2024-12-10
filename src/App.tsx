import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import ConfiguredThemeProvider from './theme/ThemeProvider'
import UserContextProvider from './context/UserContext'
import SettingsContextProvider from './context/SettingsContext'
import PreviewContextProvider from './context/PreviewContext'
import Router from './routes/Router'

function App() {
    return (
        <HelmetProvider>
            <SettingsContextProvider>
                <UserContextProvider>
                    <ConfiguredThemeProvider>
                        <StyledEngineProvider injectFirst>
                            <PreviewContextProvider>
                                <BrowserRouter>
                                    <Router />
                                </BrowserRouter>
                            </PreviewContextProvider>
                        </StyledEngineProvider>
                    </ConfiguredThemeProvider>
                </UserContextProvider>
            </SettingsContextProvider>
        </HelmetProvider>
    )
}

export default App
