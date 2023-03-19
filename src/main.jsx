import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Providers from './Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Providers>
        <App />
    </Providers>,
)
