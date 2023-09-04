import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

//#region CardBody
const Body = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <Body>{children}</Body>;

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region CardMedia
const Media = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  min-height: 270px;
`;

export const CardMedia = ({ image }) => <Media image={image}></Media>;

CardMedia.defaultProps = {
  image: undefined,
};

CardMedia.propTypes = {
  children: PropTypes.string,
};
//#endregion

//#region  Card
const Root = styled.div`
  background-color: ${(props) => props.theme.colors.danger.text};
  border-radius: 4px;
  overflow: hidden;
`;

const Card = ({ children }) => <Root>{children}</Root>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
//#endregion
