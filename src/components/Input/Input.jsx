import CountUp from 'react-countup'
import { Box, Flex } from '../Box'
import { Text } from '../Text'
import StyledInputs from './StyledInputs'

const Input = ({
    fontSize,
    isSuccess,
    number = 0,
    numberSize = '.8rem',
    numberFontWeight = 'bolder',
    ...props
}) => {
    const { padding, width, ...rest } = props

    return (
        <Box width={width || padding || 10 * 5}>
            <StyledInputs
                isSuccess={isSuccess}
                fontSize={fontSize}
                {...rest}
                maxLength="1"
            />
            <Text
                textAlign="center"
                bold
                color={isSuccess && '#0BC375'}
                mt="10px"
            >
                <CountUp start={0} end={number} />
            </Text>
        </Box>
    )
}

export default Input