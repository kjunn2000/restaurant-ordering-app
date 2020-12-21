import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    title: "",
    description: "",
    price: 0,
    images: [],
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMenu({
      ...menu,
      [name]: value,
    });
  };

  const handleImageChange = (picture) => {
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMenuDto();
  };

  return (
    <div>
      <Card className={"border border-dark bg-dark text-white m-5"}>
        <Card.Header className="h1 text-center">Create Menu</Card.Header>
        <Form onSubmit={handleSubmit} className="p-5">
          <Card.Body>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Menu Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                onChange={handleChange}
                className="bg-dark text-white"
              />
              <Form.Text className="text-danger">
                ** Please indicate all the ingredients. **
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter description"
                onChange={handleChange}
                name="price"
                className="bg-dark text-white"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
              <Form.Label>Menu Images</Form.Label>
              <ImageUploader onChange={handleImageChange} withPreview={true} />
            </Form.Group>
          </Card.Body>
          <Card.Footer style={{textAlign:"right"}}>
            <Button variant="success" type="submit" className="">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default AddMenu;
