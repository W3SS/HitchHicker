import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,700,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scrollbar-color: #31343f #1e2127;
  }

  html, body, #root {
      height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #E5E6F6;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none
  }

`;