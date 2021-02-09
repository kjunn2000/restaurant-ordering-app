import React, { useEffect, useState } from "react";
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

const Order = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(async () => {
    const orderRes = await axios.get(
      "http://localhost:8080/api/order/get-order"
    );
    console.log(orderRes.data);
    setOrder(orderRes.data);
    dispatch(setOrders(orderRes.data));
    setLoading(false);
  }, []);

  const calculateDiscount = (orderItemList, totalPrice) => {
    var total = 0;

    orderItemList.forEach((each) => {
      total = total + each.menuItem.price * each.quantity;
    });
    console.log(totalPrice - total);
    return totalPrice - total;
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
      <h2 className="text-white text-center">No order available</h2>
    ) : (
      filterOrder.map((each) => (
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
                    {each.orderTime[0]}/{each.orderTime[1]}/{each.orderTime[2]}
                  </Badge>

                  <Badge variant="primary">
                    {each.orderTime[3]}:{each.orderTime[4]}
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
              <Col className="col-md-8 "></Col>

              <Col className="col-md-4">
                <Form>
                  <Col>
                    <Form.Group className="d-flex">
                      <Form.Label className="col-5">Discount: </Form.Label>
                      <Form.Control
                        className="text-right col-7"
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
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-8 "></Col>

              <Col className="col-md-4">
                <Form>
                  <Col>
                    <Form.Group className="d-flex">
                      <Form.Label className="col-5">Total Price: </Form.Label>
                      <Form.Control
                        className="text-right col-7"
                        readOnly={true}
                        type="number"
                        name="price"
                        value={each.totalPrice}
                      />
                    </Form.Group>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Card>
        </>
      ))
    );
  };

  return loading ? (
    <h1 className="text-center text-white">Loading...</h1>
  ) : (
    <div className="dashboard">
      <div className="header m-0 pt-5">
        <Row className="p-0 m-0 pb-5">
          <Col className="col-12">
            <h2 className="title text-center text-white">Update Menu</h2>
            <h5
              className="subTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#80604D",
              }}
            >
              Only Perfect
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

export default Order;
