import React from "react";
import { render } from "./test-utils";
import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Teste 1</p>
    </Hero>,
  );
  expect(getByText("Teste 1")).toBeInTheDocument();
});
