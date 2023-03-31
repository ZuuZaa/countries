import React from "react";
import {  ThemeProvider, useTheme } from "styled-components";
import { Container } from "./components/styled/Container.styled";
import { GlobalStyles } from "./components/styled/GlobalStyles";


const theme= { 
    colors: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'red', 
      background: 'hsl(207, 26%, 17%)',
    },
  }

const App = () => {
  const currentTheme = useTheme() 
  console.log(currentTheme)
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <Container paddingBlock='4.6rem'>
        countries
        {currentTheme}
      </Container>
      </ThemeProvider>
  );
}

export default App;
