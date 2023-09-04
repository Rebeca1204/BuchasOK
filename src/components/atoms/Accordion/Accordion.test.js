import React from "react";
import Accordion from "./Accordion";
import { render, screen, fireEvent } from "test-utils";

test("renders with title", () => {
  render(<Accordion title="Título"></Accordion>);

  expect(screen.getByText("Título")).toBeInTheDocument();
});

test("renders without children", () => {
  render(<Accordion>Children text</Accordion>);
  //query devolve vazio se nao acha, get devolve o dom
  expect(screen.queryByText("Children text")).not.toBeInTheDocument();
});

test("triggers onChange on click", () => {
  const handleChange = jest.fn();
  render(<Accordion title="Título" onChange={handleChange}></Accordion>);
  fireEvent.click(screen.getByText("Título"));
  expect(handleChange).toBeCalledTimes(1);
});

describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders with children", () => {
      render(<Accordion open>Children text</Accordion>);
      expect(screen.queryByText("Children text")).toBeInTheDocument();
    });

    test("triggers onChange on click", () => {
      const handleChange = jest.fn();
      render(<Accordion title="Título" onChange={handleChange} open />);
      fireEvent.click(screen.getByText("Título"));
      expect(handleChange).toBeCalledTimes(1);
    });

    test("hide children when open changes to false", () => {
      const { rerender } = render(
        <Accordion title="Título" open>
          Children text
        </Accordion>,
      );
      rerender(
        <Accordion title="Título" open={false}>
          Children text
        </Accordion>,
      );
      expect(screen.queryByText("Children text")).not.toBeInTheDocument();
    });

    test("triggers onChange default function on click", () => {
      render(<Accordion title="Título" open />);
      fireEvent.click(screen.getByText("Título"));
    });
  });
  describe("when starts closed", () => {
    test("renders without children", () => {
      render(<Accordion open={false}>Children text</Accordion>);
      expect(screen.queryByText("Children text")).not.toBeInTheDocument();
    });
  });
});
