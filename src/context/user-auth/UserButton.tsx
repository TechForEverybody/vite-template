import React, { useState, MouseEvent } from 'react'
import { IconButton, Avatar, Menu, MenuItem } from '@mui/material'
import { useUser } from './UserContext'

const UserButton: React.FC = () => {
    const { user, logout } = useUser()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    if (!user) return null

    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()

    const handleClick = (e: MouseEvent<HTMLElement>) =>
        setAnchorEl(e.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const handleLogout = () => {
        logout()
        handleClose()
    }

    return (
        <>
            <IconButton onClick={handleClick} size="large" color="primary">
                <Avatar sx={{ bgcolor: 'primary.main', color: '#fff' }}>
                    {initials}
                </Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuItem onClick={handleLogout} sx={{ color: 'primary.main' }}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default UserButton
