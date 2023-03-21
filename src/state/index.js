import { configureStore } from '@reduxjs/toolkit'
import theme from './theme/reducer'
import game from './game/reducer'

const store = configureStore({
    reducer: {
        theme,
        game,
    },
})

export default store
