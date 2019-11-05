import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Firstpage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Register from "./RegisterYear";

 
export default class Variant extends Component {
  
  constructor(props) {
    super(props);
     
    this.state = {
      isvariant: true,
      isregister: false
    };
     
    this.handlevariant = this.handlevariant.bind(this); //handle function for variant
    this.handleregister = this.handleregister.bind(this);
  }
   
  handlevariant() {
    this.setState({ isvariant: true, isregister: false });
  }
  handleregister() {
    this.setState({ isvariant: false, isregister: true });
  }
   
  render() {
     
    if (this.state.isvariant) {
<<<<<<< HEAD
        return (
         
        <div>
           
          <Row className="ml-5 mt-5">
            
            <Col
              xs={12}
              md={3}
              sm={6}
              style={{ alignSelf: "center" }}
              onClick={this.handleregister}
            >
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
          </Row>
          <Row className="ml-5 mt-5">
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
          </Row>
          <Row className="ml-5 mt-5">
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
          </Row>
          <Row className="ml-5 mt-5">
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
            
            <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
              ABCD
            </Col>
          </Row>
          </div>
      );
    }
     
    else if (this.state.isregister) {
      return <Register />;
    }
=======
<<<<<<< HEAD
        return ( //styling
=======
      return (
       
      <div>
>>>>>>> e626b39f4f9cfc7ad9a6b4e45f3295c6de5c3c69
         
        <Row className="ml-5 mt-5">
          
          <Col
            xs={12}
            md={3}
            sm={6}
            style={{ alignSelf: "center" }}
            onClick={this.handleregister}
          >
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
        </Row>
        <Row className="ml-5 mt-5">
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
        </Row>
        <Row className="ml-5 mt-5">
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
        </Row>
        <Row className="ml-5 mt-5">
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
          
          <Col xs={12} md={3} sm={6} style={{ alignSelf: "center" }}>
            ABCD
          </Col>
        </Row>
        </div>
    );
  }
   
  else if (this.state.isregister) {
    return <Register />;
>>>>>>> df5ed8bf4ea3a92cbd26efa574c4b51a0f28323c
  }
}
}