import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Firstpage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Modelcard extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handlevariant = this.handlevariant.bind(this);
  }

  handlevariant(e) {
    e.preventDefault();
    console.log("Variant wala call hua");
  }

  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        key2={this.props.key2}
        onClick={this.handlevariant}
      >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{this.props.modelname}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
