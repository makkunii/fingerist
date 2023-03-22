import {
    updateGuessSentence,
    updateHints,
    resetGame,
    updateGameLettersIndex,
    updateUserInputs,
} from './action'
import { createReducer } from '@reduxjs/toolkit'

export const initialState = {
    numbers: null,
    words_list: null,
    sentence: null,
    userInputs: {
        sentence: null,
        wordlist: [],
    },
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(
            updateUserInputs,
            (state, { payload: { type, userInputs, index } }) => {
                if (type === 'SENTENCE') state.userInputs.sentence = userInputs
                if (type === 'WORDLIST')
                    state.userInputs.wordlist[index] = userInputs
            },
        )
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
            state.userInputs = {
                sentence: null,
                wordlist: [],
            }
        }),
)
