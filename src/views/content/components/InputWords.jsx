import { Input } from '../../../components'
import useGame from '../../../hooks/useGame'

const InputWords = ({ word, HintIndex, ...props }) => {
    const { gameLetterNumbers, setGameUserInputs } = useGame()

    const formatValues = () => {
        let snapshot = ''

        const inputs = document?.querySelectorAll(
            `.data-hint-field-${HintIndex}`,
        )

        inputs?.forEach((e) => (snapshot += `${e.value}`))

        setGameUserInputs({
            type: 'WORDLIST',
            index: HintIndex,
            userInputs: snapshot,
        })
    }

    // const checkWord = () => {
    //     if(userInputs.userInput != word) {
    //         console.log("Wrong")
    //         setwordStatus(false);

    //     }
    //     else {
    //         console.log("Correct")
    //         setwordStatus(true);
    //     }

    // }

    // useEffect(() => {
    //     checkWord()
    // }, [userInputs])

    return word?.split('').map((el, i) => {
        return (
            <Input
                placeholder="?"
                number={gameLetterNumbers[el].index}
                height="40px"
                fontSize="10px"
                numberSize="10px"
                key={`hint-field-${i}`}
                className={`data-hint-field-${HintIndex}`}
                onChange={() => formatValues()}
                {...props}
            />
        )
    })
}

export default InputWords
