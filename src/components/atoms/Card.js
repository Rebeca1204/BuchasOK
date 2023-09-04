import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  background-color: ${(props) => props.theme.colors.danger.text};
  border-radius: 4px;
`;

const Body = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

const Media = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardBody = ({ children }) => <Body>{children}</Body>;
export const CardMedia = ({ image }) => <Media image={image} />;
const Card = ({ children }) => <Root>{children}</Root>;

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: undefined,
};

export default Card;
