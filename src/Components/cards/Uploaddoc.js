import React, { Component } from "react";
import "../CSS/Uploaddoc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Dashboard from "../layout/Dashboard";
import AgentList from "../layout/Agentlist";
import Header2 from "../layout/Header2";

export default class Uploaddoc extends Component {
  render() {

    return ( //styling

   
      <div>
        <Header2/>
        <Dashboard/>
        <AgentList/>

      <div className="docs">
        <Card className="text-right">
          <Card.Header className="text-left" style={{ backgroundColor: "#F8E5E5" }}>
            Your documents
          </Card.Header>
          <Card.Body>
            {/*Insertion of Form */}
            <Form className="float-right w-50 formform">
              {/*Insertion of FormGroup */}
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                  Email
                </Form.Label>
                <Col sm={6}>
                  <Form.Control  type="email" placeholder="Email"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="text">
                <Form.Label column sm={4}>
                  Mobile number
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="text" placeholder="Mobile number"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="text">
                <Form.Label column sm={4  }>
                  Pincode
                </Form.Label>
                <Col sm={6}>
                  <Form.Control  type="text" placeholder="Pincode"/>
                </Col>
              </Form.Group>
            </Form>
            {/*Insertion of another Form */}
            <Form className="text-left  formbtn">
              {/*Insertion of button for file input */}
              <Form.Label>Add Image
              <Form.Control className="fileInput" type="file"/>
              </Form.Label>
              {/*Insertion of button for file input */}
              <Form.Label className='pdf'>Add Pdf
              <Form.Control className="fileInput" type="file" />
              </Form.Label>
            </Form>
              {/*Closure of form  */}
            <Button className="float-center" style={{backgroundColor: "#FFAD64",borderColor: "white", marginTop: "10%"}}>
              Submit
            </Button>
          </Card.Body>
        </Card>
      </div>
      </div>
    );
  }
}
