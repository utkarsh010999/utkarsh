import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import "../CSS/Renewal.css";
import Header3 from "../layout/Header3";
import Button from "react-bootstrap/Button";
import "../CSS/mypolicies.css";

export default class Policies extends Component {
  render() {
    return (
      //stying

      <div>
        <Header3 />

        <div className="policy1">
          <Table responsive>
            <thead>
              <tr style={{ backgroundColor: "#F8E5E5" }}>
                <th colSpan="7">My Policies</th>
              </tr>
              <tr style={{ backgroundColor: "#F8E5E5" }}>
                <th>Name</th>
                <th>Policy Type</th>
                <th>Policy number</th>
                <th>Expiry Date</th>
                <th>Download Policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Download</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Download</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Download</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Download</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Download</Button>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="outline-secondary">Download</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
