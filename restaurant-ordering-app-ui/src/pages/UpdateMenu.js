import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Col, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { Image } from "cloudinary-react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllMenu } from "../redux/actions/authActions";
import { addCartItem } from "../redux/actions/userActions";

const UpdateMenu = () => {
  const [menu, setMenu] = useState([]);
  const [promotionList, setPromotionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/menu/get-all-menu")
      .then((response) => {
        const menu = response.data.menuList;
        setMenu(menu);
        setPromotionList(response.data.promotionList);
        const data = {
          mainMenu: menu.filter((each) => each.foodType == "MAIN"),
          sideDishes: menu.filter((each) => each.foodType == "SIDE_DISH"),
          drinks: menu.filter((each) => each.foodType == "DRINK"),
        };
        dispatch(setAllMenu(data));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (menuId) => {
    history.push(`/edit-menu/${menuId}`);
  };

  const handleDelete = (menuId) => {
    axios.delete(`http://localhost:8080/api/menu/${menuId}`);
    const newMenu = menu.filter((each) => each.menuId !== menuId);
    setMenu(newMenu);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
    window.scrollTo(0, 0);
  };

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
                variant="success"
                onClick={() => handleEdit(eachMenu.menuId)}
              >
                Edit
              </Button>
              <Button
                onClick={(e) => handleDelete(eachMenu.menuId)}
                variant="danger"
              >
                Delete
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="updateMenu pt-5 bg-dark">
      <div className="header text-white m-0 pt-5">
        <Row className="p-0 m-0 pb-5">
          <Col className="col-12">
            <h2 className="headerTitle text-center">Update Menu</h2>
            <h5
              className="headerSubTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Only Perfect
            </h5>
          </Col>
        </Row>
      </div>

      <div
        className="main p-5"
        style={{ backgroundColor: "rgba(22, 22, 22, 0.57)" }}
      >
        <Alert className="text-center" variant="success" show={showSuccess}>
          *** Successful deleted from the list ***
        </Alert>
        <Tab.Container id="left-tabs-example" defaultActiveKey="main">
          <Row className="p-0 m-0">
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
    </div>
  );
};

export default UpdateMenu;
