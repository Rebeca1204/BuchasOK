import React from "react";
// import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";
import { FaEnvelopeOpen, FaAddressBook } from "react-icons/fa";
import AboutVideo from "assets/AboutVideo.mp4";
import ProductGrid from "components/organisms/ProductGrid";

const products = [
  {
    id: 0,
    title: "Produto 1",
    summary:
      "Voluptate voluptate excepteur nisi aliqua cillum laboris sit fugiat voluptate exercitation excepteur.",
    image: "https://s3.amazonaws.com/lepok.w/produtos/produtos/02628_2.jpg",
  },
  {
    id: 1,
    title: "Produto 2",
    summary:
      "Ad consectetur dolore sunt ipsum deserunt exercitation elit ut sunt.",
    image: undefined,
  },
  {
    id: 2,
    title: "Produto 3",
    summary:
      "Velit nostrud officia et dolore excepteur veniam sunt cupidatat ut pariatur exercitation id.",
    image: undefined,
  },
  {
    id: 3,
    title: "Produto 4",
    summary:
      "Pariatur irure consectetur officia laboris nostrud elit pariatur occaecat id qui.",
    image: undefined,
  },
  {
    id: 4,
    title: "Produto 5",
    summary:
      "Quis fugiat do culpa non tempor ea magna ut adipisicing anim excepteur pariatur.",
    image: undefined,
  },
  {
    id: 5,
    title: "Produto 6",
    summary:
      "Nisi labore laborum esse officia ex enim exercitation ipsum eiusmod Lorem et eu ipsum.",
    image: undefined,
  },
];

const Home = () => (
  <>
    <Hero>
      <Heading>
        <h1>
          Connect Project <strong>(destaque)</strong>
        </h1>
      </Heading>
      <ul>
        <li>Fugiat dolore dolor laborum ea velit tempor sit Lorem ad.</li>
        <li>Lorem laborum ex magna esse ut amet ut eu.</li>
        <li>
          Tempor duis occaecat cillum excepteur excepteur enim labore minim
          culpa.
        </li>
      </ul>
      <Button variant="outlined" color="primary">
        Conheça
      </Button>
    </Hero>
    <Section>
      <Grid sm={3}>
        <Feature
          title="Maior site de produtos no Brasil"
          icon={<FaEnvelopeOpen />}
        >
          <p>Junte-se a nós. Faça agora o seu cadastro.</p>
        </Feature>
        <Feature
          title="Mais de 10000 usuários por dia"
          icon={<FaEnvelopeOpen />}
        >
          <p>
            Aliquip exercitation voluptate commodo aliquip occaecat culpa fugiat
            in.
          </p>
        </Feature>
        <Feature
          title="Melhores produtos e avaliações confiáveis"
          icon={<FaAddressBook />}
        >
          <p>
            Aliquip exercitation voluptate commodo aliquip occaecat culpa fugiat
            in.
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
            Aliqua aliquip esse deserunt eiusmod non ut eiusmod. Qui velit
            exercitation exercitation ut nisi pariatur proident nisi cillum sunt
            eiusmod ex. Ea dolor magna aliquip laborum ut amet aliquip irure
            laboris id incididunt occaecat esse.
          </p>
          <Button color="primary">Saiba mais</Button>
        </div>
        <div>
          <video
            style={{ borderRadius: "10px" }}
            src={AboutVideo}
            width="100%"
            autoPlay
            loop
          />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu djfisdjf udfhuaif aufhuadh">
          Ea aliqua ad nisi exercitation aliqua in tempor proident mollit duis.
          Ea fugiat voluptate ex qui et. Ut voluptate aute adipisicing occaecat
          pariatur.Commodo id minim aliquip eu amet proident laboris laboris
          sint ut id. Velit ea dolor consequat velit nulla. Aliquip elit veniam
          nostrud aliqua est mollit officia Lorem aliqua eu laborum. Consequat
          proident occaecat incididunt excepteur velit sint in anim. Adipisicing
          qui id commodo non duis elit ullamco cupidatat cupidatat commodo.
          Tempor eiusmod non cillum irure minim.
        </Accordion>
        <Accordion title="Como eu tempor aliquip sit consequat minim.">
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
        </Accordion>
      </AccordionGroup>
    </Section>

    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
