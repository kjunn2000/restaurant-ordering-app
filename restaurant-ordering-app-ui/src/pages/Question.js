import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  const questions = [
    {
      type: "general",
      title: "1. What is this website for?",
      ans:
        "It is a web-based online food ordering system. Instead of providing information on our food, service and restaurant, we offer our customers to browse the menu and place orders by themselves. Besides, our system allows customers to track their order status and order history.",
    },
    {
      type: "general",
      title: "2. Can I browse the website without internet connection?",
      ans:
        "No, an internet connection is required to ensure you are viewing the latest information on the website.",
    },
    {
      type: "general",
      title: "3. I can't browse the website, how can I do?",
      ans: (
        <div>
          <p>If this happens, you are recommended to: </p>
          <p>a. Check your internet connection</p>
          <p>b. Refresh the website</p>
          <p>c. Contact us for help</p>
        </div>
      ),
    },

    {
      type: "order",
      title: "1. How do I place an order?",
      ans: (
        <div>
          <p>To place an order: </p>
          <p>a. Visit our menu page to view our available food items.</p>
          <p>
            b. Select the food you want and add the food to your cart by
            clicking the "AddToCart" button.
          </p>
          <p>c. Verify your cart item before check out.</p>
          <p>
            d. Click the "Place Order" button and you have successfully placed
            an order!
          </p>
        </div>
      ),
    },
    {
      type: "order",
      title: "2. Can I make changes or cancel my order after placing an order?",
      ans:
        "No, you can't change your order details once you place an order. To modify or cancel the order, you need to contact us for help.",
    },
    {
      type: "order",
      title: "3. How will I know if Moody Cafe has received my order?",
      ans:
        "Once you place an order, the system will show you a success message at the top of the webpage. You are also able to view your orders on the order page.",
    },
    {
      type: "order",
      title: "4. How do I manage cart item?",
      ans:
        "You can go to cart page and view your cart items. You can modify the quantity of food, add comments and also remove the food from your cart. To remove the food item, just click the delete icon beside the price and the food item will be removed from your cart successfully.",
    },
    {
      type: "order",
      title: "5. How do I view my order status?",
      ans: (
        <div>
          <p>
            You can go to the order page and you can view all your orders on the
            page. Your order will be sorted into different tabs according to
            your order status.
          </p>
          <p>
            Pending: Your order has been sent to the kitchen and waiting for the
            kitchen to process.
          </p>
          <p>Preparing: Our kitchen is preparing your food.</p>
          <p>
            Completed: Your order has been completed. You can view your order
            history under this tab.
          </p>
        </div>
      ),
    },
    {
      type: "order",
      title: "6. Is there a minimum order requirement?",
      ans: "Yes, you have to order at least 1 item.",
    },
    {
      type: "order",
      title:
        "7. Can I place an order via the website without logging in to an account?",
      ans:
        "No, you are required to log in to your account before placing an order. If you do not have an account, just register with us to enjoy the features in the future!",
    },

    {
      type: "account",
      title: "1. How do I register an account with Moody Cafe?",
      ans:
        "When you visit our homepage, click the Register at the navigation bar and you will see a Registration form. You are required to fill in your username, password and email. Then, click the Register button and the registration process is completed. You are one of our members now！",
    },
    {
      type: "account",
      title: "2. I forgot my account password, what should I do?",
      ans:
        "If you forget your username or password, please contact us for help.",
    },
    {
      type: "account",
      title: "3. How do I delete my account permanently?",
      ans: "Simply contact us and we will reply to you as soon as possible.",
    },
  ];

  const renderQuestion = (type) => {
    const filteredQuestion = questions.filter((each) => each.type == type);

    return filteredQuestion.map((question) => (
      <Accordion defaultActiveKey="0">
        <Card className="cardtop">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="border-bottom-0 "
            style={{ backgroundColor: "#80604D", color: "white" }}
          >
            {question.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{question.ans}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ));
  };
  return (
    <div className="question bg-light">
      <div className="header m-0 pb-5" style={{ paddingTop: "100px" }}>
        <Row className="p-0 m-0">
          <Col className="col-12">
            <h2 className="headerTitle text-center">The Question</h2>
            <h5
              className="headerSubTitle text-center"
              style={{
                fontWeight: "lighter",
                color: "#6F4E37",
              }}
            >
              We are happy to answer your question
            </h5>
          </Col>
        </Row>
      </div>
      <div className="main p-5" style={{ backgroundColor: "#d3d3d3" }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="p-0 m-0">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">GENERAL</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">ORDER</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">ACCOUNT</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {renderQuestion("general")}
                </Tab.Pane>
                <Tab.Pane eventKey="second">{renderQuestion("order")}</Tab.Pane>
                <Tab.Pane eventKey="third">
                  {renderQuestion("account")}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Home;
