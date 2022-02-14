import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background: ${({ theme }) => theme.colors.body_Background};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.default_font_color};
    font-family: 'Lexend Deca', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.default_font_color}
  }

  ul {
    list-style: none;
  }

  button {
    color: ${({ theme }) => theme.colors.default_font_color};
  }
`;
