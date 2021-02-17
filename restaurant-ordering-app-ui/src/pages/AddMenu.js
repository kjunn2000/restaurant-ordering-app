import React, { useState, useRef, useEffect } from "react";
import ImageUploader from "react-images-upload";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    title: "",
    description: "",
    price: 0,
    foodType: "",
    images: [],
  });

  const [foodTypes, setFoodTypes] = useState([]);

  const [showAlert, setShowAlert] = useState(false);

  const foodTypeControl = useRef();

  const imageUploader = useRef();

  useEffect(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/menu/get-all-food-type"
      );
      console.log(response.data);
      setFoodTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMenu({
      ...menu,
      [name]: value,
    });
  };

  const handleImageChange = (picture, urls) => {
    console.log(picture);
    console.log(urls);
    setMenu({ ...menu, images: picture });
  };

  const uploadImageToCloud = async (allImages) => {
    let imageUrls = [];
    var image;
    for (image of allImages) {
      let formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "v780esoc");
      let res = await axios.post(
        "https://api.cloudinary.com/v1_1/kjunn2000/image/upload",
        formData
      );
      imageUrls.push(res.data.secure_url);
    }
    return imageUrls;
  };

  const sendMenuDto = async () => {
    const imageUrls = await uploadImageToCloud(menu.images);
    let menuDto = {
      ...menu,
      imageUrls,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/menu/add-menu",
        menuDto
      );
    } catch (error) {
      console.log(error);
    }
  };

  const clearValue = () => {
    setMenu({
      title: "",
      description: "",
      price: 0,
      images: [],
    });
    foodTypeControl.current.value = "";
    imageUploader.current.clearPictures();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMenuDto();
    clearValue();
  };

  return (
    <div className="addMenu bg-dark text-white pt-5">
      <div className="header m-0 pt-5">
        <Row className="p-0 m-0 pb-5">
          <Col className="col-12">
            <h2 className="headerTitle text-center">Create New Menu</h2>
            <h5
              className="headerSubTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              New Menu
            </h5>
          </Col>
        </Row>
      </div>
      <div
        className="main p-5"
        style={{ backgroundColor: "rgba(22, 22, 22, 0.57)" }}
      >
        <Card
          // style={{ backgroundColor:  }}
          className={"border border-dark bg-dark text-white m-5"}
        >
          <Form onSubmit={handleSubmit} className="p-5">
            <Card.Body>
              <Form.Group controlId="formBasicTitle">
                <Alert variant="success" show={showAlert}>
                  Successful added a new food item !
                </Alert>
                <Form.Label>Menu Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  onChange={handleChange}
                  className="bg-dark text-white"
                  value={menu.title}
                />
              </Form.Group>

              <Form.Group controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter description"
                  name="description"
                  onChange={handleChange}
                  className="bg-dark text-white"
                  value={menu.description}
                />
                <Form.Text className="text-danger">
                  ** Please indicate all the ingredients. **
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter description"
                  onChange={handleChange}
                  name="price"
                  className="bg-dark text-white"
                  value={menu.price}
                />
              </Form.Group>

              <Form.Group controlId="formBasicFoodType">
                <Form.Label>Food Types</Form.Label>
                <Form.Control
                  required
                  as="select"
                  multiple
                  className="bg-dark text-white"
                  onChange={handleChange}
                  name="foodType"
                  ref={foodTypeControl}
                >
                  {foodTypes.map((foodType) => (
                    <option value={foodType}>{foodType}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicImages">
                <Form.Label>Menu Images</Form.Label>
                <ImageUploader
                  ref={imageUploader}
                  onChange={handleImageChange}
                  withPreview={true}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button variant="success" type="submit" className="">
                Submit
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default AddMenu;
