import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import axios from "axios";
import LocalStorageService from "../localStorage/LocalStorageService";
import { useHistory } from "react-router-dom";

const UpdateOrder = (props) => {
//   const [order, setOrder] = useState(eachOrder);
//   const history = useHistory();
  console.log(props);
//   const calculateTotalPrice = (cart) => {
//     var total = 0;
//     order.orderItemList.map((each) => {
//       total = total + each.menuItem.price * each.quantity;
//     });
//     setOrder({ ...order, totalPrice: total });
//   };

//   const handleChange = (cartItemId, e) => {
//     const value = e.target.value;
//     const attribute = e.target.name;
//     const newOrderItemList = order.orderItemList.map((each) => {
//       if (each.cartItemId == cartItemId) {
//         each[attribute] = value;
//       }
//       return each;
//     });
//     setOrder({ ...order, orderItemList: newOrderItemList });

//     if (attribute == "quantity") calculateTotalPrice(newOrderItemList);
//   };

//   const handleClose = (e) => {
//     e.preventDefault();
//     history.push("/dashboard");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const orderItems = [];
//     order.orderItemList.map((each) => {
//       const data = {};
//       data.cartItemId = each.cartItemId;
//       data.quantity = each.quantity;
//       data.comment = each.comment;
//       orderItems.push(data);
//     });
//     const dto = {
//       orderId: order.orderId,
//       totalPrice: order.totalPrice,
//       orderItems,
//     };
//     axios
//       .post("http://localhost:8080/api/order/update-order", dto)
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//     handleClose();
//     history.push("/dashboard");
//   };

//   const renderOrderItems = (orderItems) => {
//     return (
//       <div>
//         Hello
//         {orderItems.map((eachOrderItem) => (
//           <Card key={eachOrderItem.menuItem.menuId} className="p-2 m-0">
//             <Row className="p-0 m-0">
//               <Col className="col-md-4 p-0 m-0">
//                 <Card.Body className="p-0 m-0">
//                   <Card.Title className="border-bottom border-secondary B p-0 m-0 text-center align-items-center h-100">
//                     {eachOrderItem.menuItem.title}
//                   </Card.Title>
//                 </Card.Body>
//               </Col>
//               <Col className="col-md-8 p-0 pl-2 m-0">
//                 <Form className="p-0 m-0">
//                   <Form.Group className="d-flex p-0 m-0">
//                     <Form.Label className="col-5 p-0 m-0">Quantity:</Form.Label>
//                     <Form.Control
//                       className="text-right"
//                       type="number"
//                       placeholder="quantity"
//                       name="quantity"
//                       value={eachOrderItem.quantity}
//                       onChange={(e) =>
//                         handleChange(eachOrderItem.cartItemId, e)
//                       }
//                     />
//                   </Form.Group>
//                   <Form.Group className="d-flex p-0 m-0">
//                     <Form.Label className="col-5 p-0 m-0">Comment:</Form.Label>
//                     <Form.Control
//                       className=""
//                       type="text"
//                       placeholder="Enter comment:"
//                       name="comment"
//                       value={eachOrderItem.comment}
//                       onChange={(e) =>
//                         handleChange(eachOrderItem.cartItemId, e)
//                       }
//                     />
//                   </Form.Group>
//                 </Form>
//               </Col>
//             </Row>
//           </Card>
//         ))}
//       </div>
//     );
//   };

  return (
    <Form className="p-0 m-0">
      {/* <Form.Group className="d-flex p-0 m-0" controlId="formBasicUsername">
        <Form.Label className="col-3 p-0 m-0 text-center">
          Order ID:{" "}
        </Form.Label>
        <Form.Control
          className="col-9 p-0 m-0"
          type="text"
          readOnly={true}
          value={order.orderId}
          name="orderId"
        />
      </Form.Group>

      <Form.Group className="d-flex p-0 m-0" controlId="formBasicUsername">
        <Form.Label className="col-3 p-0 m-0 text-center">
          Customer:{" "}
        </Form.Label>
        <Form.Control
          className="col-9 p-0 m-0"
          type="text"
          readOnly={true}
          value={order.appUser.username}
          name="username"
        />
      </Form.Group>
      {renderOrderItems(order.orderItemList)}
      <Form.Group
        className="d-flex text-right py-2 m-0 px-3"
        controlId="formBasicUsername"
      >
        <Form.Label className="col-4 p-0 m-0"></Form.Label>
        <Form.Label className="col-6 pt-1 m-0">Total Price (RM) : </Form.Label>
        <Form.Control
          className="col-2 p-0 m-0 "
          type="number"
          readOnly={true}
          value={order.totalPrice}
          name="totalPrice"
        />
      </Form.Group>

      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Save
      </Button> */}
    </Form>
  );
};

export default UpdateOrder;
