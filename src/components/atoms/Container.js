import styled from "styled-components";
import { BreakAt, BreakpointSize } from "styles/Breakpoints";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;
  ${BreakAt(BreakpointSize.sm)} {
    margin: 0 16px;
  }
  ${BreakAt(BreakpointSize.xl)} {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

Container.defaultProps = {
  children: undefined,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
