import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Question from "./pages/Question";
import Register from "./pages/Register";
import AddMenu from "./pages/AddMenu";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Promotion from "./pages/Promotion";
import UpdateMenu from "./pages/UpdateMenu";
import MenuDetails from "./pages/MenuDetails";
import Navigation from "./components/Navigation.js";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Col, Container, Row } from "react-bootstrap";
import { axios } from "axios";
import interceptors from "./interceptors/interceptors";
import Auth from "./auth/auth";
import {
  ROLE_GUEST,
  ROLE_ADMIN,
  ROLE_STAFF,
  ROLE_CUSTOMER,
} from "./auth/userRole";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Container>
          <Row>
            <Col lg={12} style={{ marginTop: "60px" }}>
              <Switch>
                <Route exact path="/" component={Auth(Home, ROLE_GUEST)} />
                <Route
                  exact
                  path="/menu"
                  component={Auth(Menu, ROLE_GUEST, ROLE_CUSTOMER)}
                />
                <Route
                  exact
                  path="/menu/:menuId"
                  component={Auth(MenuDetails, ROLE_GUEST, ROLE_CUSTOMER)}
                />
                <Route
                  exact
                  path="/about-us"
                  component={Auth(AboutUs, ROLE_GUEST)}
                />
                <Route
                  exact
                  path="/question"
                  component={Auth(Question, ROLE_GUEST)}
                />
                <Route
                  exact
                  path="/register"
                  component={Auth(Register, ROLE_GUEST)}
                />
                <Route
                  exact
                  path="/order"
                  component={Auth(Order, ROLE_CUSTOMER)}
                />
                <Route
                  exact
                  path="/history"
                  component={Auth(History, ROLE_CUSTOMER)}
                />
                <Route
                  exact
                  path="/cart"
                  component={Auth(Cart, ROLE_CUSTOMER)}
                />
                <Route
                  exact
                  path="/dashboard"
                  component={Auth(Dashboard, ROLE_STAFF)}
                />
                <Route
                  exact
                  path="/add-menu"
                  component={Auth(AddMenu, ROLE_ADMIN)}
                />
                <Route
                  exact
                  path="/update-menu"
                  component={Auth(UpdateMenu, ROLE_ADMIN)}
                />
                <Route
                  exact
                  path="/promotion"
                  component={Auth(Promotion, ROLE_ADMIN)}
                />
              </Switch>
            </Col>
          </Row>
          ""
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
