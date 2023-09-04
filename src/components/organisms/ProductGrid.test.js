import React from "react";
import ProductGrid from "./ProductGrid";
import { fireEvent, render, screen } from "test-utils";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ id: i, title: `Titulo ${i}` });
  }
  return result;
};

describe.each([
  [3, 3],
  [4, 3],
  [1, 1],
  [2, 2],
  [6, 3],
])("with $i products ", (size, expected) => {
  test(`show only ${expected} items`, () => {
    render(<ProductGrid products={buildProducts(size)}></ProductGrid>);

    expect(screen.getAllByRole("heading").length).toBe(expected);
  });
  test(`mostrar todos ao clicar o botao`, () => {
    render(<ProductGrid products={buildProducts(size)}></ProductGrid>);
    fireEvent.click(screen.getByText("VER MAIS"));
    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});
