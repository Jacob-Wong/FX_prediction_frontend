import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import IndexPage from "./components/index.component";
import EurUsdPredict from "./components/eurusd.component";
import UsdJpyPredict from "./components/usdjpy.component";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Forex Predictions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/eurusd">
                <Nav.Link>EURUSD</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/usdjpy">
                <Nav.Link>USDJPY</Nav.Link>
              </LinkContainer>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/eurusd" component={EurUsdPredict} />
            <Route path="/usdjpy" component={UsdJpyPredict} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
