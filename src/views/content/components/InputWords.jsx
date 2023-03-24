import { Input } from '../../../components'
import useGame from '../../../hooks/useGame'

const InputWords = ({ word, HintIndex, ...props }) => {
    const { gameLetterNumbers, setGameUserInputs } = useGame()

    const formatValues = (evt) => {
        let snapshot = ''

        const inputs = document?.querySelectorAll(
            `.data-hint-field-${HintIndex}`,
        )

        inputs?.forEach((e) => (snapshot += `${e.value}`))

        const indexOfTargetInput = Array.from(inputs).indexOf(evt.target)

        const switchFocus = (i) => {
            if (i + 1 < inputs.length) {
                if (evt.target.value) {
                    const nextInput = inputs[i + 1]

                    if (nextInput.disabled) switchFocus(i + 1)
                    else inputs[i + 1].focus()
                }
            }
        }

        switchFocus(indexOfTargetInput)

        setGameUserInputs({
            type: 'WORDLIST',
            index: HintIndex,
            userInputs: snapshot,
        })
    }

    return word?.split('').map((el, i) => {
        const propValue = gameLetterNumbers[el]?.isFilled ? { value: el } : {}

        return (
            <Input
                placeholder="?"
                number={gameLetterNumbers[el].index}
                height="40px"
                fontSize="10px"
                numberSize="10px"
                key={`hint-field-${i}`}
                className={`data-hint-field-${HintIndex}`}
                onChange={(evt) => {
                    formatValues(evt)
                }}
                disabled={gameLetterNumbers[el].isFilled}
                isSuccess={gameLetterNumbers[el].isFilled}
                maxLength="1"
                {...propValue}
                {...props}
            />
        )
    })
}

export default InputWords
