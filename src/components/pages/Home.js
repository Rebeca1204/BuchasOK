import React from "react";
// import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import { FaEnvelopeOpen, FaAddressBook } from "react-icons/fa";

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
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
