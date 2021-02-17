import React, { useState, useRef, useEffect } from "react";
import ImageUploader from "react-images-upload";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
import { Col, Row, Table, Spinner } from "react-bootstrap";

const EditMenu = () => {
  const history = useHistory();
  const { menuId } = useParams();
  const [menu, setMenu] = useState({
    menuId: menuId,
    title: "",
    description: "",
    price: 0,
    foodType: "",
  });

  const [foodTypes, setFoodTypes] = useState([]);

  const foodTypeControl = useRef();

  const imageUploader = useRef();

  const spinner = useRef();

  useEffect(async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/menu/${menuId}`);
      setMenu(res.data);
      console.log(res.data);
      const response = await axios.get(
        "http://localhost:8080/api/menu/get-all-food-type"
      );
      setFoodTypes(response.data);
      spinner.current.hidden = true;
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
    const uploadedImage = imageUploader.current.state.pictures.filter(
      (url) => !url.startsWith("data")
    );
    var toUploadFiles = [];
    var exist = false;
    imageUploader.current.state.files.forEach((file) => {
      exist = false;
      imageUploader.current.state.pictures.forEach((url) => {
        if (url.includes(file.name)) {
          exist = true;
        }
      });
      if (exist) toUploadFiles.push(file);
    });
    const urls = await uploadImageToCloud(toUploadFiles);
    let menuDto = {
      ...menu,
      imageUrls: [...uploadedImage, ...urls],
    };
    console.log(urls);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/menu/update-menu",
        menuDto
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(spinner.current);
    spinner.current.hidden = false;
    await sendMenuDto();
    history.push("/update-menu");
    window.location.reload(false);
  };

  return (
    <div>
      <div className="header m-0 pt-5">
        <Row className="p-0 m-0 pt-5">
          <Col className="col-12">
            <h2 className="headerTitle text-center text-white">Edit Menu</h2>
            <h5
              className="headerSubTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Make It Better
            </h5>
          </Col>
        </Row>
      </div>
      <Card className={"border border-dark bg-dark text-white m-5"}>
        <Form onSubmit={handleSubmit} className="p-5">
          <Card.Body>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Menu Id</Form.Label>
              <Form.Control
                required
                type="text"
                name="menuId"
                readOnly={true}
                className="bg-dark text-white"
                value={menu.menuId}
              />
            </Form.Group>
            <Form.Group>
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
                className="bg-dark text-white"
                onChange={handleChange}
                name="foodType"
                ref={foodTypeControl}
                value={menu.foodType}
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
                withPreview={true}
                defaultImages={menu.imageUrls}
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button variant="success" type="submit" className="">
              <Spinner
                ref={spinner}
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Confirm Edit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default EditMenu;
