import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  ButtonGroup,
  Card,
  Table,
  Modal,
  Col,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Promotion = () => {
  const [loading, setLoading] = useState(true);
  const [promotionList, setPromotionList] = useState([]);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [modalItems, setModalItems] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      "http://localhost:8080/promotion/get-all-promotion"
    );
    console.log(response.data);

    setPromotionList(response.data);

    setLoading(false);
  }, []);

  const handleUpdate = (promotionId) => {
    axios.post(
      `http://localhost:8080/promotion/update-promotion-status/${promotionId}`
    );
    const newList = promotionList.map((promotion) => {
      if (promotion.promotionId == promotionId) {
        promotion.active = !promotion.active;
      }
      return promotion;
    });
    setPromotionList(newList);
  };

  const handleDelete = (promotionId) => {
    axios.delete(
      `http://localhost:8080/promotion/delete-promotion/${promotionId}`
    );
    setPromotionList(
      promotionList.filter((promotion) => promotion.promotionId != promotionId)
    );
  };

  return (
    <div className="promotion pt-5 bg-dark">
      <div className="header m-0 pt-5">
        <Row className="p-0 m-0 pb-5">
          <Col className="col-12">
            <h2 className="headerTitle text-center text-white">Promotion</h2>
            <h5
              className="headerSubTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Need Offer
            </h5>
          </Col>
        </Row>
      </div>
      <Card style={{ backgroundColor: "rgba(22, 22, 22, 0.57)" }}>
        <Card.Body>
          <Card.Title>
            <Button
              variant="success"
              className="float-right p-2"
              onClick={() => history.push("/add-promotion")}
            >
              Add New Promotion
            </Button>
          </Card.Title>

          {promotionList.length == 0 ? (
            <h1 className="headerTitle text-center p-5 text-white">
              No promotion available.
            </h1>
          ) : (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Expired Date</th>
                  <th>Percentage</th>
                  <th>Active</th>
                  <th>Menu Items</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {promotionList.map((promotion, index) => (
                  <tr className="text-center">
                    <td>{index + 1}</td>
                    <td>{promotion.promotionName}</td>
                    <td>{promotion.dateOfExpired}</td>
                    <td>{promotion.discountPercentage}</td>
                    <td>
                      {promotion.active ? (
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="green"
                          size="2x"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faMinusCircle}
                          color="red"
                          size="2x"
                        />
                      )}
                    </td>
                    <td>
                      <Button
                        variant="outline-info"
                        onClick={() => {
                          setModalItems(promotion.promotionItems);
                          setShowModal(true);
                        }}
                      >
                        View
                      </Button>
                      <Modal show={showModal}>
                        <Modal.Header closeButton>
                          <Modal.Title>Promotion Menu Items</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Table>
                            <thead>
                              <tr>
                                <th>Menu Id</th>
                                <th>Title</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {modalItems.map((each) => (
                                <tr>
                                  <td>{each.menuId}</td>
                                  <td>{each.title}</td>
                                  <td>{each.price}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </td>
                    <td>
                      <ButtonGroup>
                        {promotion.active ? (
                          <Button
                            variant="warning"
                            onClick={() => handleUpdate(promotion.promotionId)}
                          >
                            Inactive
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            onClick={() => handleUpdate(promotion.promotionId)}
                          >
                            Active
                          </Button>
                        )}
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(promotion.promotionId)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Promotion;
