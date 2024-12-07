export type AuthUserDataType = {
    id: string
    name: string
    contact: {
        email?: string
        phone?: string
    }
    role: string
    token: string
    avatar: string
}

export type UserLocalSettingsType = {
    themeMode: 'light' | 'dark'
    language: string
}
