import { Box, Input } from '../../../components'

const GuessSentence = ({ sentence, roundsNumbers, ...props }) => {
    return sentence?.split('')?.map((el, index) => {
        return el === ' ' ? (
            <Box />
        ) : (
            <Input
                defaultValue=""
                placeholder="?"
                number={roundsNumbers[el].index}
                height="40px"
                fontSize="10px"
                numberSize="10px"
                width="40px"
                key={`sentence-${index}`}
                {...props}
            />
        )
    })
}

export default GuessSentence
