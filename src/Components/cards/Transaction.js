import React, { Component } from "react";
import "../CSS/Transaction.css";
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

export default class Transaction extends Component {
  render() {
    return (
      //styling

      <div>
        <Header2 />
        <Dashboard />
        <AgentList />

        <div className="transaction">
          <Card className="text-right" style={{}}>
            <Card.Header
              className="text-left"
              style={{ backgroundColor: "#F8E5E5" }}
            >
              Transactions
            </Card.Header>
            <Card.Body>
              <Form.Group className='frmm1' 
              as={Row} 
              controlId="formHorizontalEmail"
              style={{ justifyContent: "center", textAlignLast: "center" }}>
                <Form.Label column sm={2} >
                  From
                </Form.Label>
                <Col sm={2}>
                  <Form.Control
                    type="date"
                    placeholder="From"
                    className="dateplace1"
                  />
                </Col>
                <Form.Label column sm={2} className="tolabel">
                  To
                </Form.Label>
                <Col sm={2}>
                  <Form.Control
                    type="date"
                    placeholder="To"
                    className="dateplace1"
                  />
                </Col>
              
              </Form.Group>
              <Button
                  className="Showbtn1"
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
                  <th colSpan="7"> Transactions</th>
                </tr>
                <tr style={{ backgroundColor: "#F8E5E5" }}>
                  <th>Payment Id </th>
                  <th>Customer details</th>
                  <th>Insurance details</th>
                  <th>OD premimum</th>
                  <th>Total premimum</th>
                  <th>Download policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Button variant="outline-secondary">Download</Button>
                  </td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Button variant="outline-secondary">Download</Button>
                  </td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Button variant="outline-secondary">Download</Button>
                  </td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Button variant="outline-secondary">Download</Button>
                  </td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Button variant="outline-secondary">Download</Button>
                  </td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Button variant="outline-secondary">Download</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
