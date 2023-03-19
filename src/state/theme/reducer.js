import { toggleTheme } from './action'
import { createReducer } from '@reduxjs/toolkit'

export const initialState = {
    isDark: false,
}

export default createReducer(initialState, (builder) =>
    builder.addCase(toggleTheme, (state) => {
        state.isDark = !state.isDark
    }),
)
