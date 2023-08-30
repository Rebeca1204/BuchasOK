import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      main: "#185687",
      light: "#187568",
      text: "#fff",
    },
  },
  danger: {
    main: "#ff3d00",
    dark: "#b22a00",
    text: "#212121",
  },
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);
export default ThemeProvider;
