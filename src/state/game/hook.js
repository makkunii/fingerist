import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateGuessSentence as updateGuessSentenceAction,
    updateHints as updateHintsAction,
    resetGame as resetGameAction,
    updateGameLettersIndex as updateGameLettersIndexAction,
} from './action'

export const useGame = () => {
    const dispatch = useDispatch()

    const gameSentence = useSelector((state) => state.game.sentence)
    const gameWordLists = useSelector((state) => state.game.words_list)
    const gameLetterNumbers = useSelector((state) => state.game.numbers)

    const setGameSentence = useCallback(
        (newGuessSentence) => {
            dispatch(updateGuessSentenceAction({ newGuessSentence }))
        },
        [dispatch],
    )

    const setGameLetterNumbers = useCallback(
        (newNumbers) => {
            dispatch(updateGameLettersIndexAction({ newNumbers }))
        },
        [dispatch],
    )

    const setGameWordLists = useCallback(
        (newHints) => {
            dispatch(updateHintsAction({ newHints }))
        },
        [dispatch],
    )

    const resetGame = useCallback(() => {
        dispatch(resetGameAction())
    }, [dispatch])

    return [
        gameSentence,
        gameWordLists,
        gameLetterNumbers,
        setGameSentence,
        setGameLetterNumbers,
        setGameWordLists,
        resetGame,
    ]
}
