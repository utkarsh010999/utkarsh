import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../CSS/Bike.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Link from "react-bootstrap/NavLink";
import Manfcard from "./Manfcard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

 
export default class Bike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isnew: false,
      isdonotknow: false
    };
    this.handlenew = this.handlenew.bind(this); //handle function of bike
    this.handledonotknow = this.handledonotknow.bind(this);//handle function of dont know link
  }
  handlenew() {
    this.setState({ isnew: true, isdonotknow: false });
  }
  handledonotknow() {
    this.setState({ isnew: false, isdonotknow: true });
  }
  render() {
    return ( //styling
      <div className="text-center main-box-margin"> 
        <InputGroup className="insertbox">
          <FormControl
            placeholder="Enter Your Bike Number"
            aria-label="Enter Your Bike Number"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text
              id="basic-addon2"
              className="fa fa-search"
            ></InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Row style={{ justifyContent: "center" }} className="donotknow">
          <Col md={10} sm={6} lg={3} xs={6}>
            <Link onClick={this.handlemanfcard}>New Bike?</Link>
          </Col>
          <Col md={10} sm={6} lg={3} xs={6}>
            <Link onClick={this.handlemanfcard}>
              Don't Know Your Bike Number?
            </Link>
          </Col>
        </Row>

        <Button
          className="mt-5 ml-5 mx-auto my-50"
          style={{ backgroundColor: "#FFAD64" }}
          onClick={this.handleviewquotes}
        >
          View Quotes
        </Button>
        {/* {this.state.isnew && <Manfcard />}
        {this.state.isdonotknow && <Manfcard />} */}
      </div>
    );
  }
}
