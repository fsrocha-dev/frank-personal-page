import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 14px;
    font-family: sans-serif;
    height: 100vh;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`