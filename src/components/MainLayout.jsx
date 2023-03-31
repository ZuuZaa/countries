import { ThemeProvider } from 'styled-components'
import { useTheme } from '../context/theme'
import { darkTheme, lightTheme } from '../utils/Theme'
import { Header } from './Header'
import { Container } from './styled/Container.styled'
import { GlobalStyles } from './styled/GlobalStyles'

export const MainLayout = () => {

    const { theme } = useTheme()

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Header />
            <Container paddingBlock='4.6rem'>
                countries
            </Container>
        </ThemeProvider>
    )
}
