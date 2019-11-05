import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CSS/login.css";
import Header from "../layout/Header";

const API = "http://localhost:5000/api"; //api import

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  onSubmit(e) {
    e.preventDefault();
    const loginUser = {
      phone: this.state.phone,
      password: this.state.password
    };
    console.log(loginUser); //fetching api from 
    fetch(API + "/user/login", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginUser)
    })
      .then(response => {
        //response check
        console.log("Response aaya");
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.error === undefined) {
          console.log("Jai mahesmati");
          //this.props.history.push("/Firstpage");
        } else {
          console.log(responseJson.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      //styling
      <div>
        <Header />
        <div className="text loginn" style={{ marginBottom: "2%" }}>
          <h1>Login</h1>
        </div>

        <div className="container text-center formm1">
          <Form style={{ display: "inline-block" }} onSubmit={this.onSubmit}>
            {/* <Form.Group as={Row}></Form.Group> */}

            <Form.Group as={Row}>
              <Form.Label className="phonelabel" sm={3} style={{alignSelf:"center"}}>
                Phone
              </Form.Label>

              <Col sm={9}>
                <Form.Control
                  className="field1"
                  type="text"
                  placeholder="Mobile Number"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)"}}
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </Col>
            </Form.Group>

            {/* <Form.Group as={Row}></Form.Group> */}

            <Form.Group as={Row}>
              <Form.Label className="passlabel" sm={3} style={{alignSelf:"center"}}>
                Password
              </Form.Label>

              <Col sm={9}>
                <Form.Control
                  className="field2"
                  type="password"
                  placeholder="Password"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)"}}
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Col>
            </Form.Group>

            {/* <Form.Group as={Row}></Form.Group> */}

            <Form.Group as={Row}>
              <Col sm={10}>
                <Button
                  style={{
                    backgroundColor: "#F97552",
                    borderColor: "white"
                  }}
                  className="sublogin"
                  type="submit"
                >
                  <Link to="/userportal" style={{
                    textDecoration:"none"}}>Login</Link>
                </Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} sm={12}>
              <Form.Label className="labelsign" style={{alignSelf:"center"}}>Not Registered?</Form.Label>
                <Link to="/signup" style={{textDecoration:"none"}} className="mr-5 signlogin">Signup</Link>
              <Form.Label className="labelsign1" style={{alignSelf:"center"}}>Forgot Password?</Form.Label>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
