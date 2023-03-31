import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
    
  ul {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
 
`