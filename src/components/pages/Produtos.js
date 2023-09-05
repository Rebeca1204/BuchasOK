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

const Produtos = () => (
  <>
    <Hero image="https://images.pexels.com/photos/5997617/pexels-photo-5997617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
      <Heading>
        <h1>DURABILIDADE, RESISTÊNCIA E DESEMPENHO</h1>
      </Heading>
      <ul>
        <p>Escolha quem não brinca na hora de produzir peças para veículos. </p>
      </ul>
      <Button variant="default" color="primary">
        Conheça nossa linha completa de produtos
      </Button>
    </Hero>
    <Section>
      <Heading>
        <h2>Produtos</h2>
      </Heading>
    </Section>
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Produtos;
