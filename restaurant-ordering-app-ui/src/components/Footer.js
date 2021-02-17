import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const history = useHistory();

  return (
    <div className="footer">
      <Row className="main text-white  m-0 text-center">
        <Col>
          <h4 className="title">ABOUT US</h4>
          <p className="des text-justify">
            Duis leo justo, condimentum at purus eu,Aenean sed dolor sem. Etiam
            massa libero, auctor vitae egestas et, accumsan quis nunc.Duis leo
            justo, condimentum at purus eu, posuere pretium tellus. s
          </p>
          <Button
            className="float-right"
            onClick={() => history.push("/about-us")}
            variant="outline-danger"
          >
            READ MORE
          </Button>{" "}
        </Col>
        <Col>
          <h4 className="title">REGISTER</h4>
          <Row>
            <Col className="col-xs-12 col-lg-6">
              <Image
                style={{ filter: "grayscale(0.8)" }}
                className="img rounded"
                width="100%"
                cloudName="kjunn2000"
                publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611915028/restaurant-ordering-app-cloud-image/studio-fashion-portrait-beautiful-funny-260nw-524269150_np7sfx.jpg"
              />
            </Col>
            <Col className="col-xs-12 col-lg-6">
              <p className="des text-justify pb-1">
                Register right now if you are no mood.
              </p>
              <a
                className="registerBtn float-left"
                onClick={() => history.push("/register")}
              >
                REGISTER
              </a>
            </Col>
          </Row>
        </Col>
        <Col className="text-center">
          <h4 className="title">CONTACT US</h4>
          <div>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              color="whitesmoke"
              size="1x"
            />
          </div>
          <p>
            Bukit Jalil, 57000 Kuala Lumpur, Federal Territory of Kuala Lumpur
          </p>
          <div>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              color="whitesmoke"
              size="1x"
            />
          </div>
          <p>(03)-8656 9488</p>
          <div>
            <FontAwesomeIcon icon={faEnvelope} color="whitesmoke" size="1x" />
          </div>
          <p>customerservices@moody.com</p>
        </Col>
      </Row>
      <Row className="p-0 m-0">
        <Col>
          <p
            className="text-white text-center"
            style={{ fontWeight: "lighter" }}
          >
            © 2021.Moody Jun.All rights reserved. Designed with by Kai Jun
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
