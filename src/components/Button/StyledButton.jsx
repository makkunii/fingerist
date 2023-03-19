import styled from 'styled-components'
import { space, layout, variant } from 'styled-system'
import { SCALEVARIANTS } from './config'

const getDisabledStyles = ({ $isLoading }) => {
    if ($isLoading === true) {
        return `
      &:disabled {
        cursor: not-allowed;
      }
    `
    }

    return `
    &:disabled {
      background-color: transparent !important;
      border-color: #454545;
      border: solid 2px;
      box-shadow: none;
      color: #454545;
      cursor: not-allowed;
    }
  `
}

const getOpacity = ({ $isLoading = false }) => {
    return $isLoading ? '.5' : '1'
}

const StyledButton = styled.button`
    align-items: center;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: ${({ fontSize }) => fontSize || '16px'};
    font-weight: 600;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: ${getOpacity};
    outline: 0;
    transition: background-color 0.2s, opacity 0.2s;
    ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
    ${({ color }) => `color: ${color};`}

    &:hover:not(:disabled):not(:active) {
        opacity: 0.65;
    }

    &:active:not(:disabled) {
        opacity: 0.85;
        transform: translateY(1px);
        box-shadow: none;
    }
    border-radius: ${({ borderRadius }) => borderRadius || '11px'};

    ${variant({
        prop: 'scale',
        variants: SCALEVARIANTS,
    })}
    ${getDisabledStyles}
  ${layout}
  ${space}
`

export default StyledButton
