import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu";
import Register from "./pages/Register";
import AddMenu from "./pages/AddMenu";
import Navigation from "./components/Navigation.js";
import {Provider} from "react-redux";
import {store} from './redux/store';
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Container>
          <Row>
            <Col lg={12} style={{ marginTop: "60px" }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/add-menu" component={AddMenu} />
                <Route path="/register" component={Register} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
