import React, { useState, useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole } from "../redux/actions/authActions";
import axios from "axios";
import LocalStorageService from "../localStorage/LocalStorageService";

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
    console.log(user);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/log/register",
        user
      );
      console.log(res);
      const data = {
        username: user.username,
        password: user.password,
      };
      console.log(data);

      try {
        const response = await axios.post("http://localhost:8080/login", data);
        localStorageService.setToken(response.headers);
        dispatch(setRole(response.headers.role));
        localStorageService.setRole(response.headers.role);
        history.push("/menu");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      errMessage.current.textContent = "** Username already existed ** ";
      return;
    }
  };

  return (
    <div>
      <Card className={"border border-dark bg-dark text-white m-5"}>
        <Card.Header className="h1 text-center">Register</Card.Header>
        <Form onSubmit={handleSubmit} className="p-5">
          <Card.Body>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={handleChange}
                className="bg-dark text-white"
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
              />
            </Form.Group>
            <Form.Text className="text-danger" id="errMessage" ref={errMessage}>
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
  );
};

export default Register;
