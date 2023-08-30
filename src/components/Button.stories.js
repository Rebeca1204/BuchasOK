import React from "react";
import Button from "./Button";
export default {
  title: "Components/Button",
  component: Button,
};

export const usage = () => (
  <>
    <Button>Default</Button>
    <Button>Primary</Button>
    <Button>Danger</Button>
  </>
);
