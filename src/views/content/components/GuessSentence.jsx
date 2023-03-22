import { Box, Input } from '../../../components'
import useGame from '../../../hooks/useGame'

const GuessSentence = ({ ...props }) => {
    const { gameLetterNumbers, gameSentence, setGameUserInputs } = useGame()

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
        return el === ' ' ? (
            <Box />
        ) : (
            <Input
                defaultValue=""
                placeholder="?"
                number={gameLetterNumbers[el].index}
                height="40px"
                fontSize="10px"
                numberSize="10px"
                width="40px"
                key={`sentence-${index}`}
                className="data-sentence-field"
                onChange={() => formatValues()}
                {...props}
            />
        )
    })
}

export default GuessSentence
