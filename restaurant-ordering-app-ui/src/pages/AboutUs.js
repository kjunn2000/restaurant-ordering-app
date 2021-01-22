import React, { useState } from "react";
// import pic1 from "../asset/pic1.JPG";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import pic5 from "../asset/pic5.jpg";
// import Card from "react-bootstrap/Card";
// import pic6 from "../asset/pic6.png";

const AboutUs = () => {
  const [images, setImages] = useState([]);

  const handleChange = (picture) => {
    setImages(picture);
    console.log(images);
  };

  return (
    <>
      {/* <Row>
        <img src={pic5} height="100%" width="100%" className="rounded" />
      </Row>
      <br></br>
      <Row>
        <Col>
          <h2 style={{ color: "white" }}>About Us</h2>
          <h6 style={{ color: "white" }}>
            KFC landed in Australia in 1968 with our first restaurant in
            Guildford, Sydney NSW. That was a time when long hair, flower crowns
            and lava lamps were still totally groovy, dude. Today we serve over
            2 million customers a week across 650+ restaurants. And even after
            all these years, the original secret remains under lock and key in
            our headquarters in Kentucky, USA. And no, we'll never tell. Nice
            try.
          </h6>
        </Col>
        <Col>
          <img src={pic1} height="100%" width="100%" className="rounded" />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <img src={pic1} height="100%" width="100%" className="rounded" />
        </Col>
        <Col>
          <h2 style={{ color: "white" }}>Our History</h2>
          <h6 style={{ color: "white" }}>
            KFC landed in Australia in 1968 with our first restaurant in
            Guildford, Sydney NSW.
          </h6>
        </Col>
      </Row>
      <br></br>
      <hr
        style={{
          borderTop: "2px dotted white",
        }}
      ></hr>
      <br></br>
      <Row>
        <Col>
          <Card style={{ width: "21rem" }} bg="warning">
            <Card.Body>
              <Card.Title>Mission</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem" }} bg="danger">
            <Card.Body>
              <Card.Title>Vision</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem" }} bg="info">
            <Card.Body>
              <Card.Title>Goals</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <hr
        style={{
          borderTop: "2px dotted white",
        }}
      ></hr>
      <br></br>
      <Row>
        <Col>
          <h1 style={{ color: "white" }} className="text-center B">
            Our Team
          </h1>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={pic6} />
            <Card.Body>
              <Card.Title>Tam Kai Jun</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={pic6} />
            <Card.Body>
              <Card.Title>Lim Jia Yen</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={pic6} />
            <Card.Body>
              <Card.Title>Hwang Min</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br> */}
    </>
  );
};

export default AboutUs;
