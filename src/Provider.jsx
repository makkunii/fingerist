import ThemeProviderWrapper from './context/ThemeProvider'

const Providers = ({ children }) => {
    return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
}

export default Providers
