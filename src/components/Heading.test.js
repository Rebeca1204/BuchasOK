import React from "react";
import Heading from "./Heading";
import { render } from "./test-utils";

test("match snapshot", () => {
  const { asFragment } = render(<Heading>Titulo</Heading>);
  expect(asFragment()).toMatchSnapshot();
});
