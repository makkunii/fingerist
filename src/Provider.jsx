import { Provider } from 'react-redux'
import ThemeProviderWrapper from './context/ThemeProvider'
import store from './state'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </Provider>
    )
}

export default Providers
