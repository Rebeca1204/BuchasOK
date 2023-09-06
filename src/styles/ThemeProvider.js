import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      main: "#FF364C",
      dark: "#6A0E0E",
      text: "#212121",
    },
    danger: {
      main: "#0C1C44",
      dark: "#2453c9",
      text: "#dfe0d8",
    },
    border: "rgba(0, 0, 0, 0.125)",
  },
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);
export default ThemeProvider;
