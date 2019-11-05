import React, { Component } from "react";
import "../CSS/Raiseselfinspection.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header2 from "../layout/Header2";
import Dashboard from "../layout/Dashboard";
import AgentList from "../layout/Agentlist";

 
export default class Raiseselfinspection extends Component {
  
  constructor(props) {
    super(props);
     
    this.state = {
      field: "select"
    };
  }
   
  handleChange(e) { //handle function 
    this.setState({
      field: e.target.value
    });
  }
   
  render() {
     
    return ( //styling
      

   
      <div>
        <Header2/>
        <Dashboard/>
        <AgentList/>

      <div className="raise">
        <Card className='lsfont'>
          <Card.Header
            className="text-left"
            style={{ backgroundColor: "#F8E5E5" }}
          >
            Raise Self Inspection
          </Card.Header>
          <Card.Body>
            <div className="text-center">
              <select
                style={{ width: "40%" }}
                id="lang"
                onChange={this.handleChange.bind(this)}
                value1={this.state.field1}
              >
                <option value="select">Select Manufacturer</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Tata">Tata</option>
                <option value="Honda">Honda</option>
              </select>
              <br />
              <br />
              <select
                style={{ width: "40%" }}
                id="lang"
                onChange={this.handleChange.bind(this)}
                value2={this.state.field2}
              >
                <option value="select">Select Model</option>
                <option value="Elantra">Elantra</option>
                <option value="Cona">Cona</option>
                <option value="Creta">Creta</option>
              </select>
              <br />
              <br />
              <select
                style={{ width: "40%" }}
                id="lang"
                onChange={this.handleChange.bind(this)}
                value3={this.state.field3}
              >
                <option value="select">Select Variant</option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
              <br />
              <br />
              <select
                style={{ width: "40%" }}
                id="lang"
                onChange={this.handleChange.bind(this)}
                value4={this.state.field4}
              >
                <option value="select">Select City</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Sagar">Sagar</option>
                <option value="Jhansi">Jhansi</option>
              </select>
              <br />
              <br />
              <select
                style={{ width: "40%" }}
                id="lang"
                onChange={this.handleChange.bind(this)}
                value5={this.state.field5}
              >
                <option value="select">Type Of Business</option>
                <option value="x">x</option>
                <option value="y">y</option>
                <option value="z">z</option>
              </select>
              <br />
              <br />
              <h6>Purchase date</h6>
              <input
                type="date"
                placeholder="Purchase date"
                style={{ width: "40%" }}
              />
              <br />
              <br />
              <select
                style={{ width: "40%" }}
                id="lang"
                onChange={this.handleChange.bind(this)}
                value5={this.state.field6}
              >
                <option value="select">Manufacturer Year</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
              <br />
              <br />
              <h6>Have You Made the Claim This Year</h6>
              <label>
                <input
                  type="radio"
                  value="date"
                  name="1"
                />
                YES
              </label>
              <label style={{ marginLeft: "10%" }}>
                <input
                  type="radio"
                  value="month"
                  name="1"
                />
                NO
              </label>
              <br />
              <select
                style={{ width: "40%" }}
                id="lang"
                onChange={this.handleChange.bind(this)}
                value5={this.state.field6}
              >
                <option value="select">Previous Year Ncb</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
              <br />
              <br />
                </div>
            <Button
              style={{
                backgroundColor: "#FFAD64",
                borderColor: "white",
                type: "submit"
              }}
              className="subbtn"
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      </div>
      </div>
    );
  }
}
