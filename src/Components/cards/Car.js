import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../CSS/Car.css";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Link from "react-bootstrap/NavLink";
import Quotes from "./quotes";
import Manfcard from "./Manfcard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const API_END =
  "https://jyzd0gzl43.execute-api.us-east-2.amazonaws.com/latest/carmanu";

//Creating a Car Component and exporting it
export default class Car extends Component {
  //Defining a Constructor
  constructor(props) {
    super(props);
    //Defining the present state
    this.state = {
      isviewquotes: true,
      ismanfcard: false,
      manufacturers: []
    };
    //Declaring the handler function
    this.handleviewquotes = this.handleviewquotes.bind(this);
    this.handlemanfcard = this.handlemanfcard.bind(this);
    this.pushManufacurers = this.pushManufacurers.bind(this);
    this.handledatachange = this.handledatachange.bind(this);
    
  }

  handledatachange(newData){
    this.setState({ismanfcard : newData}, ()=>{
      console.log('handledatachange has been called');
    })
  }
  //Defining the Handler Function
  handleviewquotes() {
    this.setState({
      isviewquotes: true,
      ismanfcard: false,
      ismodelcard: false
    });
  }

  handlemanfcard() {
    this.setState({ isviewquotes: false, ismanfcard: true });
    fetch(API_END, {
      crossDomain: true,
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        console.log(response);
        this.setState({ isviewquotes: false });
        //initializing empty manufacturers[] array for pushing components @pushManufacturers
        let manufacturers = [];
        this.pushManufacurers(manufacturers, response, response.length);
        this.setState({
          manufacturers: manufacturers
        });
      });
  }

  //@pushManufacturers
  pushManufacurers = (manufacturers, response, count) => {
    for (var i = 0; i < count; i++) {
      // console.log(response[i].Car_Man_ID);
      manufacturers.push(
        <Manfcard
          manfName={response[i].Car_Manufacturer}
          key1={response[i].Car_Man_ID}
        />
      );
    }
  };

  render() {
    if (this.state.isviewquotes) {
      return (
        <div className="text-center main-box-margin boxx ">
          <InputGroup className="insertbox">
            <FormControl
              placeholder="Enter Your Car Number"
              aria-label="Enter Your Car Number"
              aria-describedby="basic-addon2"
              style={{ fontSize: "14px" }}
            />

            <InputGroup.Append>
              <InputGroup.Text
                id="basic-addon2"
                className="fa fa-search"
                style={{ fontSize: "14px" }}
              ></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <Row style={{ justifyContent: "center" }} className="donotknow">
            <Col md={4} sm={6} lg={3} xs={6}>
              <Link onClick={this.handlemanfcard}>New Car?</Link>
            </Col>

            <Col md={4} sm={6} lg={3} xs={6}>
              <Link onClick={this.handlemanfcard}>
                Don't Know Your Car Number?
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
        </div>
      );
    }

    //Updating the Component with Conditional Rendering
    else if (this.state.ismanfcard) {
      return <div>{this.state.manufacturers}</div>;
    }
  }
}
