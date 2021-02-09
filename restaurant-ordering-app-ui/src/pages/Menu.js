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

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [promotionList, setPromotionList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/menu/get-all-menu")
      .then((response) => {
        const menu = response.data.menuList;
        const promotionList = response.data.promotionList;

        setMenu(menu);
        setPromotionList(promotionList);
        console.log(menu);
        console.log(promotionList);
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

  const handleSubmit = (menuId, e) => {
    e.preventDefault();
    console.log(role);
    if (role !== "ROLE_CUSTOMER") {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
    const dto = {
      menuId,
      quantity: 1,
      comment: "N/A",
    };
    console.log(dto);
    axios
      .post("http://localhost:8080/api/user/add-to-cart", dto)
      .then((response) => {
        console.log(response);
        dispatch(addCartItem(response.data));
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      })
      .catch((error) => console.log(error));
  };

  const renderMenu = (type) => {
    var filterMenu = [];
    if (type == "MAIN" || type == "SIDE_DISH" || type == "DRINK") {
      filterMenu = menu.filter((eachMenu) => eachMenu.foodType === type);
    } else {
      filterMenu = promotionList.find(
        (promotion) => promotion.promotionName == type
      ).promotionItems;
    }
    return filterMenu.map((eachMenu) => (
      <Col key={eachMenu.menuId} className="d-flex justify-content-center pb-5">
        <Card style={{ width: "18rem" }}>
          <Image
            height="190px"
            cloudName="kjunn2000"
            publicId={eachMenu.imageUrls[0]}
          />

          <Card.Body>
            <Card.Title className="title border-bottom border-secondary pb-3 text-center">
              {eachMenu.promotionPrice == 0 ? (
                ""
              ) : (
                <Image
                  height="50px"
                  cloudName="kjunn2000"
                  publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611300577/restaurant-ordering-app-cloud-image/specialoffer_e7dkzm.gif"
                />
              )}
              {eachMenu.title}
            </Card.Title>
            <Card.Text className="des">{eachMenu.description}</Card.Text>
            <Card.Text>
              <p className="price">
                {eachMenu.promotionPrice == 0 ? (
                  <p>RM {eachMenu.price}</p>
                ) : (
                  <p>
                    <s>RM {eachMenu.price} </s>
                    <h5 className="d-inline text-danger">
                      RM {eachMenu.promotionPrice}
                    </h5>
                  </p>
                )}
              </p>
            </Card.Text>

            <ButtonGroup className="float-right" aria-label="Basic example">
              <Button
                variant="info"
                onClick={() => history.push(`/menu/${eachMenu.menuId}`)}
              >
                View
              </Button>
              <Button
                onClick={(e) => handleSubmit(eachMenu.menuId, e)}
                variant="success"
              >
                AddToCart
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="menu pt-5 bg-light">
      <div className="header m-0 pt-5">
        <Row className="p-0 m-0 pb-5">
          <Col className="col-12">
            <h2 className="title text-center">MOODY Café | Menu</h2>
            <h5
              className="subTitle text-center"
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

      <div className="main p-5" style={{ backgroundColor: "#d3d3d3" }}>
        <Alert className="text-center" variant="danger" show={showAlert}>
          *** Please log in to the system to add to cart. ***
        </Alert>
        <Alert className="text-center" variant="success" show={showSuccess}>
          *** Successful added to the cart ***
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
                {promotionList.map((promotion) => (
                  <Nav.Item>
                    <Nav.Link eventKey={promotion.promotionName}>
                      {promotion.promotionName}
                    </Nav.Link>
                  </Nav.Item>
                ))}
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
                {promotionList.map((promotion) => (
                  <Tab.Pane eventKey={promotion.promotionName}>
                    {" "}
                    <Container>
                      <Row>
                        {loading ? (
                          <h1>Loading...</h1>
                        ) : (
                          renderMenu(promotion.promotionName)
                        )}
                      </Row>
                    </Container>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Menu;
