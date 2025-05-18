import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/home'
import NotFound from '@/pages/NotFound'

export const routes = {
    home: {
        path: '/',
        element: (<HomePage />),
    },
    404: {
        path: '*',
        element: (<NotFound />),
    },
}

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {Object.values(routes).map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
