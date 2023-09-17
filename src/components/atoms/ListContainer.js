import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  p,
  li {
    font-size: 18px;
    font-weight: 300;
  }
strong {
    color: ${props => props.theme.colors.danger.main};
}
  ul {
    list-style: none;
    padding-left: 0;
  }
  li:last-child {
    margin-bottom: 8px;
  }

  li::before {
    color: ${(props) => props.theme.colors.danger.main};
    content: "\\2713\\0020";
  }
`;

const ListContainer = ({ children }) => (
  <Container>{children}</Container>
);

ListContainer.propTypes = {
  children: PropTypes.node,
};

export default ListContainer;
