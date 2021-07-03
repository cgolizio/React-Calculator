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
    /* font-family: 'Quicksand', sans-serif; */
  }
  body {
    background: ghostwhite;
  }
`;