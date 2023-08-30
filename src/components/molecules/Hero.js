import React from "react";
import styled from "styled-components";
import { BreakAt, BreakpointSize } from "styles/Breakpoints";
import PropTypes from "prop-types";

const Root = styled.div`
  padding: 100px 0;
  background-color: ${(props) => props.theme.colors.primary.dark};
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    color: ${(props) => props.theme.colors.primary.main};
    content: "\\2713\\0020";
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;
  color: ${(props) => props.theme.colors.danger.text};
  ${BreakAt(BreakpointSize.sm)} {
    margin: 0 16px;
  }
  ${BreakAt(BreakpointSize.xl)} {
    padding: 0;
    width: 1140px;
    margin: 0 auto;
  }
`;
const Hero = ({ children }) => (
  <Root>
    {/* style={{background: url(), rgba(0,0,0,0.4); background-size: cover; background-position: center; background-blend-mode: overlay; }} */}
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  children: PropTypes.node, // ou .element para receber um componente
};

// Hero.defaultProps = {
//   title: "Meu título",
// };
export default Hero;
