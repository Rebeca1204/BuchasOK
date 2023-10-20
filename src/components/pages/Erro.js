import React from "react";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import styled from "styled-components";
import Section from "components/molecules/Section";
import Image404 from "draws/Image404.svg";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

const ImageContainer = styled.img`
  text-align: right;
  width: 100%;
  height: auto;
  max-width: 400px;
`;

const ErrorContent = styled.div`
  h1 {
    margin-top: 0;
  }
  p {
    margin: 24px 0;
    font-size: 1.2rem;
  }
`;

const Erro = () => {
  return (
    <Section>
      <Grid md={2}>
        <ErrorContent>
          <Heading>
            <h1>Página não encontrada</h1>
          </Heading>
          <p>Ops! Essa página não existe</p>
          <div>
            <Button as={Link} color="primary" to="/">
              Voltar para a página inicial
            </Button>
          </div>
        </ErrorContent>
        <div>
          <ImageContainer src={Image404} alt="Imagem 404" />
        </div>
      </Grid>
    </Section>
  );
};

Erro.defaultProps = {};

Erro.propTypes = {};

export default Erro;
