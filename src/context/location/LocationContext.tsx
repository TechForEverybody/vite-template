import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from 'react'
import LocationContextLoading from './LocationContextLoading'

// 1. Define the shape of the data returned by ipwho.is
export interface FlagInfo {
    img: string
    emoji: string
    emoji_unicode: string
}

export interface ConnectionInfo {
    asn: number
    org: string
    isp: string
    domain: string
}

export interface TimezoneInfo {
    id: string
    abbr: string
    is_dst: boolean
    offset: number
    utc: string
    current_time: string
}

export interface LocationData {
    ip: string
    success: boolean
    type: string
    continent: string
    continent_code: string
    country: string
    country_code: string
    region: string
    region_code: string
    city: string
    latitude: number
    longitude: number
    is_eu: boolean
    postal: string
    calling_code: string
    capital: string
    borders: string
    flag: FlagInfo
    connection: ConnectionInfo
    timezone: TimezoneInfo
}

// 2. Create a default initial value for the context
const defaultLocation: LocationData = {
    ip: '',
    success: false,
    type: '',
    continent: '',
    continent_code: '',
    country: '',
    country_code: '',
    region: '',
    region_code: '',
    city: '',
    latitude: 0,
    longitude: 0,
    is_eu: false,
    postal: '',
    calling_code: '',
    capital: '',
    borders: '',
    flag: { img: '', emoji: '', emoji_unicode: '' },
    connection: { asn: 0, org: '', isp: '', domain: '' },
    timezone: {
        id: '',
        abbr: '',
        is_dst: false,
        offset: 0,
        utc: '',
        current_time: '',
    },
}

// 3. Define context types
interface LocationContextType {
    location: LocationData
    loading: boolean
    error: string | null
}

// 4. Create the context
const LocationContext = createContext<LocationContextType>({
    location: defaultLocation,
    loading: true,
    error: null,
})

// 5. Provide a hook for easy consumption
export const useUserLocation = (): LocationContextType => {
    const context = useContext(LocationContext)
    if (!context) {
        throw new Error(
            'useUserLocation must be used within a LocationProvider'
        )
    }
    return context
}

// 6. Create the provider component
const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [location, setLocation] = useState<LocationData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch('https://ipwho.is/')
                const data: LocationData = await response.json()
                setLocation(data)
            } catch (err: any) {
                try {
                    const response = await fetch('https://api.country.is/')
                    const data = (await response.json()) as {
                        ip: string
                        country: string
                    }
                    setLocation({
                        ...defaultLocation,
                        ip: data.ip,
                        country_code: data.country,
                        success: true,
                    })
                } catch (error: any) {
                    setError(error.message || 'Failed to fetch location data')
                    setLocation(defaultLocation)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchLocation()
    }, [])
    if (!location) {
        return <LocationContextLoading />
    }
    return (
        <LocationContext.Provider value={{ location, loading, error }}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider
