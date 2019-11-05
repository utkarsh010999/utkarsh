import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Dashboard.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Figcaption from "react-bootstrap/FigureCaption";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


 
export default class Dashboard extends Component {
  render() {
     
    return (
       
      <div>
        <Card className="w-100 mx-auto dash_font " style={{ backgroundColor: "#FFAD64" }}>
          <Card.Body>
            <Row>
              <Col xs={12} md={4} sm={6}>
                <Figure className="figure">
                <Image
                    src={require("../../images/profile.png")}
                    className="figure-img img-fluid rounded"
                    alt="Profile Photo of the Agent"
                    style={{ marginLeft: "1rem", width: "5rem" }}
                  />
                  <Figcaption
                    style={{
                      marginLeft:"7rem",
                      marginTop:"-5rem",
                      color: "black"
                    }}
                  >
                    Welcome:
                  </Figcaption>
                 
                  <Figcaption
                    style={{ marginLeft: "7rem", marginTop: "0rem" }}
                  >
                    Joined Date:
                  </Figcaption>
                  <Figcaption style={{ marginLeft: "7rem", marginTop: "0rem" }}>
                    Partner Code:
                  </Figcaption>
                </Figure>
              </Col>
              <Col xs={10} md={7} sm={12}></Col>
              <Col xs={10} md={1} sm={12} className="mysumm">
                <Row xs={12} md={3} sm={3}>Policy Sold</Row>
                <Row xs={12} md={3} sm={3}>OD Premium</Row>
                <Row xs={12} md={3} sm={3}>Renewals</Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
         
      </div>
    );
  }
}
