import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import pic1 from "../asset/pic1.JPG";
// import pic2 from "../asset/pic2.JPG";
// import pic3 from "../asset/pic3.JPG";
// import pic4 from "../asset/pic4.JPG";
// import pic5 from "../asset/pic5.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [images, setImages] = useState([]);

  const handleChange = (picture) => {
    setImages(picture);
    console.log(images);
  };

  return (
    <>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic1}
            alt="First slide"
            height="100%"
            width="100%"
            className="rounded"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            alt="Third slide"
            height="100%"
            width="100%"
            className="rounded"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Second slide"
            height="100%"
            width="100%"
            className="rounded"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <Row>
        <Col>
          <Card style={{ width: "21rem", height: "25rem" }}>
            <img
              style={{ width: "21rem", height: "25rem", position: "absolute" }}
              src={pic3}
              className="mh-100 mw-100 rounded"
            />
            <h1 style={{ zIndex: "2" }} className="text-center B">
              Hello
            </h1>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem", height: "25rem" }}>
            <img
              style={{ width: "21rem", height: "25rem", position: "absolute" }}
              src={pic3}
              className="mh-100 mw-100 rounded"
            />
            <h1 style={{ zIndex: "2" }} className="text-center B">
              Hello
            </h1>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem", height: "25rem" }}>
            <img
              style={{ width: "21rem", height: "25rem", position: "absolute" }}
              src={pic3}
              className="mh-100 mw-100 rounded"
            />
            <h1 style={{ zIndex: "2" }} className="text-center B">
              Hello
            </h1>
          </Card>
        </Col>
      </Row>
      <br></br>
      <hr
        style={{
          borderTop: "2px dotted white",
        }}
      ></hr>
      <Row>
        <h3 style={{ color: "white" }}>
          How Our Online Ordering System Works?
        </h3>
      </Row>
      <Row>
        <img src={pic5} height="100%" width="100%" />
      </Row>
      <br></br> */}
    </>
  );
};

export default Home;
