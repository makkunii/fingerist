import { Input } from '../../../components'

const InputWords = ({ word, roundsNumbers, ...props }) => {
    return (
        <>
            {word?.split('').map((el, index) => {
                return (
                    <Input
                        placeholder="?"
                        number={roundsNumbers[el]}
                        height="40px"
                        fontSize="10px"
                        numberSize="10px"
                        key={`hint-field-${index}`}
                        {...props}
                    />
                )
            })}
        </>
    )
}

export default InputWords
