import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setOrders } from "../redux/actions/userActions";
import {
  Card,
  Tabs,
  Tab,
  Accordion,
  Button,
  Badge,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { Image } from "cloudinary-react";
import EditOrderModal from "../components/EditOrderModal";

const Dashboard = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [each, setEachOrder] = useState({});
  const history = useHistory();

  useEffect(async () => {
    console.log("get-all-called");
    const orderRes = await axios.get(
      "http://localhost:8080/api/order/get-all-order"
    );
    setOrder(orderRes.data);
    console.log(orderRes.data);
    setLoading(false);
  }, []);

  const handleClose = () => {
    setShowEditModal(false);
  };

  const calculateDiscount = (orderItemList, totalPrice) => {
    var total = 0;

    orderItemList.forEach((each) => {
      total = total + each.menuItem.price * each.quantity;
    });
    console.log(totalPrice - total);
    return totalPrice - total;
  };

  const handleEdit = (each) => {
    setEachOrder(each);
    setShowEditModal(true);
    // history.push({
    //   pathname: "/update-order",
    //   state: { eachOrder: each },
    // });
  };

  const updateStatus = (orderId, e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/order/update-order-status/${orderId}`)
      .then((res) => {
        console.log(order);
        const newOrderList = order.map((each) => {
          if (each.orderId == orderId) {
            if (each.orderStatus == "PENDING") {
              each.orderStatus = "PREPARING";
            } else {
              each.orderStatus = "COMPLETED";
            }
          }
          return each;
        });
        console.log(newOrderList);
        setOrder(newOrderList);
      })
      .catch((error) => console.log(error));
  };

  const renderOrderItems = (orderItems) => {
    return (
      <>
        {orderItems.map((eachOrderItem) => (
          <Card key={eachOrderItem.menuItem.menuId} className="p-3 mb-3">
            <Row>
              <Col className="col-md-4 ">
                <Image
                  className="mh-100 mw-100 rounded"
                  height="200px"
                  width="500px"
                  cloudName="kjunn2000"
                  publicId={eachOrderItem.menuItem.imageUrls[0]}
                />
              </Col>

              <Col className="col-md-4">
                <Card.Body>
                  <Card.Title className="border-bottom border-secondary pb-3 B">
                    {eachOrderItem.menuItem.title}
                  </Card.Title>
                  <Card.Text>{eachOrderItem.menuItem.description}</Card.Text>
                </Card.Body>
              </Col>
              <Col className="col-md-4">
                <Form>
                  <Col>
                    <Form.Group className="d-flex">
                      <Form.Label className="col-5">Price: </Form.Label>
                      <Form.Control
                        className="text-right col-7"
                        readOnly={true}
                        type="text"
                        placeholder="price"
                        name="price"
                        value={"RM " + eachOrderItem.menuItem.price}
                      />
                    </Form.Group>
                    <Form.Group className="d-flex">
                      <Form.Label className="col-5">Quantity:</Form.Label>
                      <Form.Control
                        readOnly={true}
                        className="text-right col-7"
                        type="number"
                        placeholder="quantity"
                        name="quantity"
                        value={eachOrderItem.quantity}
                      />
                    </Form.Group>
                    <Form.Group className="d-flex">
                      <Form.Label className="col-5">Comment:</Form.Label>
                      <Form.Control
                        readOnly={true}
                        type="text col-7"
                        placeholder="Enter comment:"
                        name="comment"
                        value={eachOrderItem.comment}
                      />
                    </Form.Group>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Card>
        ))}
      </>
    );
  };
  const renderOrders = (orderStatus) => {
    const filterOrder = order.filter(
      (each) => each.orderStatus === orderStatus
    );
    return filterOrder.length == 0 ? (
      <h1 className="headerTitle text-center p-5 text-white">
        No order available.
      </h1>
    ) : (
      <>
        {showEditModal && (
          <EditOrderModal
            eachOrder={each}
            handleClose={handleClose}
            show={showEditModal}
          />
        )}
        {filterOrder.map((each) => (
          <>
            <Card>
              <Card.Header className="d-flex float-right">
                <Col className="col-10">
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Order ID : {each.orderId}
                  </Accordion.Toggle>
                </Col>
                <Col className="col-2">
                  <Row className="h4">
                    <Badge variant="info ">
                      {each.orderTime[0]}/{each.orderTime[1]}/
                      {each.orderTime[2]}
                    </Badge>

                    <Badge variant="primary">
                      {each.orderTime[3]}:{" "}
                      {each.orderTime[4] < 10
                        ? "0" + each.orderTime[4].toString()
                        : each.orderTime[4]}
                    </Badge>
                  </Row>
                </Col>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                {renderOrderItems(each.orderItemList)}
              </Accordion.Collapse>
            </Card>
            <Card className="p-3 mb-3">
              <Row>
                <Col className="col-md-4">
                  <Form>
                    <Col>
                      <Form.Group className="d-flex">
                        <Form.Label className="col-5 text-center">
                          Customer:{" "}
                        </Form.Label>
                        <Form.Control
                          className="text-center col-7"
                          readOnly={true}
                          type="text"
                          name="username"
                          value={each.appUser.username}
                        />
                      </Form.Group>
                    </Col>
                  </Form>
                </Col>
                <Col className="col-md-4">
                  <Form>
                    <Col>
                      <Form.Group className="d-flex">
                        <Form.Label className="col-5 text-center">
                          Discount:{" "}
                        </Form.Label>
                        <Form.Control
                          className="text-center col-7"
                          readOnly={true}
                          type="number"
                          name="price"
                          value={calculateDiscount(
                            each.orderItemList,
                            each.totalPrice
                          )}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="d-flex">
                        <Form.Label className="col-5 text-center">
                          Total Price:{" "}
                        </Form.Label>
                        <Form.Control
                          className="text-center col-7"
                          readOnly={true}
                          type="number"
                          name="price"
                          value={each.totalPrice}
                        />
                      </Form.Group>
                    </Col>
                  </Form>
                </Col>
                <Col className="col-md-4 text-center">
                  {orderStatus == "PENDING" || orderStatus == "PREPARING" ? (
                    <Button
                      className="col-3"
                      readOnly
                      variant="danger"
                      onClick={() => handleEdit(each)}
                      as="input"
                      value="Edit"
                    />
                  ) : (
                    <></>
                  )}

                  {orderStatus == "PENDING" ? (
                    <Button
                      className="col-6"
                      raedOnly
                      variant="success"
                      as="input"
                      value="Prepare Now"
                      onClick={(e) => updateStatus(each.orderId, e)}
                    />
                  ) : orderStatus == "PREPARING" ? (
                    <Button
                      className="col-6"
                      raedOnly
                      variant="success"
                      as="input"
                      value="Complete"
                      onClick={(e) => updateStatus(each.orderId, e)}
                    />
                  ) : (
                    <Button
                      className="col-6"
                      raedOnly
                      variant="danger"
                      as="input"
                      value="Closed"
                    />
                  )}
                </Col>
              </Row>
            </Card>
          </>
        ))}
      </>
    );
  };

  return loading ? (
    <h1 className="text-center text-white">Loading...</h1>
  ) : (
    <div className="dashboard">
      <div className="header m-0 pt-5">
        <Row className="p-0 m-0 pt-5">
          <Col className="col-12">
            <h2 className="headerTitle text-center text-white">DASHBOARD</h2>
            <h5
              className="headerSubTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Handle Order
            </h5>
          </Col>
        </Row>
      </div>
      <Tabs defaultActiveKey="pending" id="uncontrolled-tab-example">
        <Tab eventKey="pending" title="Pending">
          <Accordion defaultActiveKey="0">{renderOrders("PENDING")}</Accordion>
        </Tab>
        <Tab eventKey="preparing" title="Preparing">
          <Accordion defaultActiveKey="0">
            {renderOrders("PREPARING")}
          </Accordion>
        </Tab>
        <Tab eventKey="completed" title="Completed">
          <Accordion defaultActiveKey="0">
            {renderOrders("COMPLETED")}
          </Accordion>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
