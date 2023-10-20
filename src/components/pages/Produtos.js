import React from "react";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Section from "components/molecules/Section";
import ImageOrcamento from "draws/ImageOrcamento.svg";
import ImageTabela from "assets/ImageTabela.png";
import styled from "styled-components";
import CatalogoBuchasOK from "assets/catalogo_de_produtos_buchasok.pdf";
import Callout, {
  CalloutActions,
  CalloutBody,
  CalloutMedia,
} from "components/atoms/Callout";
import ListContainer from "components/atoms/ListContainer";
import { Link } from "react-router-dom";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import { useScroll } from "hooks/scroll";

const Image = styled.img`
  width: 90%;
  border: gray 1px solid;
`;

const Produtos = () => {
  useScroll();

  return (
    <>
      <Hero image="https://images.pexels.com/photos/5997617/pexels-photo-5997617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <Heading>
          <h1>DURABILIDADE, RESISTÊNCIA E DESEMPENHO</h1>
        </Heading>
        <ul>
          <li>
            Escolha quem não brinca na hora de produzir peças para veículos.
          </li>
        </ul>
        {/* <Link to={CatalogoBuchasOK} target="_blank">
          <Button color="primary">
            Conheça nossa linha completa de produtos
          </Button>
        </Link> */}
      </Hero>
      <Section>
        <div style={{ display: "flex" }}>
          <Grid md={2}>
            <div>
              <Heading>
                <h2>Produtos</h2>
              </Heading>
              <ListContainer>
                <p>
                  <strong>Linha 0KMW</strong>
                </p>
                <ul>
                  <li>Alta resistência ao desgaste.</li>
                  <li>Não trinca nunca.</li>
                  <li>Absorve o ruído</li>
                  <li>Resiste ao ataque de produtos químicos</li>
                </ul>
                <Link to={CatalogoBuchasOK} target="_blank">
                  <Button variant="outlined" color="danger">
                    Catálogo de produtos
                  </Button>
                </Link>
              </ListContainer>
            </div>
            <Image src={ImageTabela} alt="Tabela comparativa"></Image>
          </Grid>
        </div>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Solicite seu orçamento agora mesmo.</h6>
            <p>
              Em instantes você preenche o formulário, e antes do que espera,
              recebe seu orçamento! Experimente!
            </p>

            <CalloutActions>
              <Link to="/orcamento">
                <Button color="primary" style={{ marginTop: "50px" }}>
                  SOLICITAR
                </Button>
              </Link>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <Image
              style={{ border: "0" }}
              src={ImageOrcamento}
              alt="Fazer orçamento"
            />
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

Produtos.defaultProps = {};

Produtos.propTypes = {};

export default Produtos;
