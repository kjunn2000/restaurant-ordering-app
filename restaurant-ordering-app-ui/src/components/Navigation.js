import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  return (
    <Navbar
      className="border-bottom fixed-top"
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand className="navName">Moody Canteen</Navbar.Brand>

      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/menu">
            MENU
          </Link>
          <Link className="nav-link" to="/add-menu">
            ADD MENU
          </Link>
          <Link className="nav-link" to="/register">
            REGISTER
          </Link>
          {!auth.isAuthenticated && (
            <Link className="nav-link" to="#" onClick={handleOpenLoginModal}>
              LOGIN
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
      <LoginModal handleClose={handleCloseLoginModal} show={showLoginModal} />
    </Navbar>
  );
};

export default Navigation;
