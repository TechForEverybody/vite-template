import React, { useEffect } from 'react'
import { useUser } from './UserContext'
import { useNavigate } from 'react-router-dom'

type Props = {
    children?: React.ReactNode
}

function ProtectedRoute({ children }: Props) {
    const user = useUser()
    const isLoggedIn = user.user !== null && user.user !== undefined
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])
    return <>{isLoggedIn ? children : null}</>
}

export default ProtectedRoute
