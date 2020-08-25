import React from "react";
import { Container, Card } from "react-bootstrap";

const GifDetail = ({ gif }) => {
  return (
    <Container
      fluid="md"
      style={{ display: "flex", justifyContent: "center", margin: "20px" }}
    >
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={gif.url} alt={gif.id} />
        <Card.Body>
          <Card.Title>{gif.title}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GifDetail;
