import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Providers from './Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Providers>
        <App />
    </Providers>,
)
