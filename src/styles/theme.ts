import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    background: "#fff",
    bgBorder: "#d6d6d6",
    shadow: "#194478",
    primary: "#0077FF",
    secondary: "#6c757d",
    text: "#545454",
  },
  fonts: {
    body: "Arial, sans-serif",
  },
  background: {
    image: "/assets/bgLight.jpg",
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    background: "#141414",
    bgBorder: "#0d0d0d",
    shadow: "#000",
    primary: "#0077FF",
    secondary: "#6c757d",
    text: "#404040",
  },
  fonts: {
    body: "Arial, sans-serif",
  },
  background: {
    image: "/assets/bgDark.jpg",
  },
};

export { lightTheme, darkTheme };
