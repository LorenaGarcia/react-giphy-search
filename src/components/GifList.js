import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GifItem from "./GifItem";

const GifList = ({ gifs }) => {
  const gifItems = gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />;
  });

  return (
    <Container fluid="md" style={{ marginTop: "20px" }}>
      <Row className="justify-content-md-center">
        <Col>{gifItems}</Col>
      </Row>
    </Container>
  );
};

export default GifList;
