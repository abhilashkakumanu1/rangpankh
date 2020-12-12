import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Rating value={product.rating} text={`${product.numReviews} reviews`} />

        <Card.Text as="div">
          <h3>${product.price}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
