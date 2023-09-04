import React from "react";
import Card, { CardBody, CardMedia } from "./Card";
import Grid from "./Grid";
import Heading from "./Heading";
import Button from "./Button";
import Image from "assets/fotoLampada.jpg";
export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Grid sm={3}>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Proident incididunt do tempor in aliqua qui sunt amet adipisicing nisi
          in eu officia.
        </p>
        <div>
          <Button variant="link" color="primary">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Grid>
);

export const withMedia = () => (
  <Grid sm={3}>
    <Card>
      <CardMedia image={Image}></CardMedia>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Proident incididunt do tempor in aliqua qui sunt amet adipisicing nisi
          in eu officia.
        </p>
        <div>
          <Button variant="link" color="primary">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Grid>
);
