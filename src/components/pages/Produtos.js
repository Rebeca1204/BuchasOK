import React from "react";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Section from "components/molecules/Section";
import ImageOrcamento from "draws/ImageOrcamento.svg";
import ImageTabela from "assets/ImageTabela.png";
import Grid from "components/atoms/Grid";
import styled from "styled-components";
import Callout, {
  CalloutActions,
  CalloutBody,
  CalloutMedia,
} from "components/atoms/Callout";

const Image = styled.img`
  width: 100%;
  max-height: 200px;
`;

const Produtos = () => (
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
      <Button color="primary">Conheça nossa linha completa de produtos</Button>
    </Hero>
    <Section>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Heading>
            <h2>Produtos</h2>
          </Heading>
          Nulla laborum ex non est. Ea eu ipsum sit magna dolor nisi. Irure
          Lorem nisi laboris minim ex irure aliqua. Officia ipsum adipisicing
          veniam tempor proident ipsum Lorem id. Pariatur ut cupidatat laboris
          consequat exercitation minim id Lorem reprehenderit pariatur duis
          dolore cillum mollit. Duis deserunt ex ad qui. Dolor ipsum
          reprehenderit sint nisi in laboris.
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
            Ad esse fugiat aliquip consectetur labore pariatur sint
            reprehenderit commodo consectetur. Nisi culpa magna occaecat ullamco
            occaecat. Aute magna elit cillum laborum enim esse. Anim ad eiusmod
            fugiat anim culpa esse enim tempor nostrud fugiat.
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

Produtos.defaultProps = {};

Produtos.propTypes = {};

export default Produtos;
