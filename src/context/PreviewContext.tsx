import React, { useEffect, useState } from 'react'
import WebsiteLoader from '../components/loaders/WebsiteLoader'
export default function PreviewContextProvider(props: {
    children: React.ReactNode
}) {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, [])
    if (isLoading) return <WebsiteLoader />
    return <div>{props.children}</div>
}
