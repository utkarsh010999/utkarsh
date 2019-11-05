import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Firstpage.css";
import Card from "react-bootstrap/Card";
import Car from "../cards/Car";
import Bike from "../cards/Bike";
import Health from "../cards/Health";
import Commercial from "../cards/Commercial";
import Life from "../cards/Life";
import Third from "../cards/Third";
import Link from "react-bootstrap/NavLink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

 
export default class Firstpage extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      isCar: true,
      isBike: false,
      isHealth: false,
      isLife: false,
      isComm: false,
      isThird: false,
      isLogin: false
    };
     
    this.handleCar = this.handleCar.bind(this);
    this.handleBike = this.handleBike.bind(this);
    this.handleHealth = this.handleHealth.bind(this);
    this.handleLife = this.handleLife.bind(this);
    this.handleComm = this.handleComm.bind(this);
    this.handleThird = this.handleThird.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
   
  handleCar() {
    this.setState({
      isCar: true,
      isBike: false,
      isHealth: false,
      isLife: false,
      isComm: false,
      isThird: false,
      isLogin: false
    });
  }
  handleBike() {
    this.setState({
      isCar: false,
      isBike: true,
      isHealth: false,
      isLife: false,
      isComm: false,
      isThird: false,
      isLogin: false
    });
  }
  handleHealth() {
    this.setState({
      isCar: false,
      isBike: false,
      isHealth: true,
      isLife: false,
      isComm: false,
      isThird: false,
      isLogin: false
    });
  }
  handleLife() {
    this.setState({
      isCar: false,
      isBike: false,
      isHealth: false,
      isLife: true,
      isComm: false,
      isThird: false,
      isLogin: false
    });
  }
  handleComm() {
    this.setState({
      isCar: false,
      isBike: false,
      isHealth: false,
      isLife: false,
      isComm: true,
      isThird: false,
      isLogin: false
    });
  }
  handleThird() {
    this.setState({
      isCar: false,
      isBike: false,
      isHealth: false,
      isLife: false,
      isComm: false,
      isThird: true,
      isLogin: false
    });
  }
  handleLogin() {
    this.setState({
      isCar: false,
      isBike: false,
      isHealth: false,
      isLife: false,
      isComm: false,
      isThird: false,
      isLogin: true
    });
  }
   
   render() {
    return (
      <div style={{ marginTop: "7%", marginRight:"10%" }}>
        <Card className="shadow-lg main-card text-center">
          <Card.Header className='headd'>
            <Row className="navbarr" >
              <Col md={4} sm={6} lg={2} xs={6} style={{alignSelf:"center"}}>
                <Link onClick={this.handleCar}>Car</Link>
              </Col>
              <Col md={4} sm={6} lg={2} xs={6} style={{alignSelf:"center"}}>
                <Link onClick={this.handleBike}>Bike</Link>
              </Col>
              <Col md={4} sm={6} lg={2} xs={6} style={{alignSelf:"center"}}>
                <Link onClick={this.handleHealth}>Health</Link>
              </Col>
              <Col md={4} sm={6} lg={2} xs={6} style={{alignSelf:"center"}}>
                <Link onClick={this.handleLife}>Life</Link>
              </Col>
              <Col md={4} sm={6} lg={2} xs={6}>
                <Link onClick={this.handleComm}>
                  Commercial
                  <br />
                  Vehicle
                </Link>
              </Col>
              <Col md={4} sm={6} lg={2} xs={6}>
                <Link onClick={this.handleThird}>
                  Third
                  <br />
                  Party
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {this.state.isCar && <Car />}
            {this.state.isBike && <Bike />}
            {this.state.isHealth && <Health />}
            {this.state.isLife && <Life />}
            {this.state.isComm && <Commercial />}
            {this.state.isThird && <Third />}
          </Card.Body>
        </Card>
      </div>
    );
  }
}