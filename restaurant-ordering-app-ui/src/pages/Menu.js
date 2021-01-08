import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { Image } from "cloudinary-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllMenu } from "../redux/actions/authActions";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/menu/get-all-menu")
      .then((response) => {
        const menu = response.data;
        setMenu(menu);
        const data = {
          mainMenu: menu.filter((each) => each.foodType == "MAIN"),
          sideDishes: menu.filter((each) => each.foodType == "SIDE_DISH"),
          drinks: menu.filter((each) => each.foodType == "DRINK"),
        };
        console.log(data);
        dispatch(setAllMenu(data));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderMenu = (type) => {
    const filterMenu = menu.filter((eachMenu) => eachMenu.foodType === type);
    return filterMenu.map((eachMenu) => (
      <Col key={eachMenu.menuId} className="d-flex justify-content-center pb-5">
        <Card style={{ width: "18rem" }}>
          <Image
            height="190px"
            cloudName="kjunn2000"
            publicId={eachMenu.imageUrls[0]}
          />

          <Card.Body>
            <Card.Title className="border-bottom border-secondary pb-3 text-center">
              {eachMenu.title}
            </Card.Title>
            <Card.Text>{eachMenu.description}</Card.Text>
            <Card.Text>RM {eachMenu.price}</Card.Text>

            <ButtonGroup className="float-right" aria-label="Basic example">
              <Button
                variant="info"
                onClick={() => history.push(`/menu/${eachMenu.menuId}`)}
              >
                View
              </Button>
              <Button variant="success">AddToCart</Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  

  return (
    <div>
      <Row>
        <Col className="h1 text-center text-white py-5">Menu Page</Col>
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="main">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="main">Main Food</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sideDish">Side Dish</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="drink">Drink</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="main">
                <Container>
                  <Row>
                    {loading ? <h1>Loading...</h1> : renderMenu("MAIN")}
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="sideDish">
                {" "}
                <Container>
                  <Row>
                    {loading ? <h1>Loading...</h1> : renderMenu("SIDE_DISH")}
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="drink">
                {" "}
                <Container>
                  <Row>
                    {loading ? <h1>Loading...</h1> : renderMenu("DRINK")}
                  </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Menu;
