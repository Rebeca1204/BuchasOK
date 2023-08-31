import React from "react";
import Grid from "./Grid";
import styled from "styled-components";

export default {
  title: "Components/Grid",
  component: Grid,
};

const Box = styled.div`
  height: 200px;
  background-color: ${(props) => props.theme.colors.primary.main};
`;
export const usage = () => (
  <Grid sm={2} md={3} lg={4} xl={5}>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
  </Grid>
);