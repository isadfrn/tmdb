import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${({ theme }) => theme.FONTS.MAIN};
    background-color: ${({ theme }) => theme.COLORS.WHITE_500};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE_500};
  }

  button, a {
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
