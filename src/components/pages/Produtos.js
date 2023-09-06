import React, { useEffect } from "react";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Section from "components/molecules/Section";
import ImageOrcamento from "draws/ImageOrcamento.svg";
import ImageTabela from "assets/ImageTabela.png";
import styled from "styled-components";
import Callout, {
  CalloutActions,
  CalloutBody,
  CalloutMedia,
} from "components/atoms/Callout";
import ListContainer from "components/atoms/ListContainer";

const Image = styled.img`
  width: 100%;
  max-height: 200px;
`;

const Produtos = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
        <Button color="primary">
          Conheça nossa linha completa de produtos
        </Button>
      </Hero>
      <Section>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
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
              <Button variant="outlined" color="danger">
                Catálogo de produtos
              </Button>
            </ListContainer>
          </div>
          <img
            src={ImageTabela}
            alt="Tabela comparativa"
            style={{ width: "40%" }}
          />
        </div>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Solicite seu orçamento agora mesmo.</h6>
            <p>
              Nulla aliqua magna sint qui mollit.In ipsum tempor exercitation
              velit ipsum adipisicing aliqua anim qui.Enim cupidatat in quis
              proident dolor laboris voluptate commodo minim esse.
            </p>
            <p>
              Em instantes você preenche o formulário, e antes do que espera,
              recebe seu orçamento! Experimente!
            </p>

            <CalloutActions>
              <Button color="primary">SOLICITAR</Button>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <Image src={ImageOrcamento} alt="Fazer orçamento" />
          </CalloutMedia>
        </Callout>
      </Section>
    </>
  );
};

Produtos.defaultProps = {};

Produtos.propTypes = {};

export default Produtos;
