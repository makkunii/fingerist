import styled from 'styled-components'
import { grid, flexbox } from 'styled-system'
import Box from './Box'

const Grid = styled(Box)`
    display: grid;
    grid-gap: ${({ gap }) => gap};
    ${flexbox}
    ${grid}
`

export default Grid
