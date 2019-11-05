import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Firstpage.css";
import Col from "react-bootstrap/Col";
import Modelcard from "./Modelcard";
const API_END = "https://yqqchik6ol.execute-api.us-east-2.amazonaws.com/latest/carmod/";

//Creating a Variant Component and exporting it
export default class Variant extends Component {
  //Insertion of Constructor
  constructor(props) {
    super(props);
    this.state = {
      key:props.match.params.id
    };
    this.pushIntoVariants = this.pushIntoVariants.bind(this);
  }


  pushIntoVariants = (variants, responseJson, count) => {
    for (var i = 0; i < count; i++) {
      variants.push(
        <Modelcard
          modelname={responseJson[i].Model}
          key={responseJson[i].Model_id}
        />
      );
    }
  };
  componentDidMount(){
    fetch(API_END+this.state.key)
      .then(res => {
        return res.json();
      })
      .then(responseJson => {
        console.log("View variants:\n", responseJson);
        let variants = [];
        this.pushIntoVariants(variants, responseJson, responseJson.length);
        this.setState({ variants: variants });
      })
      .catch(err => {
        console.log("error: " + err);
      });
  }

  render() {
    return (
      <div>
        <Col
          xs={12}
          md={3}
          sm={6}
          style={{ alignSelf: "center" }}
          onClick={this.handleregister}
        >
          ABCD
        </Col>
      </div>
    );
  }
}
