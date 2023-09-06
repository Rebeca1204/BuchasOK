import React from "react";
import ProductGrid from "./ProductGrid";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      {
        id: 1,
        title: "Titulo 1",
        summary: "Ea laboris cillum quis do exercitation laborum.",
      },
      {
        id: 2,
        title: "Titulo 2",
        summary:
          "Do pariatur esse mollit pariatur elit quis non velit enim id ut occaecat.",
      },
      {
        id: 3,
        title: "Titulo 3",
        summary:
          "Eu fugiat aliqua do officia aute.Aute consequat et deserunt officia.",
      },
      {
        id: 4,
        title: "Titulo 4",
        summary: "Ea laboris cillum quis do exercitation laborum.",
      },
      {
        id: 5,
        title: "Titulo 5",
        summary:
          "Do pariatur esse mollit pariatur elit quis non velit enim id ut occaecat.",
      },
      {
        id: 6,
        title: "Titulo 6",
        summary:
          "Eu fugiat aliqua do officia aute.Aute consequat et deserunt officia.",
      },
    ]}
  ></ProductGrid>
);
