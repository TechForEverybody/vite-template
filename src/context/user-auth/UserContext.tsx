import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react'
import { jwtDecode } from 'jwt-decode'
import { useDevice } from '../device/DeviceContext'
import { useUserLocation } from '../location/LocationContext'
import MainConfigs from '@/node.config'

// 1. Define the shape of user information
export type LoginType =
    | 'google'
    | 'microsoft'
    | 'apple'
    | 'password'
    | 'otp'
    | 'register'

export interface UserData {
    user_id: string
    email: string
    mobile: string
    country_code?: string
    name: string
    role: string
    gender: string
    school_id: string
    token: string
    login_type: LoginType
}

// 2. Response type from verify API
interface VerifyResponse {
    status: boolean
    message: string
    data?: UserData | null
}

// 3. Context type including login and logout methods
interface UserContextType {
    user: UserData | null
    login: (data: UserData) => void
    logout: () => void
}

// 4. Create context
const UserContext = createContext<UserContextType>({
    user: null,
    login: () => {},
    logout: () => {},
})

// 5. Hook for consuming the context
export const useUser = (): UserContextType => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

// 6. Provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<UserData | null>(null)
    const { device } = useDevice()
    const { location } = useUserLocation()
    const logout = async () => {
        const saved = localStorage.getItem('user-data-with-token')
        if (!saved) return
        const parsed: UserData = JSON.parse(saved)
        await fetch(`${MainConfigs.self.backend}/api/v1/logout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: parsed.token,
                user_id: parsed.user_id,
            }),
        })
        setUser(null)
        localStorage.removeItem('user-data-with-token')
        localStorage.removeItem('authToken')
    }

    // Load and verify saved user on mount
    async function handleUser() {
        const saved = localStorage.getItem('user-data-with-token')
        if (!saved) return
        try {
            const parsed: UserData = JSON.parse(saved)
            console.log('Parsed user data:', parsed)
            const decoded = jwtDecode(parsed.token) as any
            const userId = decoded.user_id || parsed.user_id
            console.log({
                token: parsed.token,
                user_id: userId,
                device_id: device.device_id,
                ip_address: location.ip,
            })
            await fetch(`${MainConfigs.self.backend}/api/v1/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token: parsed.token,
                    user_id: userId,
                    device_id: device.device_id,
                    ip_address: location.ip,
                }),
            })
                .then((res) => res.json())
                .then((resData: VerifyResponse) => {
                    console.log(resData)
                    if (resData.status && resData.data) {
                        setUser(parsed)
                    } else {
                        logout()
                    }
                })
                .catch(() => logout())
        } catch {
            localStorage.removeItem('user-data-with-token')
            localStorage.removeItem('authToken')
        }
    }
    useEffect(() => {
        handleUser()
    }, [device, location])

    const login = (data: UserData) => {
        localStorage.setItem('user-data-with-token', JSON.stringify(data))
        localStorage.setItem('authToken', data.token)
        setUser(data)
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}
