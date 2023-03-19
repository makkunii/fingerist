import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './views/landing/'
import Content from './views/content'
import GlobalStyle from './theme/global.style'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/content',
        element: <Content />,
    },
])

const App = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    )
}

export default App
