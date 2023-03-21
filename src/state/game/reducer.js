import {
    updateGuessSentence,
    updateHints,
    resetGame,
    updateGameLettersIndex,
} from './action'
import { createReducer } from '@reduxjs/toolkit'

export const initialState = {
    numbers: null,
    words_list: null,
    sentence: null,
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(
            updateGuessSentence,
            (state, { payload: { newGuessSentence } }) => {
                state.sentence = newGuessSentence
            },
        )
        .addCase(
            updateGameLettersIndex,
            (state, { payload: { newNumbers } }) => {
                state.numbers = newNumbers
            },
        )
        .addCase(updateHints, (state, { payload: { newHints } }) => {
            state.words_list = newHints
        })
        .addCase(resetGame, (state) => {
            state.sentence = null
            state.numbers = null
            state.sentence = null
        }),
)
