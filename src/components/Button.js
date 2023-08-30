import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary.main};
  border: 2px solid ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.primary.text};
  border-radius: 5px;
`;

Button.defaultProps = {
  type: "button",
  children: undefined,
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
