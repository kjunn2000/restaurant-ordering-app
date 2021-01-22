import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../redux/actions/userActions";
import { Card, Button, Col, Row, Form, Alert } from "react-bootstrap";
import { Image } from "cloudinary-react";
import AliceCarousel from "react-alice-carousel";
import LocalStorageService from "../localStorage/LocalStorageService";

const MenuDetails = (props) => {
  const { menuId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const role = useSelector((state) => state.auth.role);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState({
    quantity: 1,
    comment: "N/A",
  });

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/menu/${menuId}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCartItem({ ...cartItem, [name]: value });
  };

  const handleSubmit = (e) => {
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
      quantity: cartItem.quantity,
      comment: cartItem.comment,
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

  return loading ? (
    <div className="h1 text-center text-white">Loading...</div>
  ) : (
    <div className="p-4">
      <Card variant="dark" bg="dark" className="text-white font-bold">
        <Alert className="text-center" variant="danger" show={showAlert}>
          *** Please log in to the system to add to cart. ***
        </Alert>
        <Alert className="text-center" variant="success" show={showSuccess}>
          *** Successful added to the cart ***
        </Alert>
        <Card.Body>
          <Card.Title className="bcartitem-bottom bcartitem-secondary pb-3 text-center">
            {data.foodType}
          </Card.Title>
          <Row className="p-4">
            <div className="col-md-8 col-xs-12 p-0">
              <AliceCarousel
                disableButtonsControls
                className="h-xs-20"
                autoPlay
                autoPlayInterval="2000"
                infinite
              >
                {data.imageUrls.map((image) => (
                  <Image
                    id={image}
                    style={{ objectFit: "cover" }}
                    className="sliderImg w-100 mh-100 mw-100 rounded"
                    cloudName="kjunn2000"
                    publicId={image}
                  />
                ))}
              </AliceCarousel>
            </div>
            <div className="col-md-4 col-xs-12">
              <Card body className="menu-detail-card text-secondary p-3">
                <Form>
                  <Card.Title className="font-bold text-dark bcartitem-bottom bcartitem-secondary pb-3 text-center">
                    {data.promtionPrice == 0 ? (
                      ""
                    ) : (
                      <Image
                        height="50px"
                        cloudName="kjunn2000"
                        publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611300577/restaurant-ordering-app-cloud-image/specialoffer_e7dkzm.gif"
                      />
                    )}
                    {data.title}
                  </Card.Title>
                  <Row className="pb-3">
                    <Col>
                      <Card.Text style={{ height: "50px" }}>
                        <p>{data.description}</p>
                      </Card.Text>
                    </Col>
                  </Row>

                  <Row className="pb-3">
                    <Col>
                      <Form.Group>
                        <Form.Label>Price: </Form.Label>
                        <p className="text-right">
                          {" "}
                          {data.promotionPrice == 0 ? (
                            <p>RM {data.price}</p>
                          ) : (
                            <p>
                              <s>RM {data.price} </s>
                              <h5 className="d-inline text-danger">
                                RM {data.promotionPrice}
                              </h5>
                            </p>
                          )}
                        </p>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control
                          className="text-right"
                          type="number"
                          placeholder="quantity"
                          name="quantity"
                          value={cartItem.quantity}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter comment:"
                          name="comment"
                          value={cartItem.comment}
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          ** Parsley, Chili, Pineaple, Celery **
                          <br />
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Card.Footer style={{ textAlign: "center" }}>
                    <Button
                      variant="success"
                      type="submit"
                      className="add-to-cart-btn p-2"
                      onClick={handleSubmit}
                    >
                      Add To Cart
                    </Button>
                  </Card.Footer>
                </Form>
              </Card>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuDetails;
