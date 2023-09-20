import React from "react";
// import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Accordion, { AccordionGroup } from "components/atoms/accordion";
import { FaEnvelopeOpen, FaAddressBook } from "react-icons/fa";
import AboutVideo from "assets/AboutVideo.mp4";
import BuchaMolaTraseira from "assets/BuchaMolaTraseira.jpg";
import BuchaMolaDianteira from "assets/BuchaMolaDianteira.jpg";
import BuchaMolaTraseiraJeep from "assets/BuchaMolaTraseiraJeep.jpg";
import BuchaTorcao from "assets/BuchaTorcao.jpg";
import Image from "assets/ImageHome.jpg";

import ProductGrid from "components/organisms/ProductGrid";

const products = [
  {
    id: 0,
    title: "Bucha da mola traseira e dianteira Jeep Willys",
    summary:
      "Voluptate voluptate excepteur nisi aliqua cillum laboris sit fugiat voluptate exercitation excepteur.",
    image: BuchaMolaTraseiraJeep,
  },
  {
    id: 1,
    title: "Bucha da mola dianteira e traseira Hilux",
    summary:
      "Ad consectetur dolore sunt ipsum deserunt exercitation elit ut sunt.",
    image: BuchaMolaDianteira,
  },
  {
    id: 2,
    title: "Bucha da mola traseira e jumelo traseiro Ranger",
    summary:
      "Velit nostrud officia et dolore excepteur veniam sunt cupidatat ut pariatur exercitation id.",
    image: BuchaMolaTraseira,
  },
  {
    id: 3,
    title: "Bucha da barra de torção Iveco Daily",
    summary:
      "Pariatur irure consectetur officia laboris nostrud elit pariatur occaecat id qui.",
    image: BuchaTorcao,
  },
  {
    id: 4,
    title: "Bucha traseira Fiorino",
    summary:
      "Quis fugiat do culpa non tempor ea magna ut adipisicing anim excepteur pariatur.",
    image: undefined,
  },
  {
    id: 5,
    title: "Bucha dianteira do MB Atego",
    summary:
      "Nisi labore laborum esse officia ex enim exercitation ipsum eiusmod Lorem et eu ipsum.",
    image: undefined,
  },
];

const Home = () => (
  <>
    <Hero image={Image}>
      <Heading>
        <h1>
          BUCHAS OK <strong>(desde 1955)</strong>
        </h1>
      </Heading>
      <ul>
        <li>A tradição e qualidade que atravessa gerações.</li>
      </ul>
      {/* <Button color="primary" as={Link} to="/produtos">
        Conheça nossa linha completa de produtos
      </Button> */}
    </Hero>
    <Section>
      <Grid sm={3}>
        <Feature title="Nossa missão" icon={<FaEnvelopeOpen />}>
          <p>
            Trabalhar com competência e ética, atendendo as necessidades dos
            nossos clientes.
          </p>
        </Feature>
        <Feature title="Nossa visão" icon={<FaEnvelopeOpen />}>
          <p>
            Oferecer sempre um ótimo serviço aos nossos clientes e atingir
            nossos objetivos.
          </p>
        </Feature>
        <Feature title="Nossos valores" icon={<FaAddressBook />}>
          <p>
            Com integridade, humildade, respeito e honestidade, mantendo sempre
            o foco e determinação, podemos alcançar nossos objetivos.
          </p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Descubra nossos produtos</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Sobre nós</h2>
          </Heading>
          <p>
            Somos tradicionais fabricantes de peças para suspensão veicular,
            atuando a mais de 70 anos no mercado brasileiro. Atualmente contamos
            com a fabricação de uma linha de buchas composta por material
            especial de alta resistência e alta durabilidade e com garantia
            contra trincas.
          </p>
          <p>
            <strong> Atendemos frotistas de Vans, Ônibus e Caminhões.</strong>
          </p>
          <p>
            Contate-nos para maiores informações sobre comprovação de
            durabilidade.
          </p>
          {/* <Button color="primary">Saiba mais</Button> */}
        </div>
        <div>
          <video
            style={{ borderRadius: "10px" }}
            src={AboutVideo}
            width="100%"
            autoPlay
            loop
            muted
            controls={null}
          />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Horário de funcionamento" open>
          Segunda a sexta - XX:XX-YY:YY
        </Accordion>
        {/* <Accordion title="Como eu tempor aliquip sit consequat minim.">
          Ea aliqua ad nisi exercitation aliqua in tempor proident mollit duis.
          Ea fugiat voluptate ex qui et. Ut voluptate aute adipisicing occaecat
          pariatur.Commodo id minim aliquip eu amet proident laboris laboris
          sint ut id. Velit ea dolor consequat velit nulla. Aliquip elit veniam
          nostrud aliqua est mollit officia Lorem aliqua eu laborum. Consequat
          proident occaecat incididunt excepteur velit sint in anim. Adipisicing
          qui id commodo non duis elit ullamco cupidatat cupidatat commodo.
          Tempor eiusmod non cillum irure minim.
        </Accordion>
        <Accordion title="Como eu id magna cillum ad consequat ut laborum.">
          Ea aliqua ad nisi exercitation aliqua in tempor proident mollit duis.
          Ea fugiat voluptate ex qui et. Ut voluptate aute adipisicing occaecat
          pariatur.Commodo id minim aliquip eu amet proident laboris laboris
          sint ut id. Velit ea dolor consequat velit nulla. Aliquip elit veniam
          nostrud aliqua est mollit officia Lorem aliqua eu laborum. Consequat
          proident occaecat incididunt excepteur velit sint in anim. Adipisicing
          qui id commodo non duis elit ullamco cupidatat cupidatat commodo.
          Tempor eiusmod non cillum irure minim.
        </Accordion> */}
      </AccordionGroup>
    </Section>

    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
