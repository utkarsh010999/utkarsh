import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CSS/uploadlead.css";
import Header2 from "../layout/Header2";
import Dashboard from "../layout/Dashboard";
import AgentList from "../layout/Agentlist";

 
export default class Uploadlead extends Component {
    constructor(props) {
        super();
         
        this.state = {
          field: "select"
        };
      }
       
      handleChange(e) { //handle function for the element
        this.setState({
          field: e.target.value
        });
      }
  render() {

    return (//styling
       

     
       <div>
         <Header2/>
         <Dashboard/>
         <AgentList/>

      <div className="container ">
        <div className="text-center">
          <h1 className="labelupload">Upload Lead</h1>
        </div>
        <div className="uploadlead" >
          <Form style={{ display: "inline-block", marginTop:"10%"}}>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={6} className="text-left">
                Name
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  className="text-center"
                />
              </Col>
              
            </Form.Group>
            <Form.Group as={Row}></Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={6} className="text-left">
                Contact Number
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="phone"
                  placeholder="Contact Number"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  className="text-center"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}></Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={6} className="text-left">
                Insurance Type
              </Form.Label>
              <Col sm={6} style={{marginTop:"2%"}}>
              <select
                    id="lang"
                    onChange={this.handleChange.bind(this)}
                    value1={this.state.field1}
                  >
                    <option value="select">Choose Insure</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Health">Health</option>
                  </select>
              </Col>
            </Form.Group>
            <Form.Group as={Row}></Form.Group>
            <Form.Group as={Row} controlId="formHorizontalmobile">
              <Form.Label column sm={6} className="text-left">
                New/Renew
              </Form.Label>
              <Col sm={6} style={{marginTop:"2%"}}>
              <label>
                    <input
                      type="radio"
                      value="new"
                      name="1"
                    />
                    New
                  </label>
                  <label style={{ marginLeft: "10%" }}>
                    <input
                      type="radio"
                      value="renew"
                      name="1"
                    />
                    Renew
                  </label>
              </Col>
            </Form.Group>
            <Form.Group as={Row}></Form.Group>
            <Form.Group as={Row} controlId="formHorizontalAddress">
              <Form.Label column sm={6} className="text-left">
                Pincode
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  placeholder="Pincode"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  className="text-center"
                />
              </Col>
              
            </Form.Group>
            <Form.Group as={Row}></Form.Group>
            <Form.Group as={Row} className="btnupload">
              <Col sm={10}>
                <Button
                  style={{
                    backgroundColor: "#F97552",
                    borderColor: "white",
                    float:"right"
                  }}
                  type="submit"
                >
                  Upload Lead
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
      </div>
    );
  }
}
