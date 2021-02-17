import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../asset/background.mp4";
import { Button, Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import MyMarker from "../components/MyMaker";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/menu/get-all-menu")
      .then((response) => {
        const menu = response.data.menuList;
        setMenu(menu);

        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderMenu = (type) => {
    var selectedMenu = [];
    selectedMenu = menu.filter((each) => each.foodType == type);
    return (
      <Row className="justify-content-center">
        {selectedMenu.map((each) => (
          <Col className="col-5 p-3 pt-5">
            <h3 className="menuTitle">{each.title}</h3>
            <p className="menuDes">{each.description}</p>
            <h4 className="menuPrice">RM {each.price}</h4>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div className="home bg-white">
      <Row className="p-0 m-0">
        <Col
          className="p-0 m-0"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: "2",
              top: "30%",
            }}
            className="text-white text-center"
          >
            <h1 className="heroTitle"> delicious western food</h1>
            <h5 className="heroSubTitle" style={{ fontWeight: "lighter" }}>
              MOODY CAFE ESTABLISHED SINCE 2000
            </h5>
          </div>
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
      <div className="company m-0">
        <Row className="p-0 m-0 pb-5">
          <Col className="col-12">
            <h2 className="title text-center">The Restaurant</h2>
            <h5
              className="text-center"
              style={{
                fontSize: "10pt",
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Welcome To Moody Café
            </h5>
          </Col>
        </Row>
        <Row
          className="m-0"
          style={{ height: "auto", padding: "20px", alignItems: "center" }}
        >
          <Col className="">
            <Image
              className="companyImage d-block"
              style={{
                filter: "grayscale(0.7)",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611843220/restaurant-ordering-app-cloud-image/merlin_154816902_3392dddb-fc49-445f-a736-59164056fd78-superJumbo_zecqhi.jpg"
            />
            <Image
              className="companyImage d-block"
              style={{
                filter: "grayscale(0.2)",
                paddingTop: "15px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611843219/restaurant-ordering-app-cloud-image/peppers-pan-stove-flame_gxgybh.jpg"
            />
          </Col>
          <Col className="p-5">
            <Row>
              <h5
                className="title border-bottom"
                style={{ fontWeight: "lighter" }}
              >
                WELCOME TO TASTY A JOYOUS EATERY INSPIRED BY THE SPIRIT AND
                CULTURE OF ITALIAN CUISINE.
              </h5>
            </Row>
            <Row style={{ paddingTop: "20px" }} className="w-xs-100 w-lg-85">
              <h5 className="subTitle" style={{ fontSize: "13pt" }}>
                MAKING DELICIOUS ITALIAN FOOD SINCE 1990
              </h5>
              <p className="des text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book galley of
                type and scrambled .
              </p>
            </Row>
            <Image
              className="d-block"
              style={{
                paddingTop: "15px",
              }}
              width="200px"
              height="auto"
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611887679/restaurant-ordering-app-cloud-image/output-onlinepngtools_turrv8.png"
            />
          </Col>
        </Row>
      </div>
      <div className="reservation">
        <Row className="p-0 m-0">
          <Col
            className="p-0 m-0"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                position: "absolute",
                zIndex: "2",
                top: "30%",
              }}
              className="text-white text-center"
            >
              <h1 className="heroTitle">make a reservation</h1>
              <h5
                className="heroSubTitle"
                style={{ fontWeight: "lighter", paddingBottom: "40px" }}
              >
                OPENS 8:00 AM - 10:00 PM, EVERY DAY OF THE WEEK
              </h5>
              <Button variant="success" className="text-white" href="#location">
                CONTACT US
              </Button>
            </div>

            <Image
              className="d-block"
              style={{ filter: "grayscale(85%) " }}
              width="100%"
              height="auto"
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611891142/restaurant-ordering-app-cloud-image/view-table-full-coloured-food-1680657_ettzkd.jpg"
            />
          </Col>
        </Row>
      </div>
      <div className="menu m-0">
        <Row className="p-0 m-0" style={{ height: "20vh" }}>
          <Col className="col-12">
            <h2 className="title text-center">Tasty Menu</h2>
            <h5
              className="text-center"
              style={{
                fontSize: "10pt",
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Variety Of Delicious Plate
            </h5>
          </Col>
        </Row>
        <Row
          className="m-0"
          style={{
            height: "auto",
            padding: "15px",
            textAlign: "center",
            backgroundColor: "rgba(211, 211, 211, 0.3)",
          }}
        >
          <Col>
            <Tabs defaultActiveKey="MAIN" style={{ justifyContent: "center" }}>
              <Tab eventKey="MAIN" title="MAIN" tabClassName="main">
                {renderMenu("MAIN")}
              </Tab>
              <Tab
                eventKey="SIDE_DISH"
                title="SIDE_DISH"
                tabClassName="sideDish"
              >
                {renderMenu("SIDE_DISH")}
              </Tab>
              <Tab eventKey="DRINK" title="DRINK" tabClassName="drink">
                {renderMenu("DRINK")}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
      <div className="career">
        <Row className="p-0 m-0">
          <Col
            className="p-0 m-0"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                position: "absolute",
                zIndex: "2",
                top: "30%",
              }}
              className="text-white text-center"
            >
              <h1 className="heroTitle">work at moody</h1>
              <h5
                className="heroSubTitle"
                style={{ fontWeight: "lighter", paddingBottom: "40px" }}
              >
                JOIN US ONLY IF YOU WISH TO BECOME A MOODY PERSOM
              </h5>
              <Button
                variant="success"
                className="text-white"
                onClick={() => history.push("/register")}
              >
                JOIN US
              </Button>
            </div>

            <Image
              className="d-block"
              style={{ filter: "grayscale(35%) " }}
              width="100%"
              height="auto"
              cloudName="kjunn2000"
              publicId="https://res.cloudinary.com/kjunn2000/image/upload/v1611903874/restaurant-ordering-app-cloud-image/28-01-empty-dining-room_xrcwt0.jpg"
            />
          </Col>
        </Row>
      </div>

      <div id="location" className="location m-0">
        <Row className="p-0 m-0" style={{ height: "20vh" }}>
          <Col className="col-12">
            <h2 className="title text-center">The Location | Time</h2>
            <h5
              className="text-center"
              style={{
                fontSize: "10pt",
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Headquater in Malaysia
            </h5>
          </Col>
        </Row>
        <Row
          className="m-0"
          style={{ height: "auto", padding: "20px", alignItems: "center" }}
        >
          <Col className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1478540993776!2d101.69398151404825!3d3.0550751977752153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b07526fa23d%3A0xdec6a36b8e45cc14!2sParkhill%20Residence!5e0!3m2!1sen!2smy!4v1611906665094!5m2!1sen!2smy"
              frameborder="0"
              style={{ border: "none" }}
              allowfullscreen=""
            ></iframe>
          </Col>
          <Col style={{ padding: "100px" }}>
            <Row className="pb-4">
              <h4 className="time">Opens Daily 8:00 AM - 10:00 PM</h4>
            </Row>
            <Row>
              <p className="des text-justify">
                Dear guests, you are welcomed to dine with us at Moody cafe.
                Have a pleasant dining experience. <br />
                <br />
                Bukit Jalil, 57000 Kuala Lumpur, Federal Territory of Kuala
                Lumpur <br />
                <br />
                Phone: (03)-8656 9488 <br />
                Fax: (03) 352-6220 <br />
                Email : customerservices@moody.com
              </p>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
