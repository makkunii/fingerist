import { useEffect } from 'react'
import { Box, Input } from '../../../components'
import useGame from '../../../hooks/useGame'

const GuessSentence = ({ ...props }) => {
    const {
        gameLetterNumbers,
        gameSentence,
        setGameUserInputs,
        gameUserInputs,
    } = useGame()

    const formatValues = () => {
        let snapshot = ''

        const inputs = document?.querySelectorAll('.data-sentence-field')

        inputs?.forEach((e) => (snapshot += `${e.value}`))

        setGameUserInputs({
            type: 'SENTENCE',
            userInputs: snapshot,
        })
    }

    return gameSentence?.split('')?.map((el, index) => {
        const propValue = gameLetterNumbers[el]?.isFilled ? { value: el } : {}

        return el === ' ' ? (
            <Box />
        ) : (
            <Input
                placeholder="?"
                number={gameLetterNumbers[el].index}
                height="40px"
                fontSize="10px"
                numberSize="10px"
                width="40px"
                key={`sentence-${index}`}
                className="data-sentence-field"
                onChange={() => formatValues()}
                disabled={gameLetterNumbers[el].isFilled}
                isSuccess={gameLetterNumbers[el].isFilled}
                {...propValue}
                {...props}
            />
        )
    })
}

export default GuessSentence
