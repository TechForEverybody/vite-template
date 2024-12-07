import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { routes } from './routes'
import HomePage from '@/pages/home'

type Props = {}

function Router({ }: Props) {
    return (
        <Routes>
            <Route path={routes.ROOT} element={<HomePage />} />
        </Routes>
    )
}

export default Router
