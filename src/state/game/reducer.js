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
                if (type === 'SENTENCE') {
                    state.userInputs.sentence = userInputs

                    if (
                        userInputs?.toUpperCase() ===
                        state.sentence?.replaceAll(' ', '')?.toUpperCase()
                    ) {
                        console.log('GAME END!')
                        let snapshot = {}

                        for (const key in state.numbers) {
                            snapshot[key] = {
                                ...state.numbers[key],
                                isFilled: true,
                            }
                        }

                        state.numbers = snapshot
                    }
                }
                if (type === 'WORDLIST') {
                    state.userInputs.wordlist[index] = userInputs

                    if (
                        userInputs?.toUpperCase() ===
                        state.words_list[index]?.word
                            ?.replaceAll(' ', '')
                            ?.toUpperCase()
                    ) {
                        let snapshot = {}
                        let splittedWord = userInputs?.toUpperCase()?.split('')

                        for (const key in state.numbers) {
                            let isFilledValue = false

                            splittedWord.forEach((e) =>
                                e === key ? (isFilledValue = true) : '',
                            )
                            snapshot[key] = {
                                ...state.numbers[key],
                                isFilled:
                                    state.numbers[key]?.isFilled ||
                                    isFilledValue,
                            }
                        }

                        state.numbers = snapshot
                    }
                }
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
