import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Earning from "../cards/Earning";
import Transactions from "../cards/Transaction";
import "../CSS/Passbook1.css";
import Header2 from "../layout/Header2";
import Dashboard from "../layout/Dashboard";
import AgentList from "../layout/Agentlist";

 
export default class Passbook1 extends Component {
   
  constructor(props) {
    super(props);
     
    this.state = {
      isearn: false,
      istrans: false,
      isyourtrans: true
    };
     
    this.handleearn = this.handleearn.bind(this); //handle function for earn
    this.handletrans = this.handletrans.bind(this);//handle function for transaction
    this.handleyourtrans = this.handleyourtrans.bind(this);
  }
   
  handleearn() {
    this.setState({ isearn: true, istrans: false, isyourtrans: false });
  }
  handletrans() {
    this.setState({ isearn: false, istrans: true, isyourtrans: false });
  }
  handleyourtrans() {
    this.setState({ isearn: false, istrans: false, isyourtrans: true });
  }
  render() { 
     
    if (this.state.isyourtrans)
       

      return ( //styling
         

      
         <div>
           <Header2/>
           <Dashboard/>
           <AgentList/>

        <div className="yourtrans">
          <Card>
            <Card.Header
              className="text-left"
              style={{ backgroundColor: "#F8E5E5" }}
            >
              Your Transactions
            </Card.Header>
            <Card.Body>
              <div >
                <Button
                  style={{
                    backgroundColor: "#FFAD64",
                    borderColor: "white",
                    type: "submit"
                  }}
                  className="earnbtn"
                  onClick={this.handleearn}
                >
                  Earnings
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FFAD64",
                    borderColor: "white",
                    type: "submit"
                  }}
                  className='transbtn'
                  onClick={this.handletrans}
                >
                  Transactions
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FFAD64",
                    borderColor: "white",
                    type: "submit"
                  }}
                  className="downbtn"
                >
                  Download Passbook
                </Button>
              </div>
              </Card.Body>
          </Card>
        </div>
        </div>
      );
     
    else if (this.state.isearn) {
      return <Earning />;
    }
     
    else if (this.state.istrans) {
      return <Transactions />;
    }
  }
}
