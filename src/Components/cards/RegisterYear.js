import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Firstpage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Quotes from "./quotes";

 
export default class Variant extends Component {
  
  constructor(props) {
    super(props);
     
    this.state = {
      isviewquotes: false,
      isregister: true
    };
     
    this.handleviewquotes = this.handleviewquotes.bind(this); //handle function for your quotes button
    this.handleregister = this.handleregister.bind(this);
  }
   
  handleviewquotes() {
    this.setState({ isviewquotes: true, isregister: false });
  }
  handleregister() {
    this.setState({ isviewquotes: false, isregister: true });
  }
   
  render() {
     
    if (this.state.isregister) {
       
      return ( //styling
         
        <div>
          
          <Row className="ml-5 mt-5">
            <Col
              xs={12}
              md={3}
              sm={6}
              style={{ alignSelf: "center" }}
              onClick={this.handleviewquotes}
            >
              2019
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2018
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2017
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2016
            </Col>
          </Row>
          
          <Row className="ml-5 mt-5">
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2015
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2014
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2013
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2012
            </Col>
          </Row>
          
          <Row className="ml-5 mt-5">
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2011
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2010
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2009
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2008
            </Col>
          </Row>
          
          <Row className="ml-5 mt-5">
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2007
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2006
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2005
            </Col>
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              2004
            </Col>
          </Row>
           
        </div>
      );
    }
     
    else if (this.state.isviewquotes) {
      return <Quotes />;
    }
  }
}
