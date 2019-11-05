import React, { Component } from "react";
import "../CSS/Earning.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Header2 from "../layout/Header2";
import Dashboard from "../layout/Dashboard";
import AgentList from "../layout/Agentlist";
 
export default class Earning extends Component {
  render() {

    
    
    return ( //styling

   
      <div>
        <Header2/>
        <Dashboard/>
        <AgentList/>
      <div
        className="earn"
        style={{
          overflow: "scroll"
        }}
      >
        <Table responsive>  
          <thead>
            <tr style={{ backgroundColor: "#F8E5E5" }}>
              <th className="text-left" colSpan="12">
                EARNING
              </th>
            </tr>
            <tr style={{ backgroundColor: "#F8E5E5" }}>
              <th>Policy type</th>
              <th>Name</th>
              <th>Date issue</th>
              <th>OD Premimum </th>
              <th>TDP premimum</th>
              <th>Gross premimum</th>
              <th>Commission rate </th>
              <th>Base Commission</th>
              <th>TDS</th>
              <th>Total commission</th>
              <th>Payment status</th>
              <th>Payment date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
              <td> -</td>
            </tr>
          </tbody>
        </Table>
         </div>
      </div>
    );
  }
}
