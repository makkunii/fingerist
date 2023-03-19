import styled, { keyframes } from 'styled-components'
import { Box } from '../../../components'

const startedFromTop = keyframes`
    from {
        padding-top: 0px;
    }
    to   {
        padding-top: 10px;
    }
`

const BouncingInputBox = styled(Box)`
    animation: ${startedFromTop} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite
        alternate;
    animation-delay: ${({ delay }) => delay || 0}s;
    // padding-top:10px;
`

export default BouncingInputBox
