import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Image } from "cloudinary-react";
import { Container, Button, Carousel } from "react-bootstrap";
import Video from "../asset/coffee.mp4";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  const history = useHistory();

  const team = [
    {
      name: "Tam Kai Jun",
      title: "Job",
      des: "Desc",
      imgUrl:
        "https://res.cloudinary.com/kjunn2000/image/upload/v1612079072/restaurant-ordering-app-cloud-image/iandavis.0_emzmao.jpg",
    },
    {
      name: "Tam Kai Jun",
      title: "Job",
      des: "Desc",
      imgUrl:
        "https://res.cloudinary.com/kjunn2000/image/upload/v1612079072/restaurant-ordering-app-cloud-image/iandavis.0_emzmao.jpg",
    },
    {
      name: "Tam Kai Jun",
      title: "Job",
      des: "Desc",
      imgUrl:
        "https://res.cloudinary.com/kjunn2000/image/upload/v1612079072/restaurant-ordering-app-cloud-image/iandavis.0_emzmao.jpg",
    },
    {
      name: "Tam Kai Jun",
      title: "Job",
      des: "Desc",
      imgUrl:
        "https://res.cloudinary.com/kjunn2000/image/upload/v1612079072/restaurant-ordering-app-cloud-image/iandavis.0_emzmao.jpg",
    },
  ];
  const renderTeam = () => {
    return team.map((each) => (
      <Col className="p-0 m-0">
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Img variant="top" src={each.imgUrl} />
          <Card.Body className="text-center">
            <Card.Title>{each.title}</Card.Title>
            <Card.Text>{each.des}</Card.Text>
            <Row>
              <Col>
                <FontAwesomeIcon
                  className="deleteBtn d-flex text-right"
                  icon={"facebook"}
                />
                <FontAwesomeIcon
                  className="deleteBtn d-flex text-right"
                  icon={"facebook"}
                />
                <FontAwesomeIcon
                  className="deleteBtn d-flex text-right"
                  icon={"facebook"}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    ));
  };
  return (
    <div className="aboutUs bg-white pt-5 p-0 m-0" style={{}}>
      <div className="header m-0 pt-5">
        <Row className="p-0 m-0 pb-5">
          <Col className="col-12">
            <h2 className="title text-center">MOODY Café</h2>
            <h5
              className="subTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Story of Us
            </h5>
          </Col>
        </Row>
      </div>
      <div className="imageBorar">
        <Row className="p-0 m-0">
          <Col className="p-0 m-0">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079054/restaurant-ordering-app-cloud-image/QA_Lamar_Moore_cr_Ryan_Forbes_LD_t1024_aq4wkl.jpg"
            />
          </Col>
          <Col className="p-0 m-0">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079012/restaurant-ordering-app-cloud-image/Ruben_Anandha_arez04.jpg"
            />
          </Col>
          <Col className="p-0 m-0">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079072/restaurant-ordering-app-cloud-image/iandavis.0_emzmao.jpg"
            />
          </Col>
          <Col className="p-0 m-0">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612077535/restaurant-ordering-app-cloud-image/nunoacacio_20200120_172619_0846_2x_kkkuhy.jpg"
            />
          </Col>
        </Row>
        <Row className="p-0 m-0">
          <Col className="p-0 m-0">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079157/restaurant-ordering-app-cloud-image/Adrienne-Wright-Top-Chef_koyaww.jpg"
            />
          </Col>
          <Col className="p-0 m-0">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079143/restaurant-ordering-app-cloud-image/civ_24_hwdeww.png"
            />
          </Col>
          <Col className="p-0 m-0">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079126/restaurant-ordering-app-cloud-image/90_ym2heg.jpg"
            />
          </Col>
          <Col className="p-0 m-0">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079106/restaurant-ordering-app-cloud-image/Chef_Andre_Rush_xzinxz.jpg"
            />
          </Col>
        </Row>
      </div>

      <div className="company m-0">
        <Row
          className="m-0"
          style={{ height: "auto", padding: "20px", alignItems: "center" }}
        >
          <Col className="p-5">
            <Row className="p-0 m-0 pb-5">
              <Col className="col-12">
                <h2 className="title text-center">The Story</h2>
                <h5
                  className="subTitle text-center"
                  style={{
                    fontWeight: "lighter",
                    color: "#80604D",
                  }}
                >
                  Background of MOODY
                </h5>
              </Col>
            </Row>
            <Row>
              <h5
                className="title border-bottom"
                style={{ fontWeight: "lighter" }}
              >
                MOODY Café, A PLACE IN YOUR DEPTH HEART | STORY
              </h5>
            </Row>
            <Row style={{ paddingTop: "20px" }} className="w-xs-100 w-lg-85">
              <h5 className="subTitle" style={{ fontSize: "13pt" }}>
                MAKING DELICIOUS WESTERN FOOD SINCE 2020
              </h5>
              <p className="des text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book galley of
                type and scrambled .
              </p>
            </Row>
          </Col>
          <Col className="">
            <video
              className="w-100 h-auto"
              style={{ filter: "grayscale(35%)" }}
              autoPlay={true}
              loop
              muted
              src={Video}
              type="video/mp4"
            />
          </Col>
        </Row>
      </div>

      <div
        className="service pt-5  pb-5"
        style={{ backgroundColor: "#d3d3d3" }}
      >
        <Col className="col-12 pt-5 pb-5">
          <h1 className="title text-center">The Services</h1>
          <h5
            className="subTitle text-center"
            style={{
              fontWeight: "lighter",
              color: "#d3ae87",
            }}
          >
            We provide anything you need
          </h5>
        </Col>
        <Carousel>
          <Carousel.Item className="text-center">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
                height: "500px",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079106/restaurant-ordering-app-cloud-image/Chef_Andre_Rush_xzinxz.jpg"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <div className="blinkingBtn">
                <a
                  onClick={() => history.push("/menu")}
                  style={{ color: "aqua" }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  The Menu
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
                height: "500px",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079106/restaurant-ordering-app-cloud-image/Chef_Andre_Rush_xzinxz.jpg"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <div className="blinkingBtn">
                <a
                  onClick={() => history.push("/menu")}
                  style={{ color: "aqua" }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  The Menu
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <Image
              className="mw-100 mh-100 p-0 m-0"
              style={{
                filter: "grayscale(0.4)",
                marginLeft: "auto",
                marginRight: "auto",
                height: "500px",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1612079106/restaurant-ordering-app-cloud-image/Chef_Andre_Rush_xzinxz.jpg"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <div className="blinkingBtn">
                <a
                  onClick={() => history.push("/menu")}
                  style={{ color: "aqua" }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  The Menu
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="outTeam pt-5 pb-5">
        <div className="m-0 pt-5">
          <Row className="p-0 m-0 pb-5">
            <Col className="col-12">
              <h2 className="title text-center">The Team</h2>
              <h5
                className="subTitle text-center"
                style={{
                  fontWeight: "lighter",
                }}
              >
                Teamwork make us perfect
              </h5>
            </Col>
          </Row>
          <Row className="p-0 m-0 text-center" style={{}}>
            {renderTeam()}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
