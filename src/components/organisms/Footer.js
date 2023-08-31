import React from "react";
import styled from "styled-components";
import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
  }
`;
const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>CONNECT PROJECT</h6>
          </Heading>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
        </div>

        <div>
          <Heading>
            <h6>Redes sociais</h6>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
