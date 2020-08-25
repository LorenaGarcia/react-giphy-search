import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

import List from "./containers/List";
import Detail from "./containers/Detail";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Top Gifs</Navbar.Brand>
      </Navbar>
      <Container
        fluid
        className="justify-content-md-center"
        // style={{ margin: "20px" }}
      >
        <Switch>
          <Route path={"/"} exact component={List} />
          <Route path={"/gif/:gif"} exact component={Detail} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
