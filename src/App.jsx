import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Landing from './views/landing/'
import Content from './views/content'

const router = createBrowserRouter([
    {
      path: "/landing",
      element: <Landing />,
    },
    {
        path: "/content",
        element: <Content />,
      },
  ]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
