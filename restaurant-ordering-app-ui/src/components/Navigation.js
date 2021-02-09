import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginModal from "./LoginModal";
import LogoutModal from "./LogoutModal";
import { useSelector } from "react-redux";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleOpenLogoutModal = () => {
    setShowLogoutModal(true);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll());
  // });

  // const handleScroll = () => {
  //   if (window.scrollY > 20) {
  //     document.querySelector(".navbar").className = "navbar scroll";
  //   } else {
  //     document.querySelector(".navbar").className = "navbar";
  //   }
  // };

  return (
    <Navbar
      className="navbar fixed-top text-white"
      style={{ height: "50px" }}
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand className="p-3">
        <a href="/" className="navName" style={{ color: "white" }}>
          MOODY Café
        </a>
      </Navbar.Brand>

      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        {auth.role == "" && (
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/about-us">
              ABOUT US
            </Link>
            <Link className="nav-link" to="/menu">
              MENU
            </Link>
            <Link className="nav-link" to="/question">
              Q&A
            </Link>
            <Link className="nav-link" to="/register">
              REGISTER
            </Link>
            <Link className="nav-link" to="#" onClick={handleOpenLoginModal}>
              LOGIN
            </Link>
          </Nav>
        )}
        {auth.role == "ROLE_CUSTOMER" && (
          <Nav className="ml-auto">
            <Link className="nav-link" to="/menu">
              MENU
            </Link>
            <Link className="nav-link" to="/order">
              ORDER
            </Link>
            <Link className="nav-link" to="/cart">
              CART
            </Link>
            <Link className="nav-link" to="#" onClick={handleOpenLogoutModal}>
              LOGOUT
            </Link>
          </Nav>
        )}
        {auth.role == "ROLE_STAFF" && (
          <Nav className="ml-auto">
            <Link className="nav-link" to="/dashboard">
              DASHBOARD
            </Link>
            <Link className="nav-link" to="#" onClick={handleOpenLogoutModal}>
              LOGOUT
            </Link>
          </Nav>
        )}
        {auth.role == "ROLE_ADMIN" && (
          <Nav className="ml-auto">
            <Link className="nav-link" to="/add-menu">
              ADD MENU
            </Link>
            <Link className="nav-link" to="/update-menu">
              UPDATE MENU
            </Link>
            <Link className="nav-link" to="/promotion">
              PROMOTION
            </Link>
            <Link className="nav-link" to="#" onClick={handleOpenLogoutModal}>
              LOGOUT
            </Link>
          </Nav>
        )}
      </Navbar.Collapse>
      <LoginModal handleClose={handleCloseLoginModal} show={showLoginModal} />
      <LogoutModal
        handleClose={handleCloseLogoutModal}
        show={showLogoutModal}
      />
    </Navbar>
  );
};

export default Navigation;
