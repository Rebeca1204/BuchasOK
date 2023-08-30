import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      main: "#185687",
      dark: "#091c29",
      text: "#fff",
    },
    danger: {
      main: "#f47174",
      dark: "#b22a00",
      text: "#212121",
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);
export default ThemeProvider;
