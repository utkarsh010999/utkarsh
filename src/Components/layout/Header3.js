import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";


 
class Header3 extends Component {
   
  render() {
    return (
      <div>
        <Navbar bg="none" expand="lg">
          <Image className="img-fluid" src={require("../../images/logo.png")} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-center" >
              <Link to="/agentport" className="mr-5" style={{alignSelf:"center", textDecoration:"none"}}>Become Agent</Link>
              <Link to="/policies" className="mr-5" style={{alignSelf:"center", textDecoration:"none"}}>My Policies</Link>
              <Nav.Link className="mr-3">
                <i>&#xf508;</i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header3;
