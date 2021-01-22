import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actions/authActions";
import { setCartItems } from "../redux/actions/userActions";
import LocalStorageService from "../localStorage/LocalStorageService";
import { useHistory } from "react-router-dom";

const LogoutModal = ({ show, handleClose }) => {
  const history = useHistory();

  const localStorageService = LocalStorageService.getService();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCartItems([]));
    dispatch(logOut());
    LocalStorageService.clearToken();
    LocalStorageService.clearRole();
    handleClose();
    history.push("/");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log Out</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure to log out?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleLogout()}>
          Log Out
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogoutModal;
