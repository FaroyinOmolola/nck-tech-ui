import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function HomePage() {
  return (
    <div className="px-3">
      <div className=" mt-3 mb-sm-2 mb-md-5 px-md-3 f-small">
        <ul className="list-unstyled d-flex justify-content-end align-items-end">
          <li className="mx-md-3 mx-2 fw-550">TRIPS</li>
          <li className="mx-md-3 mx-2 fw-550">RECENTLY VIEWED</li>
          <li className="mx-md-3 mx-2 fw-550">BOOKINGS</li>
          <li className="ms-md-5 mx-2 me-md-4">
            <img
              src="images/top-img1.png"
              alt="#"
              style={{ width: "40px", height: "auto" }}
            />
          </li>
        </ul>
      </div>
      <Container className="mt-md-5 mt-sm-3 bt pt-4">
        <Row className="">
          <Col>
            <h1 className="fs-4">Payment Information</h1>
            <p className="color-grey">Choose your payment method</p>
            <div>
              <img
                src="images/atm.png"
                alt="atm card"
                style={{ maxWidth: "27rem", width: "100%" }}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col>
            <Row className="pt-2">
              <ul className="list-unstyled d-flex justify-content-end">
                <li className="mx-2 d-flex align-items-end">
                  <img
                    src="images/visa.png"
                    alt="visa"
                    className="mx-1"
                    style={{ width: "50px", height: "auto" }}
                  />
                  <img
                    src="images/discover.png"
                    alt="discover"
                    className="mx-1"
                    style={{ width: "70px", height: "30px" }}
                  />
                </li>
                <li className="mx-2 d-flex align-items-end">
                  <div
                    className="bg-light rounded-circle mx-1 pb-2"
                    style={{
                      width: "15px",
                      height: "15px",
                      background: "#f5f3f3",
                    }}
                  ></div>
                  <img
                    src="images/paypal1.png"
                    alt="paypal1"
                    className="mx-2"
                    style={{ width: "80px", height: "20px" }}
                  />
                </li>
              </ul>
            </Row>
            <Row className="my-3 pt-3">
              <Col className="mx-2 px-0">
                <Form.Group className="mb-3 " controlId="cardNumber">
                  <Form.Label>Credit card number</Form.Label>
                  <Form.Control
                    type="text"
                    className="bg-1"
                    value="4324 5433 9382 1030"
                  />
                </Form.Group>
              </Col>
              <Col className="mx-2 px-0">
                <Form.Group className="mb-3" controlId="expiryDate">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control type="text" className="bg-2" value="03/24" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="mx-2 px-0">
                <Form.Group className="mb-3" controlId="securityCode">
                  <Form.Label>Security Code</Form.Label>
                  <Form.Control type="text" className="bg-2" value="420" />
                </Form.Group>
              </Col>
              <Col className="mx-2 px-0">
                <Form.Group className="mb-3" controlId="postalCode">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" className="bg-2" value="10119" />
                </Form.Group>
              </Col>
              <div className="mt-3">
                <Form.Check
                  type="checkbox"
                  label="Use this card for next time purchase"
                  id="useCardNext"
                />
              </div>
              <Button className="rounded w-100 mt-3">Add Card</Button>
            </Row>
          </Col>
        </Row>
        <div className="fw-bold bt pt-3 mt-4">
          <Row className="mb-3">
            <Col>Subtotal</Col>
            <Col className="text-end">
              <span className="naira">N</span>2,497.00
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>Estimated TAX</Col>
            <Col className="text-end">
              <span className="naira">N</span>119.64
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              Promotional Code:{" "}
              <span className=" fw-normal color-grey">Z4KXLM9A</span>
            </Col>
            <Col className="text-end">
              <span className="naira">N</span>-60.00
            </Col>
          </Row>
        </div>
        <div className="mb-3 mt-3 bt py-4">
          <Row>
            <Col>
              <Button className="px-3">Complete Payment</Button>
            </Col>
            <Col className="text-end fw-bold fs-5">
              TOTAL: <span className="naira">N</span>2,556.64
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
