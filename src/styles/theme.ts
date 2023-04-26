import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    background: "#fff",
    shadow: "#141C47",
    primary: "#0077FF",
    secondary: "#6c757d",
    text: "#2e2e2e",
  },
  fonts: {
    body: "Arial, sans-serif",
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    background: "#141414",
    shadow: "#1f193d",
    primary: "#0077FF",
    secondary: "#6c757d",
    text: "#d6d6d6",
  },
  fonts: {
    body: "Arial, sans-serif",
  },
};

export { lightTheme, darkTheme };
