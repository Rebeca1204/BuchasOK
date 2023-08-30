import React from "react";
import Heading from "./Heading";
import Hero from "./Hero";
import Button from "./Button";
import { text } from "@storybook/addon-knobs";
export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero>
    <Heading>
      <h1>
        {text("Title", "Connect Project ")}
        <strong>(destaque)</strong>
      </h1>
    </Heading>
    <ul>
      <li>
        {text(
          "Item1",
          "Fugiat dolore dolor laborum ea velit tempor sit Lorem ad.",
        )}
      </li>
      <li>{text("Item2", "Lorem laborum ex magna esse ut amet ut eu.")}</li>
      <li>
        {text(
          "Item3",
          "Tempor duis occaecat cillum excepteur excepteur enim labore minim culpa.",
        )}
      </li>
    </ul>
    <Button variant="outlined" color="primary">
      Conheça
    </Button>
  </Hero>
);
