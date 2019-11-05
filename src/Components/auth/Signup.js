import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../layout/Header";
const API = "http://localhost:5000/api";
 
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      password2: "",
      region: "",
      district: "",
      address: "",
      rajya: ""
    };
    this.onChange = this.onChange.bind(this); //
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      region: this.state.region,
      district: this.state.district,
      rajya: this.state.rajya,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser); //fetching api
    fetch(API + "/user/register", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(response => {
        console.log("Response aaya"); 
        return response.json();
        //response check 
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
      <div>
        <Header/>
      <div className="compform">
        <div
          className="text3 signn"
          style={{ marginBottom: "2%" }}
        >
          <h1>Sign Up</h1>
        </div>

        <div className="container text-center formm" >
          <Form as={Col} sm={12} md={12} style={{display: "inline-block" }} onSubmit={this.onSubmit}>
            <Form.Group as={Row} style={{ marginBottom: "1px" }}>
              <Form.Label column sm={2} className="label">
                Name
              </Form.Label>

              <Col sm={5} xs={12}>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  className="text1 firstname"
                />
              </Col>

              <Col sm={5} xs={12}>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  className="text1 lastmargin"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}></Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2} className="label">
                Phone
              </Form.Label>

              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Mobile Number"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  className="text mob"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={{ marginBottom: "1px" }}>
              <Form.Label column sm={2} className="label">
                Email
              </Form.Label>

              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="E-mail id"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  className="text email"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}></Form.Group>

            <Form.Group as={Row} style={{ marginBottom: "10px" }}>
              <Form.Label column sm={2} className="label">
                Address
              </Form.Label>

              <Col sm={10} style={{ marginBottom: "5px" }}>
                <Form.Control
                  type="text"
                  placeholder="Flat No./House no."
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  className="text add"
                />
              </Col>

              <Form.Label column sm={2}></Form.Label>

              <Col sm={5} style={{ marginBottom: "5px" }}>
                <Form.Control
                  type="text"
                  placeholder="Region"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="region"
                  value={this.state.region}
                  onChange={this.onChange}
                  className="text4"
                />
              </Col>

              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="District"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="district"
                  value={this.state.district}
                  onChange={this.onChange}
                  className="text4 dismargin"
                />
              </Col>

              <Form.Label column sm={2}></Form.Label>

              <Col sm={10} style={{ marginBottom: "5px" }}>
                <Form.Control
                  type="text"
                  placeholder="State"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="rajya"
                  value={this.state.rajya}
                  onChange={this.onChange}
                  className="text2"
                />
              </Col>
            </Form.Group>


            <Form.Group as={Row} style={{ marginBottom: "5px" }}>
              <Form.Label column sm={2} className="label">
                Password
              </Form.Label>

              <Col sm={10} style={{ marginBottom: "10px" }}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  className="text pass"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="label">
                Confirm Password
              </Form.Label>

              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  style={{ backgroundColor: "rgba(196, 196, 196, 0.5)" }}
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChange}
                  className="text conpass"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={10}>
                <Button
                  style={{
                    backgroundColor: "#F97552",
                    borderColor: "white"
                  }}
                  type="submit"
                  className="subbtn1"
                >
                  Sign Up
                </Button>
              </Col>
            </Form.Group>

            <Link to="/login" className="alr" style={{textDecoration:"none"}}>Already a Customer?</Link>
          </Form>
        </div>
      </div>
      </div>
    );
  }
}
