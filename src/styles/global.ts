import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: "#27204a",
  secondary: "#1f193d",
  third: "#ffb74d",
  thirdLight: "#ffe9ca",
  white: "#ffffff",
  black: '#131313',
  success: "#50ba9e",
  purple: '#331459',
  danger: "#660000",
  gray: '#383838',
  grayLight: '#828282',
  button: "#4a2b64",
  lightgray: "#303030",
  darkgray: "#080808",
  blue: "#1d5aa3",
  darkblue: "#194478",
  lightblue: "#4c77b0",
  btnSubmit: "#50ba9e",
  borderbtnSubmit: "#48b04d",
}

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  html, body, #root {
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chivo Mono', monospace;
  }
  body {
    font-size: 16px;
    line-height: 1.4;
    background-color: #F5F5F5;
    color: #333;
  }
  
  /* Add your global styles below */
  a {
    color: #0070f3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
