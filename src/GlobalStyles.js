import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    user-select: none;
    font-family: 'Lexend Peta', sans-serif;
    font-weight: 300;
  }
  body {
    background: ghostwhite;
  }
`;