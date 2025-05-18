import CustomThemeProvider from './theme/ThemeContext'
import { ToastContainer } from 'react-toastify'
import LocationProvider from './context/location/LocationContext'
import DeviceProvider from './context/device/DeviceContext'
import { UserProvider } from './context/user-auth/UserContext'
import Router from './router/Router'
import './App.css'

function App() {
    return (
        <DeviceProvider>
            <LocationProvider>
                <UserProvider>
                    <CustomThemeProvider>
                        <ToastContainer position="top-right" autoClose={3000} />
                        <Router />
                    </CustomThemeProvider>
                </UserProvider>
            </LocationProvider>
        </DeviceProvider>
    )
}

export default App
