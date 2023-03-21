import styled from 'styled-components'
import { SCALES } from './config'

export const getBoxShadow = ({ isSuccess = false }) => {
    if (isSuccess) {
        return '0px 0px 0px 1px #0BC375, 0px 0px 0px 4px rgba(11, 195, 117, 0.2)'
    }

    return 'none'
}

const getHeight = ({ scale = SCALES.MD }) => {
    switch (scale) {
        case SCALES.SM:
            return '48px'
        case SCALES.LG:
            return '68px'
        case SCALES.MD:
        default:
            return '58px'
    }
}

const StyledInputs = styled.input`
    background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
    border: 0;
    border-radius: 10px;
    text-align: center;
    box-shadow: ${getBoxShadow};
    color: ${({ textColor, isSuccess }) =>
        isSuccess ? '#0BC375' : textColor || 'black'};
    display: block;
    height: ${({ height, scale }) => height || getHeight(scale || SCALES.MD)};
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    outline: none;
    padding: ${({ padding }) => padding || '5px'};
    width: ${({ padding, width }) => width || `${(padding || 7) * 5}`}px;

    ${({ transparent }) =>
        transparent &&
        `
        background: transparent;
        box-shadow: none;
        border: none;
        outline: none;
        &:focus:not(:disabled) {
            outline: none;
            box-shadow: none;
            border: none;
        }
    `}
`

StyledInputs.defaultProps = {
    fontSize: '20px',
    isSuccess: false,
}

export default StyledInputs
