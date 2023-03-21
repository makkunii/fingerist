import { createAction } from '@reduxjs/toolkit'

export const updateGuessSentence = createAction('game/updateGuessSentence')

export const updateHints = createAction('game/updateHints')

export const updateGameLettersIndex = createAction(
    'game/updateGameLettersIndex',
)

export const resetGame = createAction('game/resetGame')
