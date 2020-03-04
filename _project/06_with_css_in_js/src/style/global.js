import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:  'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FDFDFD;
    color: #353535;
    * {
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  * {
    font-family:  'Montserrat', sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .DateField {
    p {
      color: #888;
      font-size: 0.8em;
      margin: 0;
    }
    input {
      border: none;
      outline: none;
      &:focus {
        outline: none;
      }
    }
  }

  .MuiInputBase-input, .MuiInputLabel-shrink {
    font-family: 'Montserrat' !important;
  }

  .MuiInput-underline {
    border: none !important;
    &:before {
      border: none !important;
    }
    &:after {
      border: none !important;
    }
  }
`

export default GlobalStyle
