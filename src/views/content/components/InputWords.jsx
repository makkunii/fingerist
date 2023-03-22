import { userState, useState } from 'react'
import React, { useEffect } from 'react'
import { Input } from '../../../components'

const InputWords = ({ word, roundsNumbers, index, ...props }) => {
    const [ userInputs, setUserInputs] = useState([])
    const [ wordStatus, setwordStatus] = useState(false)


    const formatValues = (id) => {
        let snapshot = []

        const inputs = document?.querySelectorAll(`.data-hint-field-${id}`)
        
        inputs?.forEach( e => snapshot += `${e.value}`)

        const record = {index : id, userInput : snapshot}

        setUserInputs(record)
        
    }
    const checkWord = () => {
        if(userInputs.userInput != word) {
            console.log("Wrong")
            setwordStatus(false);

        } 
        else {
            console.log("Correct")
            setwordStatus(true);
        }

    }

    useEffect(() => {
        checkWord()
    }, [userInputs])
   
    
    
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
                        isSuccess={wordStatus}
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
