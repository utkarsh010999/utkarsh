import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Firstpage.css";
import "../CSS/Manfcard.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import Modelcard from "./Modelcard"
const API_END = "https://yqqchik6ol.execute-api.us-east-2.amazonaws.com/latest/carmod/";

export default class Manfcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ismanfcard: true,
      ismodelcard: false,
      models:[]
    };

    this.handlemodel = this.handlemodel.bind(this);
    // this.handlemanfcard = this.handlemanfcard.bind(this);
    this.pushModels = this.pushModels.bind(this);
  }

  handlemodel() {
    console.log("Handle wala call hua hai");
    console.log(this.props.key1);

    fetch(API_END+this.props.key1, {
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
        console.log("Models wala response");
        // initializing empty models[] array for pushing components @pushModels
        let models = []; 
        this.pushModels(models, response, response.length);
        this.setState({
          models: models,
          ismanfcard:false,
          ismodelcard:true
        });
      });
  }

  pushModels(models, response, count){
    for (var i = 0; i < count; i++) {
      models.push(
        <Modelcard
          modelname={response[i].Model_name}
          key2={response[i].Model_id}
        />
      );
    }

  }
  // handlemanfcard() {
  //   this.setState({ isvariant: false, ismanfcard: true });
  // }

  render() {
    if(this.state.ismanfcard){
      return (
        <div style={{margin:"10px"}}>
              <Card className='mcard'  key={this.props.key} onClick={this.handlemodel} >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{this.props.manfName}</Card.Title>
                </Card.Body>
              </Card>
        </div>
      );
    } else if(this.state.ismodelcard){
      return(
        <>{this.state.models}</>
      )
    }
    
  }
}