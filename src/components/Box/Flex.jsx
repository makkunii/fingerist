import styled from 'styled-components'
import { flexbox } from 'styled-system'
import Box from './Box'

const Flex = styled(Box)`
    display: flex;
    gap: ${({ gap }) => gap};
    row-gap: ${({ rowGap }) => rowGap};
    column-gap: ${({ columnGap }) => columnGap};
    ${flexbox}
`

export default Flex
