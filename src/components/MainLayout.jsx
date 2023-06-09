import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CountriesProvider } from '../context/countries'
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
                <CountriesProvider>
                    <Outlet />
                </CountriesProvider>
            </Container>
        </ThemeProvider>
    )
}
