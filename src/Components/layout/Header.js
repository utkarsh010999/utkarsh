import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Login from "../auth/Login";
import First from "../cards/Firstpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 
class Header extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      isLogin: false,
      isFirst: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleFirst = this.handleFirst.bind(this);
  }
  handleLogin() {
    this.setState({ isLogin: true, isFirst: false });
  }
  handleFirst() {
    this.setState({ isLogin: false, isFirst: true });
  }
   
  render() {
    return (
      <div>
        <Navbar bg="none" expand="lg" >
          <Link to="/">
          <Image
            className="img-fluid"
            src={require("../../images/logo.png")}
          /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <Link to="/Login" className="mr-3" style={{alignSelf:"center",textDecoration:"none"}}>Login/Sign Up</Link>
              <FontAwesomeIcon
                icon="phone"
                className="fa-flip-horizontal fa-2x ml-3"
              />

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.state.isLogin && <Login />}
        {this.state.isFirst && <First />}
      </div>
    );
  }
}
export default Header;
