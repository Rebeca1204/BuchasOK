import React from "react";
import Feature from "./Feature";
import Grid from "./Grid";
import { FaEnvelopeOpen, FaAddressBook } from "react-icons/fa";
export default {
  title: "Components/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature title="Teste" icon={<FaEnvelopeOpen />}>
    <p>
      Aliquip exercitation voluptate commodo aliquip occaecat culpa fugiat in.
    </p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={3}>
    <Feature title="Maior site de produtos no Brasil" icon={<FaEnvelopeOpen />}>
      <p>Junte-se a nós. Faça agora o seu cadastro.</p>
    </Feature>
    <Feature title="Mais de 10000 usuários por dia" icon={<FaEnvelopeOpen />}>
      <p>
        Aliquip exercitation voluptate commodo aliquip occaecat culpa fugiat in.
      </p>
    </Feature>
    <Feature
      title="Melhores produtos e avaliações confiáveis"
      icon={<FaAddressBook />}
    >
      <p>
        Aliquip exercitation voluptate commodo aliquip occaecat culpa fugiat in.
      </p>
    </Feature>
  </Grid>
);
