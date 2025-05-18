import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import DeviceContextLoading from './DeviceContextLoading'

// 1. Define the shape of device information
export type DevicePlatform =
    | 'web'
    | 'mobile'
    | 'desktop'
    | 'tablet'
    | 'ios'
    | 'android'
    | 'ipad'

export interface DeviceData {
    device_id: string
    device_name: string
    platform: DevicePlatform
    userAgent: string
    vendor: string
    language: string
    screenWidth: number
    screenHeight: number
    pixelRatio: number
    deviceMemory?: number
    hardwareConcurrency?: number
}

// 2. Default initial values
const defaultDeviceData: DeviceData = {
    device_id: '',
    device_name: 'Unknown Device',
    platform: 'web',
    userAgent: '',
    vendor: '',
    language: '',
    screenWidth: 0,
    screenHeight: 0,
    pixelRatio: 1,
}

// 3. Context type
interface DeviceContextType {
    device: DeviceData
}

// 4. Create Context
const DeviceContext = createContext<DeviceContextType>({
    device: defaultDeviceData,
})

// 5. Hook for consuming the context
export const useDevice = (): DeviceContextType => {
    const context = useContext(DeviceContext)
    if (!context) {
        throw new Error('useDevice must be used within a DeviceProvider')
    }
    return context
}

// 6. Provider component
const DeviceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [device, setDevice] = useState<DeviceData | null>(null)

    useEffect(() => {
        // Generate or retrieve a persistent unique ID
        let deviceId = localStorage.getItem('device_id')
        if (!deviceId) {
            deviceId = uuidv4()
            localStorage.setItem('device_id', deviceId)
        }

        const ua = navigator.userAgent
        const vendor = navigator.vendor || ''
        const language = navigator.language
        const screenWidth = window.screen.width
        const screenHeight = window.screen.height
        const pixelRatio = window.devicePixelRatio || 1
        const deviceMemory = (navigator as any).deviceMemory
        const hardwareConcurrency = navigator.hardwareConcurrency

        // Platform detection
        let platform: DevicePlatform = 'web'

        if (/iPad/.test(ua)) {
            platform = 'ipad'
        } else if (/iPhone|iPod/.test(ua)) {
            platform = 'ios'
        } else if (/Android/.test(ua)) {
            platform = 'android'
        } else if (/Mobile/.test(ua)) {
            platform = 'mobile'
        } else if (/Tablet|iPad/.test(ua)) {
            platform = 'tablet'
        } else {
            platform = 'desktop'
        }

        // Device name (from hints or fallback)
        const deviceName =
            (navigator as any).userAgentData?.model ||
            `${vendor} ${platform}` ||
            ua

        setDevice({
            device_id: deviceId,
            device_name: deviceName,
            platform,
            userAgent: ua,
            vendor,
            language,
            screenWidth,
            screenHeight,
            pixelRatio,
            deviceMemory,
            hardwareConcurrency,
        })
    }, [])
    if (!device) {
        return <DeviceContextLoading />
    }
    return (
        <DeviceContext.Provider value={{ device }}>
            {children}
        </DeviceContext.Provider>
    )
}

export default DeviceProvider
