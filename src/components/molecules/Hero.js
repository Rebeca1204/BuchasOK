import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Container from "components/atoms/Container";
const Root = styled.div`
  padding: 100px 0;
  filter: brightness(0.6) opacity(0.9);
  ${(props) => css`
    background: url(${props.image});
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  display: inline-block;
  color: ${(props) => props.theme.colors.primary.text};
  p,
  li {
    font-size: 20px;
    font-weight: 600;
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

const Hero = ({ image, children }) => (
  <Root image={image}>
    {/* style={{background: url(), rgba(0,0,0,0.4); background-size: cover; background-position: center; background-blend-mode: overlay; }} */}
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  children: PropTypes.node, // ou .element para receber um componente
  image: PropTypes.string,
};

// Hero.defaultProps = {
//   title: "Meu título",
// };
export default Hero;
