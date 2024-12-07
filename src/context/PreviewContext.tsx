import React, { useEffect } from 'react'

export default function PreviewContextProvider(props: {
    children: React.ReactNode
}) {
    useEffect(() => {}, [])
    return <div>{props.children}</div>
}
