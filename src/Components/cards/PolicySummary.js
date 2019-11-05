import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../CSS/PolicySummary.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Lastpolicy from "./LastPolicy";

 
export default class Summary extends Component { 
  
  constructor(props) {
    super(props);
     
    this.state = {
      islastpolicy: false,
      issummary: true
    };
     
    this.handlesummary = this.handlesummary.bind(this); //handle function for summary
    this.handlelastpolicy = this.handlelastpolicy.bind(this);
  }

  handlesummary() {
    this.setState({ issummary: true, islastpolicy: false });
  }
  handlelastpolicy() {
    this.setState({ issummary: false, islastpolicy: true });
  }
   
  render() {
     
    if (this.state.issummary) {
      return (
        <div> 
          <Card className="mb-5 w-50 mx-auto">
            <Card.Body className="text-center"></Card.Body>
          </Card>
          <div style={{ textAlignLast: "center" }}>
            <Form style={{ display: "inline-block" }}>
              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                  Personal
                </Form.Label>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  />
                </Col>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  />
                </Col>
                <Col sm={3}>
                  <Form.Control
                    type="date"
                    placeholder="date"
                    style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Communication Details
                </Form.Label>
                <Col sm={3}>
                  <Form.Control
                    type="numeric"
                    placeholder="Mobile Number"
                    pattern="[0-9]*"
                    style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  />
                </Col>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  />
                </Col>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="Registration Year"
                    style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}></Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Vehical Info
                </Form.Label>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="Car Number"
                    style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  />
                </Col>
                <Col sm={2} md={3}>
                  <label>
                    <input
                      type="radio"
                      value="date"
                      name="1"
                    />
                    On Loan
                  </label>
                </Col>
                <Col sm={2} md={3}>
                  <label>
                    <input
                      type="radio"
                      value="date"
                      name="1"
                    />
                    Not On Loan
                  </label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}></Form.Group>
            </Form>
          </div>
          <Col xs={12} md={7} sm={6}>
            <Button
              className="subbtnsumm"
              style={{ backgroundColor: "#FFAD64" }}
              onClick={this.handlelastpolicy}
            >
              SUBMIT
            </Button>
          </Col>
        </div>
      );
    } 
    else if (this.state.islastpolicy) {
      return <Lastpolicy />;
    }
  }
}
