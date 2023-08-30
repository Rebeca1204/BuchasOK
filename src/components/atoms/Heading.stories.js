import React from "react";
import Heading from "./Heading";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Components/Heading",
  component: Heading,
};

export const usage = () => (
  <>
    <Heading>
      <h1>{text("Título1", "Título")}</h1>
    </Heading>
    <Heading>
      <h2>{text("Título2", "Título")}</h2>
    </Heading>
    <Heading>
      <h3>{text("Título3", "Título")}</h3>
    </Heading>
    <Heading>
      <h4>{text("Título4", "Título")}</h4>
    </Heading>
    <Heading>
      <h5>{text("Título5", "Título")}</h5>
    </Heading>
    <Heading>
      <h6>{text("Título6", "Título")}</h6>
    </Heading>
  </>
);
