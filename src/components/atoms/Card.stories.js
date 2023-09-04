import React from "react";
import Card, { CardBody, CardMedia } from "./Card";
import Heading from "./Heading";
import Grid from "./Grid";
import Button from "./Button";
import Image from "assets/LampadaInteligente.jpg";
export default {
  title: "Components/Atoms/Card",
  component: Card,
};

export const usage = () => (
  <Grid sm={3}>
    <Card>
      <CardMedia image={Image} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Est ad laboris occaecat exercitation velit. Minim cillum velit
          adipisicing do laboris cupidatat.
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Grid>
);
