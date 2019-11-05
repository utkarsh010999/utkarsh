import React, { Component } from "react";
import "../CSS/Lead.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Uploadlead from "./uploadlead";
import Header2 from "../layout/Header2";
import AgentList from "../layout/Agentlist";
import Dashboard from "../layout/Dashboard";

 
export default class Leads extends Component {
  constructor(props){
    super(props);
    this.state = { 
      islead: true,
      isuploadlead: false
    };
    this.handlelead = this.handlelead.bind(this); //handle function for lead
    this.handleuploadlead = this.handleuploadlead.bind(this);
  }
  handlelead()
  {
    this.setState({islead: true, isuploadlead: false});
  }
  handleuploadlead() {
    this.setState({islead: false, isuploadlead: true});
  }
   
  render() {
    if(this.state.islead)
    {
    return ( //styling
    
      <div>
        <Header2/>
        <Dashboard/>
        <AgentList/>
      <div className="lead">
        <Card className="text-right" style={{ marginTop: "-25%" }}>
          <Card.Header
            className="text-left"
            style={{ backgroundColor: "#F8E5E5" }}
          >
            Upload Leads
          </Card.Header>
          <Card.Body className="btns">
            <Button
              className="text-right"
              style={{
                backgroundColor: "#FFAD64",
                borderColor: "white"
              }}
            >
              Show report
            </Button>
            <Button
              style={{
                backgroundColor: "#FFAD64",
                borderColor: "white"
              }}
              onClick={this.handleuploadlead}
            >
              Upload leads
            </Button>
          </Card.Body>
        </Card>
        <div style={{ marginTop: "5%", height: "10%" }}>
          <Table responsive>
            <thead>
              <tr style={{ backgroundColor: "#F8E5E5" }}>
                <th colSpan="7"> Leads</th>
              </tr>
              <tr style={{ backgroundColor: "#F8E5E5" }}>
                <th>Name </th>
                <th>Contact number</th>
                <th>Type of insurance</th>
                <th>New/Renew</th>
                <th>Pincode</th>
                <th>Contact E-mail</th>
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
                  <Button variant="outline-secondary">Contact</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Contact</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Contact</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Contact</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Contact</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Contact</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      </div>
    );
    }
    else if(this.state.isuploadlead)
    {
      return(
        <Uploadlead></Uploadlead>
      )
    }
  }
}
