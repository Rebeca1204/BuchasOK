import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "components/atoms/Grid";
import Card, { CardBody, CardMedia } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CatalogoBuchasOK from "assets/catalogo_de_produtos_buchasok.pdf";

const ToolBar = styled.div`
  margin-top: 40px;
  text-align: center;
`;
const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);
  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6>{product.title}</h6>
              </Heading>
              <p>{product.summary}</p>
              <div>
                <Link to={CatalogoBuchasOK} target="_blank">
                  <Button variant="link" color="danger">
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
      {!showAll && (
        <ToolBar>
          <Button variant="outlined" onClick={() => setShowAll(true)}>
            VER MAIS
          </Button>
        </ToolBar>
      )}
    </>
  );
};

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    })
  ),
};

export default ProductGrid;
