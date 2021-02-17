import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, 
  *::after,
  *::before {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family:sans-serif;
  }

  .icon {
    cursor:pointerl;
  }
`

export default GlobalStyle