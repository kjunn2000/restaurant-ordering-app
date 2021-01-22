import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCartItems, addOrder } from "../redux/actions/userActions";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import { Image } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

  useEffect(async () => {
    try {
      const cartRes = await axios.get(
        "http://localhost:8080/api/user/get-cart"
      );
      dispatch(setCartItems(cartRes.data));
      setCart(cartRes.data);
      calculateTotalPrice(cartRes.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const calculateTotalPrice = (cart) => {
    var total = 0;
    cart.map((each) => {
      if (each.menuItem.promotionPrice != 0) {
        total = total + each.menuItem.promotionPrice * each.quantity;
      } else {
        total = total + each.menuItem.price * each.quantity;
      }
    });
    setTotalPrice(total);
  };

  const handleChange = (cartItemId, e) => {
    const value = e.target.value;
    const attribute = e.target.name;
    const newCart = cart.map((each) => {
      if (each.cartItemId == cartItemId) {
        each[attribute] = value;
      }
      return each;
    });

    setCart(newCart);

    if (attribute == "quantity") calculateTotalPrice(newCart);
  };

  const handleDelete = (cartItemId) => {
    const newCart = cart.filter((each) => each.cartItemId !== cartItemId);
    setCart(newCart);
    dispatch(setCartItems(newCart));
    axios.delete(`http://localhost:8080/api/user/delete-cart/${cartItemId}`);
    calculateTotalPrice(newCart);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    dispatch(setCartItems(cart));
    const dto = [];
    cart.map((each) => {
      console.log(each);
      const data = {};
      data.cartItemId = each.cartItemId;
      data.quantity = each.quantity;
      data.comment = each.comment;
      dto.push(data);
    });
    axios
      .post("http://localhost:8080/api/user/update-cart", dto)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dto = {
      totalPrice: totalPrice,
    };

    axios
      .post("http://localhost:8080/api/order/place-order", dto)
      .then((response) => {
        console.log(response.data);
        dispatch(addOrder(response.data));
        clearAll();
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
        history.push("/order");
      })
      .catch((error) => console.log(error));
  };

  const clearAll = () => {
    setCart([]);
    dispatch(setCartItems([]));
    setTotalPrice(0);
  };

  const renderCart = cart.map((eachCartItem) => (
    <Card key={eachCartItem.menuItem.menuId} className="p-3 mb-3">
      <Row>
        <Col className="col-md-4 ">
          <Image
            className="mh-100 mw-100 rounded"
            height="200px"
            width="500px"
            cloudName="kjunn2000"
            publicId={eachCartItem.menuItem.imageUrls[0]}
          />
        </Col>

        <Col className="col-md-3">
          <Card.Body>
            <Card.Title className="border-bottom border-secondary pb-3 B">
              {eachCartItem.menuItem.promotionPrice == 0 ? (
                ""
              ) : (
                <Image
                  height="50px"
                  cloudName="kjunn2000"
                  publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611300577/restaurant-ordering-app-cloud-image/specialoffer_e7dkzm.gif"
                />
              )}
              {eachCartItem.menuItem.title}
            </Card.Title>
            <Card.Text>{eachCartItem.menuItem.description}</Card.Text>
          </Card.Body>
        </Col>
        <Col className="col-md-4">
          <Form>
            <Col>
              <Form.Group className="d-flex">
                <Form.Label className="col-5">Price: </Form.Label>
                <Col className="text-right">
                  {" "}
                  {eachCartItem.menuItem.promotionPrice == 0 ? (
                    <p>RM {eachCartItem.menuItem.price}</p>
                  ) : (
                    <p>
                      <s>RM {eachCartItem.menuItem.price} </s>
                      <h5 className="d-inline text-danger">
                        RM {eachCartItem.menuItem.promotionPrice}
                      </h5>
                    </p>
                  )}
                </Col>
              </Form.Group>
              <Form.Group className="d-flex">
                <Form.Label className="col-5">Quantity:</Form.Label>
                <Form.Control
                  className="text-right col-7"
                  type="number"
                  placeholder="quantity"
                  name="quantity"
                  value={eachCartItem.quantity}
                  onChange={(e) => handleChange(eachCartItem.cartItemId, e)}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Group className="d-flex">
                <Form.Label className="col-5">Comment:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter comment:"
                  name="comment"
                  value={eachCartItem.comment}
                  onChange={(e) => handleChange(eachCartItem.cartItemId, e)}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Text className="text-muted text-center">
                ** Parsley, Chili, Pineaple, Celery **
                <br />
              </Form.Text>
            </Col>
          </Form>
        </Col>
        <Col className="col-md-1">
          <FontAwesomeIcon
            role="button"
            className="deleteBtn d-flex text-right"
            icon={faMinusCircle}
            color="red"
            size="2x"
            onClick={() => handleDelete(eachCartItem.cartItemId)}
          />
        </Col>
      </Row>
    </Card>
  ));

  return loading ? (
    <h1>Loading...</h1>
  ) : cart.length == 0 ? (
    <>
      <Alert className="text-center" variant="success" show={showSuccess}>
        *** Successful added to the cart ***
      </Alert>
      <h1 className="h1 text-white text-center pt-5 B">
        No food item in the cart{" "}
      </h1>
    </>
  ) : (
    <Container>
      <Row>
        <Col className="h1 text-center text-white py-5">Cart</Col>
      </Row>
      {renderCart}

      <Card className="p-3 mb-3">
        <Row>
          <Col className="col-md-4 "></Col>

          <Col className="col-md-3"></Col>
          <Col className="col-md-4">
            <Form>
              <Col>
                <Form.Group className="d-flex">
                  <Form.Label className="col-5">Total Price: </Form.Label>
                  <Form.Control
                    className="text-right col-7"
                    readOnly={true}
                    type="number"
                    name="price"
                    value={totalPrice}
                  />
                </Form.Group>
                <Form.Group>
                  <Button onClick={handleSubmit} className="float-right">
                    Place Order
                  </Button>
                </Form.Group>
              </Col>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Cart;
