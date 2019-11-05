import React, { Component } from "react";
import "../CSS/Poscertificate.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header2 from "../layout/Header2";
import Dashboard from "../layout/Dashboard";
import AgentList from "../layout/Agentlist";

 
export default class Poscertificate extends Component {
   
  render() {
     

    return ( //styling
       

    
       <div>
         <Header2/>
         <Dashboard/>
         <AgentList/>

      <div className="pos">
        <Card>
          <Card.Header
            className="text-left"
            style={{ backgroundColor: "#F8E5E5" }}
          >
            Pos Certificate
          </Card.Header>
          <Card.Body>
            <Button
              style={{
                backgroundColor: "#F8E5E5",
                borderColor: "white",
                color: "black"
              }}
              className="docbtn"
            >
              Documents
            </Button>
            <Button
              style={{
                backgroundColor: "#F8E5E5",
                borderColor: "white",
                color: "black"
              }}
              className="vidbtn"
            >
              Videos
            </Button>
          </Card.Body>
        </Card>
      </div>
      </div>
    );
  }
}
