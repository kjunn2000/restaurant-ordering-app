import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  return (
    <div className="text-white bg-dark">
      <Row>
        <Col className="h1 text-center py-5">FAQ</Col>
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav className="flex-column">
              <Nav.Item className="nav-item">
                <Nav.Link className="navlink" eventKey="first">
                  General
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="navlink" eventKey="second">
                  Order
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link className="navlink" eventKey="third">
                  Account
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Accordion defaultActiveKey="0">
                  <Card className="cardtop">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="border-bottom-0 bg-transparent"
                    >
                      1. What is this website for?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>
                          It is a web-based online food ordering system. Instead
                          of providing information on our food,service and
                          restaurant, we offer our customers to browse the menu
                          and place orders by themselves.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      className="border-bottom-0 bg-transparent"
                    >
                      2. Can I browse the website without internet connection?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>
                          No, an internet connection is required to ensure you
                          are viewing the latest information in the website.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardend">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="2"
                      className="border-bottom-0 bg-transparent"
                    >
                      3. I can't browse the website.
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <p>If this happends, you are reccomended to:</p>
                        <p>
                          a. Check your internet connnection <br />
                          b. Refresh the website <br />
                          c. Contact us for help
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <Accordion defaultActiveKey="0">
                  <Card className="cardtop">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="border-bottom-0 bg-transparent"
                    >
                      1. How do I place an order?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>1. bla bla bla</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      className="border-bottom-0 bg-transparent"
                    >
                      2. Can I make changes or cancel my order after placing an
                      order?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>Sorry I only know to do the easy one</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="2"
                      className="border-bottom-0 bg-transparent"
                    >
                      3. How will I know if Moody Canteen has received my order?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <p>Sorry I only know to do the easy one</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="3"
                      className="border-bottom-0 bg-transparent"
                    >
                      4. How do I manage cart item?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <p>Sorry I only know to do the easy one</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="4"
                      className="border-bottom-0 bg-transparent"
                    >
                      5. What is order tracker?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <p>Sorry I only know to do the easy one</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="5"
                      className="border-bottom-0 bg-transparent"
                    >
                      6. How do i view my order status?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <p>Sorry I only know to do the easy one</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="6"
                      className="border-bottom-0 bg-transparent"
                    >
                      7. Is there a minimum order requirement?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body>
                        <p>Sorry I only know to do the easy one</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardend">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="7"
                      className="border-bottom-0 bg-transparent"
                    >
                      8. Can I place an order via the website without logging in
                      to an account?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body>
                        <p>
                          No, you are required to log in to your account before
                          placing an order. If you do not have an account, just
                          register with us to enjoy the features in the future!
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Tab.Pane>

              <Tab.Pane eventKey="third">
                <Accordion defaultActiveKey="0">
                  <Card className="cardtop">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="border-bottom-0 bg-transparent"
                    >
                      1. How do I register an account with Moody Canteen?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>1. bla bla bla</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      className="border-bottom-0 bg-transparent"
                    >
                      2. How do I modify my account information?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <p>Sorry I only know to do the easy one</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardmid">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="2"
                      className="border-bottom-0 bg-transparent"
                    >
                      3. How do I reset my password?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <p>Sorry I only know to do the easy one</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className="cardend">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="3"
                      className="border-bottom-0 bg-transparent"
                    >
                      4. How do I delete my account permanently?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <p>
                          Simply contact us and we will reply to you as soon as
                          possible.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Home;
