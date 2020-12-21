import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { Image } from "cloudinary-react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/menu/get-all-menu")
      .then((response) => {
        setMenu(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderMenu = menu.map((eachMenu) => {
    console.log(eachMenu);
    return (
      <Col key={eachMenu.menuId}>
        <Card style={{ width: "18rem" }}>
          <Image
            height="190px"
            cloudName="kjunn2000"
            publicId={eachMenu.imageUrls[0]}
          />

          <Card.Body>
            <Card.Title>{eachMenu.title}</Card.Title>
            <Card.Text>{eachMenu.description}</Card.Text>
            <Card.Text>RM {eachMenu.price}</Card.Text>
            <Button className="float-right" variant="primary">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <Row>
        <Col className="h1 text-center text-white py-5">Menu Page</Col>
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Container>
                  <Row>{loading ? <h1>Loading...</h1> : renderMenu}</Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="second">I am Second</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Menu;
