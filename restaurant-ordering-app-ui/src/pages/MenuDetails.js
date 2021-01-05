import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const [order, setOrder] = useState({
    quantity: 1,
  });
  // const user = useSelector(state=>state.user);

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
    setOrder({ ...order, [name]: value });
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
    // const dto = {
    //   userId:user.userId,
    //   menuId,
    // };
  };

  return loading ? (
    <div className="h1 text-center text-white">Loading...</div>
  ) : (
    <div className="p-4">
      <Card variant="dark" bg="dark" className="text-white font-bold">
        <Alert className="text-center" variant="danger" show={showAlert}>
          *** Please log in to the system to add to cart. ***
        </Alert>
        <Card.Body>
          <Card.Title className="border-bottom border-secondary pb-3 text-center">
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
                  <Card.Title className="font-bold text-dark border-bottom border-secondary pb-3 text-center">
                    {data.title}
                  </Card.Title>
                  <Row className="pb-3">
                    <Col>
                      <Card.Text style={{ height: "100px" }}>
                        <p>{data.description}</p>
                      </Card.Text>
                    </Col>
                  </Row>

                  <Row className="pb-3">
                    <Col>
                      <Form.Group>
                        <Form.Label>Price: </Form.Label>
                        <Form.Control
                          className="text-right"
                          readOnly="true"
                          type="text"
                          placeholder="price"
                          name="price"
                          value={"RM " + data.price}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control
                          className="text-right"
                          type="number"
                          placeholder="quantity"
                          name="quantity"
                          value={order.quantity}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      {/* <Form.Group>
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter comment:"
                          name="comment"
                          value={order.comment}
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          ** Parsley, Chili, Pineaple, Celery **
                          <br />
                        </Form.Text>
                      </Form.Group> */}
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