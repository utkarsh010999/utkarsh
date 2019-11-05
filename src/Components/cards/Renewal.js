import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import "../CSS/Renewal.css";
import Dashboard from "../layout/Dashboard";
import Header2 from "../layout/Header2";
import AgentList from "../layout/Agentlist";

 
export default class Renewal extends Component {
   
  render() {
     

    return ( //stying
       

   
      <div>
        <Header2/>
       <Dashboard/>
       <AgentList/>

      <div className="policy">
        <Table responsive>
          <thead>
            <tr style={{ backgroundColor: "#F8E5E5" }}>
              <th colSpan="7"> Renewal</th>
            </tr>
            <tr style={{ backgroundColor: "#F8E5E5" }}>
              <th>Policy ID </th>
              <th>Name</th>
              <th>Contact number</th>
              <th>Type of insurance</th>
              <th>Tentative renew date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>
         
      </div>
      </div>
    );
  }
}
