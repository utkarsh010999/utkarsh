import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

 
class Header2 extends Component {
   
  render() {
    return (
      <div>
        <Navbar bg="none" expand="lg">
          <Link to="/"><Image className="img-fluid" src={require("../../images/logo.png")} /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="login" style={{textDecoration:"none"}}>Claims</Nav.Link>
              <Nav.Link href="#contact" style={{textDecoration:"none"}}>Services</Nav.Link>
              <Nav.Link>
                <i>&#xf508;</i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header2;
