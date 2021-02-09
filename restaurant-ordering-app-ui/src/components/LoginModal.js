import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { setRole } from "../redux/actions/authActions";
import { setCartItems, setOrders } from "../redux/actions/userActions";
import axios from "axios";
import LocalStorageService from "../localStorage/LocalStorageService";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROLE_CUSTOMER } from "../auth/userRole";
import { Row, Col } from "react-bootstrap";

const LoginModal = ({ show, handleClose }) => {
  const history = useHistory();

  const localStorageService = LocalStorageService.getService();

  const dispatch = useDispatch();

  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:8080/login", data);
      localStorageService.setToken(response.headers);
      const role = response.data.role;
      dispatch(setRole(role));
      localStorageService.setRole(role);
      if (role == ROLE_CUSTOMER) {
        const cartRes = await axios.get(
          "http://localhost:8080/api/user/get-cart"
        );
        dispatch(setCartItems(cartRes.data));
        const orderRes = await axios.get(
          "http://localhost:8080/api/order/get-all-order"
        );
        console.log(orderRes);
        dispatch(setOrders(orderRes.data));
      }
    } catch (error) {
      console.log(error);
    }

    handleClose();
    console.log(localStorageService.getRole());
    if (localStorageService.getRole() == "ROLE_CUSTOMER") history.push("/menu");
    else if (localStorageService.getRole() == "ROLE_STAFF")
      history.push("/dashboard");
    else if (localStorageService.getRole() == "ROLE_ADMIN")
      history.push("/add-menu");
  };

  return (
    <div className="loginModal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ alignItems: "center" }} closeButton>
          <h3
            className="header"
            style={{ fontSize: "20pt", fontFamily: "serif" }}
          >
            Login To The MOODY
          </h3>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={handleChange}
                name="username"
              />
              <Form.Text className="text-muted">
                If you forget your username or password please email us.
                <br />
                <b>moodycafe@gmail.com</b>
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;
