import { configureStore } from '@reduxjs/toolkit'
import theme from './theme/reducer'

const store = configureStore({
    reducer: {
        theme,
    },
})

export default store
