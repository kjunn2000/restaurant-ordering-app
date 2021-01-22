import React, { useState, useRef, useEffect } from "react";
import ImageUploader from "react-images-upload";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AddPromotion = () => {
  const [promotion, setPromotion] = useState({
    promotionName: "",
    dateOfExpired: "",
    discountPercentage: 0,
    promotionItems: [],
  });

  const [menu, setMenu] = useState([]);

  const history = useHistory();

  useEffect(async () => {
    const response = await axios.get(
      "http://localhost:8080/api/menu/get-all-menu"
    );
    console.log(response.data.menuList);
    const newMenu = response.data.menuList.filter(
      (each) => each.promotionPrice == 0
    );
    console.log(newMenu);
    setMenu(newMenu);
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPromotion({
      ...promotion,
      [name]: value,
    });
  };

  const handleChecked = (menuId, e) => {
    const target = e.target;
    const checked = target.checked;
    if (checked) promotion.promotionItems.push(menuId);
    else {
      setPromotion({
        ...promotion,
        promotionItems: promotion.promotionItems.filter((id) => id != menuId),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(promotion);
    await axios.post(
      "http://localhost:8080/promotion/create-promotion",
      promotion
    );
    history.push("/promotion");
  };

  return (
    <div>
      <Card className={"border border-dark bg-dark text-white m-5"}>
        <Card.Header className="h1 text-center">Create Promotion</Card.Header>
        <Form onSubmit={handleSubmit} className="p-5">
          <Card.Body>
            <Form.Group>
              <Form.Label>Promotion Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter name"
                name="promotionName"
                onChange={handleChange}
                className="bg-dark text-white"
                value={promotion.promotionName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Expired Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="dateOfExpired"
                onChange={handleChange}
                className="bg-dark text-white"
                value={promotion.dateOfExpired}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Discount Percentage</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter percentage"
                onChange={handleChange}
                name="discountPercentage"
                className="bg-dark text-white"
                value={promotion.discoutPercentage}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Promotion Items</Form.Label>
              <Table striped hover bordered variant="dark">
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Menu Id</th>
                    <th>Title</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.map((each) => (
                    <tr>
                      <td>
                        <Form.Group
                          className="text-center"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Control
                            name={each.title}
                            type="checkbox"
                            onClick={(e) => handleChecked(each.menuId, e)}
                          />
                        </Form.Group>
                      </td>
                      <td>{each.menuId}</td>
                      <td>{each.title}</td>
                      <td>{each.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Form.Group>

            <Form.Text className="text-danger">
              ** Please ensure all the details. Promotion event cannot edit once
              created. **
            </Form.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button variant="success" type="submit" className="">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default AddPromotion;
