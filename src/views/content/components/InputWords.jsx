import { userState, useState } from 'react'
import { Input } from '../../../components'

const InputWords = ({ word, roundsNumbers, index, ...props }) => {
    const [ userInputs, setUserInputs] = useState([])

    const formatValues = (id) => {
        let snapshot = []

        const inputs = document?.querySelectorAll(`.data-hint-field-${id}`)
        
        inputs?.forEach( e => snapshot += `${e.value}`)

        setUserInputs({
            index : id,
            userInputs : snapshot
        })

    }

    
    return (
        <>
            {word?.split('').map((el, i) => {
                return (
                    <Input
                        placeholder="?"
                        number={roundsNumbers[el].index}
                        height="40px"
                        fontSize="10px"
                        numberSize="10px"
                        key={`hint-field-${i}`}
                        className={`data-hint-field-${index}`}
                        onChange={(evt) => {
                            formatValues(index)
                        }}
                        {...props}
                    />
                )
            })}
        </>
    )
}

const checkAnswer = (event, index) => {
    console.log(event + index)
}

export default InputWords
