import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  const questions = [
    {
      type: "general",
      title: "1. What is this website for?",
      ans:
        "It is a web-based online food ordering system. Instead of providing information on our food,service and restaurant, we offer our customers to browse the menu and place orders by themselves.",
    },
    {
      type: "general",
      title: "2. What is this website for?",
      ans:
        "It is a web-based online food ordering system. Instead of providing information on our food,service and restaurant, we offer our customers to browse the menu and place orders by themselves.",
    },
    {
      type: "delivery",
      title: "1. What is this website for?",
      ans:
        "It is a web-based online food ordering system. Instead of providing information on our food,service and restaurant, we offer our customers to browse the menu and place orders by themselves.",
    },
    {
      type: "delivery",
      title: "2. What is this website for?",
      ans:
        "It is a web-based online food ordering system. Instead of providing information on our food,service and restaurant, we offer our customers to browse the menu and place orders by themselves.",
    },
  ];

  const renderQuestion = (type) => {
    const filteredQuestion = questions.filter((each) => each.type == type);

    return filteredQuestion.map((question) => (
      <Accordion defaultActiveKey="0">
        <Card className="cardtop">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="border-bottom-0 "
            style={{ backgroundColor: "#80604D", color: "white" }}
          >
            {question.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{question.ans}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ));
  };
  return (
    <div className="question bg-light">
      <div className="header m-0 pb-5" style={{ paddingTop: "100px" }}>
        <Row className="p-0 m-0">
          <Col className="col-12">
            <h2 className="title text-center">The Question</h2>
            <h5
              className="subTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#6F4E37",
              }}
            >
              We are happy to answer your question
            </h5>
          </Col>
        </Row>
      </div>
      <div className="main p-5" style={{ backgroundColor:"#d3d3d3" }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="p-0 m-0">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">GENERAL</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">DILIVERY</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {renderQuestion("general")}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {renderQuestion("delivery")}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Home;
