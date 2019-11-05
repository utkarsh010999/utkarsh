import React, { Component } from "react";
import "../CSS/Ncb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Header2 from "../layout/Header2";
import Dashboard from "../layout/Dashboard";
import AgentList from "../layout/Agentlist";

 
export default class Ncb extends Component {
   
  render() {
     
    return ( //styling
       

   
       <div>
         <Header2/>
         <Dashboard/>
         <AgentList/>

      <div className="ncb">
        <Card className="text-right" style={{ marginTop: "-29%" }}>
          <Card.Header
            className="text-left"
            style={{ backgroundColor: "#F8E5E5" }}
          >
            NCB/PYP Recovery cases
          </Card.Header>
          <Card.Body>
            <Form.Group
            className='frmm'
              as={Row}
              controlId="formHorizontalEmail"
              style={{ justifyContent: "center", textAlignLast: "center" }}
            >
              <Form.Label column sm={2} style={{}}>
                From
              </Form.Label>
              <Col sm={2} >
                <Form.Control
                  type="date"
                  placeholder="From" className="dateplace"
                />
              </Col>
              <Form.Label column sm={2} style={{}}>
                To
              </Form.Label>
              <Col sm={2} >
                <Form.Control
                  type="date"
                  placeholder="To" className="dateplace"
                />
              </Col>
              
            </Form.Group>
            <Button
                className="showbtn"
                style={{
                  backgroundColor: "#FFAD64",
                  borderColor: "white"
                }}
              >
                Show report
              </Button>
          </Card.Body>
        </Card>
        <div>
          <Table responsive>
            <thead>
              <tr style={{ backgroundColor: "#F8E5E5" }}>
                <th colSpan="6"> NCB/PYP Recovery cases</th>
              </tr>
              <tr style={{ backgroundColor: "#F8E5E5" }}>
                <th>Payment Id </th>
                <th>Policy number</th>
                <th>Recovery reason</th>
                <th>Customer name</th>
                <th>Mobile number</th>
                <th> Registration number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      </div>
    );
  }
}
