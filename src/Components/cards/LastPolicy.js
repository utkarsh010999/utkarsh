import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/lastpolicy.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dashboard from "../layout/Dashboard";

 
export default class Lastpolicy extends Component {
  constructor(props) {
    super();
     
    this.state = {
      field: "select"
    };
  }
   
  handleChange(e) { //handle function
    this.setState({
      field: e.target.value
    });
  }

   
  render() {
    return ( //styling
      <div style={{ textAlign: "center" }}>
        <Dashboard/>
      <div className="text-center" style={{ marginTop: "2%" }}>
        <h1>Last Policy Details</h1>
      </div>
      <Card className="mt-5">
        <Card.Body className="text-centre">
          <Form style={{ display: "inline-block" }}>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={4}>
                Expiry Date:
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                className='datepolicy'
                  type="date"
                  placeholder="Expiry Date"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}></Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={4}>
                Insurance:
              </Form.Label>
              <Col sm={7}>
                <select
                  id="lang"
                  onChange={this.handleChange.bind(this)}
                  value1={this.state.field1}
                >
                  <option value="select">Choose Insurance</option>
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                  <option value="Health">Health</option>
                </select>
              </Col>
            </Form.Group>
            <Form.Group as={Row}></Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={4}>
                Claimed Last Year:
              </Form.Label>
              <Col sm={3} md={6}>
                <label>
                  <input
                    type="radio"
                    value="yes"
                    name="1"
                  />
                  YES
                </label>
                <label style={{ marginLeft: "10%" }}>
                  <input
                    type="radio"
                    value="no"
                    name="1"
                  />
                  NO
                </label>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={4}>
                Last Ncb:
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                className='datepolicy'
                  type="text"
                  placeholder="Enter Number"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}></Form.Group>
            <Button
              style={{
                backgroundColor: "#F97552",
                borderColor: "white",
                marginLeft: "30%"
              }}
              type="submit"
            >
              SUBMIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
}