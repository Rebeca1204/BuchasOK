import React from "react";
import GlobalStyle from "./GlobalStyle";
import { render } from "../test-utils";
import "jest-styled-components";

test("match snapshot", () => {
  render(<GlobalStyle></GlobalStyle>);
  expect(document.head).toMatchSnapshot();
});
