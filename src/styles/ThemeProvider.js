import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      main: "#90b19d",
      dark: "#324f49",
      text: "#212121",
    },
    danger: {
      main: "#6e4f4b",
      dark: "#b22a00",
      text: "#dfe0d8",
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);
export default ThemeProvider;
