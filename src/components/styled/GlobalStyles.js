import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
  body {
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.primary};
  }
    
  ul {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
 
`