import { useState } from 'react'
import { generateGuessWord, generateLetterNumbers } from '../api'
import { useGame as useGameHook } from '../state/game/hook'

const useGame = () => {
    const [
        gameSentence,
        gameWordLists,
        gameLetterNumbers,
        gameUserInputs,
        setGameUserInputs,
        setGameSentence,
        setGameLetterNumbers,
        setGameWordLists,
        resetGame,
    ] = useGameHook()

    const [isLoading, setIsLoading] = useState(true)

    const startGame = async () => {
        setIsLoading(true)

        const apiResult = await generateGuessWord()
        const letterIndexes = generateLetterNumbers(apiResult)

        setGameSentence(apiResult.sentence)
        setGameWordLists(apiResult.words_list)
        setGameLetterNumbers(letterIndexes)
        setIsLoading(false)
    }

    const restartGame = async () => {
        resetGame()
        startGame()
    }

    return {
        gameSentence,
        gameWordLists,
        gameLetterNumbers,
        restartGame,
        startGame,
        isLoading,
        gameUserInputs,
        setGameUserInputs,
        setGameLetterNumbers,
    }
}

export default useGame
