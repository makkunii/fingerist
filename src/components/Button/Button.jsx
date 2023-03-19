import React, { cloneElement, isValidElement } from 'react'
import StyledButton from './StyledButton'
import { SCALES } from './config'

const Button = ({
    isLoading = false,
    external = false,
    scale = SCALES.MD,
    disabled = false,
    ...props
}) => {
    const { startIcon, endIcon, children, ...rest } = props

    const getExternalLinkProps = () => ({
        target: '_blank',
        rel: 'noreferrer noopener',
    })

    const internalProps = external ? getExternalLinkProps() : {}
    const isDisabled = isLoading || disabled

    return (
        <StyledButton
            $isLoading={isLoading}
            disabled={isDisabled}
            scale={scale}
            {...internalProps}
            {...rest}
        >
            <>
                {isValidElement(startIcon) &&
                    cloneElement(startIcon, {
                        mr: '0.5rem',
                    })}
                {children}
                {isValidElement(endIcon) &&
                    cloneElement(endIcon, {
                        ml: '0.5rem',
                    })}
            </>
        </StyledButton>
    )
}

export default Button
