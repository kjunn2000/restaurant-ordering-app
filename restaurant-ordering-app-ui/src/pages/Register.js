import React, { useState, useRef } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole } from "../redux/actions/authActions";
import axios from "axios";
import LocalStorageService from "../localStorage/LocalStorageService";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const localStorageService = LocalStorageService.getService();

  const dispatch = useDispatch();

  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const confirmedPassword = useRef();
  const errMessage = useRef();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== confirmedPassword.current.value) {
      errMessage.current.textContent =
        "** Confimred Password is not same with the actual password ** ";
      return;
    }
    errMessage.current.textContent = "";
    try {
      const res = await axios.post(
        "http://localhost:8080/api/log/register",
        user
      );
      if (res.data == "Username existed") {
        errMessage.current.textContent = "** Username already registered ** ";
        return;
      }
      const data = {
        username: user.username,
        password: user.password,
      };

      try {
        const response = await axios.post("http://localhost:8080/login", data);
        localStorageService.setToken(response.headers);
        const role = response.data.role;
        dispatch(setRole(role));
        localStorageService.setRole(role);
        history.push("/menu");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      errMessage.current.textContent = "** Username already registered ** ";
      return;
    }
  };

  return (
    <div className="register pt-5 bg-light">
      <div className="header m-0 pb-5" style={{ paddingTop: "100px" }}>
        <Row className="p-0 m-0">
          <Col className="col-12">
            <h2 className="headerTitle text-center">The Registration</h2>
            <h5
              className="headerSubTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#6F4E37",
              }}
            >
              Welcome to our family
            </h5>
          </Col>
        </Row>
      </div>
      <div className="p-5" style={{ backgroundColor: "#d3d3d3" }}>
        <Card className={"card border border-dark text-white p-5"}>
          <Form onSubmit={handleSubmit} className="form p-5">
            <Card.Body>
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  onChange={handleChange}
                  className="bg-dark text-white"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicDescription">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  className="bg-dark text-white"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicDescription">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  name="password"
                  className="bg-dark text-white"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicDescription">
                <Form.Label>Confirmed Password</Form.Label>
                <Form.Control
                  ref={confirmedPassword}
                  type="password"
                  placeholder="Retype password"
                  name="confirmedPassword"
                  className="bg-dark text-white"
                  required
                />
              </Form.Group>
              <Form.Text
                className="text-danger font-weight-bold"
                id="errMessage"
                ref={errMessage}
                style={{ fontSize: "13pt" }}
              >
                ** Please provide the correct input. **
              </Form.Text>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button variant="success" type="submit" className="">
                Register
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
