import React, { useState, useEffect } from "react";

import { Button, Form, Row, Col, Alert } from "react-bootstrap";

const Search = ({ onSearchChange, onSearchEmpty }) => {
  const [search, setSearch] = useState("");
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (search === "") {
      onSearchEmpty();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const OnclickSearch = (search) => {
    onSearchChange(search);
    setTextVisible(true);
  };

  return (
    <div>
      <Form style={{ margin: "20px" }}>
        <Row>
          <Col sm="10">
            <Form.Control
              size="xl"
              type="text"
              placeholder="Busca un gif"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col>
            <Button
              variant="outline-info"
              onClick={() => OnclickSearch(search)}
            >
              Buscar
            </Button>
          </Col>
        </Row>

        {textVisible && (
          <Alert variant="light"> Resultados para "{search}" </Alert>
        )}
      </Form>
    </div>
  );
};

export default Search;
