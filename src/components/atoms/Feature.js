import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BreakAt, BreakpointSize } from "styles/Breakpoints";

const getColor = (props) => props.theme.colors.primary.main;
const Root = styled.div`
  text-align: center;
  & h5 {
    margin: 16px 0;
    min-height: 1.2rem;

    /* ${BreakAt(BreakpointSize.lg)} {
      min-height: 1.2rem;
    } */
  }
  & p {
    margin: 0;
  }
`;
const IconRoot = styled.div`
  display: inline-block;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    border: 1px solid ${getColor};
    > * {
      color: ${(props) => props.theme.colors.danger.text};
      background-color: ${(props) => props.theme.colors.primary.dark};
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  font-size: 32px;
  width: 100%;
  height: 100%;
  color: ${getColor};
`;

const Feature = ({ icon, title, children }) => (
  <Root>
    <IconRoot>
      <IconContainer>{icon}</IconContainer>
    </IconRoot>
    <h5>
      <strong>{title}</strong>
    </h5>
    <div>{children}</div>
  </Root>
);

Feature.defaultProps = {
  icon: undefined,
  title: "",
  children: undefined,
};

Feature.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Feature;
