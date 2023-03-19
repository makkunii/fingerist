import { ThemeProvider } from 'styled-components'
import { useThemeManager } from '../state/theme/hook'
import { LightColor, DarkColor } from '../theme/theme'

const ThemeContext = ({ children }) => {
    const [isDark] = useThemeManager()

    return (
        <ThemeProvider theme={isDark ? DarkColor : LightColor}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeContext
