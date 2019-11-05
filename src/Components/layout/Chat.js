import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Chatbox from "./Chatbox";


export default class Chat extends Component {
  constructor(props){
    super(props);
    this.state={
      show:false
    };
  }
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
    render() {
        return (
          <div>
          <Link>
          <Image
          className="icon-responsive" style={{width:"5%",marginLeft:"90%", marginTop:"7%"}} 
          src ={require("../../images/help.png")} onClick={this.showModal} onDoubleClick={this.hideModal}/>
          </Link>
          {this.state.show && <Chatbox/>}
          </div>
          );
        }
      }