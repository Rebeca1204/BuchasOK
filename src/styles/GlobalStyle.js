import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import React from "react";
import { BreakAt, BreakpointSize } from "./Breakpoints";

const GlobalStyle = createGlobalStyle`
html{
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 100%; //padrao = 1rem = 16px
    color:  ${(props) => props.theme.colors.primary.text};
    box-sizing: border-box;
}

*,*::before, *::after{
    box-sizing: inherit;
}

body{
    margin: 0;
}
a , button {
    font-family: "Montserrat", sans-serif;
}
h1, h2, h3,h4, h5, h6{
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 2px;
    strong {
    color: ${(props) => props.theme.colors.primary.main};
  }
}
h1{
    font-size: 2.5rem; // 2.5 * 16 = 40px
    ${BreakAt(BreakpointSize.lg)}{
        font-size: 3.75rem;
    }
}
h2{
    font-size: 2rem; 
    ${BreakAt(BreakpointSize.lg)}{
        font-size: 3.125rem;
    }
}
h3{
    font-size: 1.9rem; 
    ${BreakAt(BreakpointSize.lg)}{
        font-size: 2.5rem;
    }
}
h4{
    font-size: 1.3rem;
    font-weight: 600;
    ${BreakAt(BreakpointSize.lg)}{
        font-size: 2.125rem;
    }
}
h5{
    font-size: 1.2rem;
    font-weight: 300;
    ${BreakAt(BreakpointSize.lg)}{
        font-size: 1.5rem;
    }
}

h6{
    font-size: 1.1rem;
    font-weight: 600;
    ${BreakAt(BreakpointSize.lg)}{
        font-size: 1.25rem;
    }
}
`;

const GlobalStyleComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);
export default GlobalStyleComposed;
