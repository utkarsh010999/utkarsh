import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CSS/Agentlist.css";

export default class AgentList extends Component {
  render() {
    return (
      <div>
        <Col sm={12} md={2} xs={12}>
          <Row sm={12} md={2} xs={12}>
            <ListGroup className="listt" style={{ marginTop: "3%" }}>
              <Link to="/agentport" style={{textDecoration:"none"}}>
                <ListGroup.Item >New Business</ListGroup.Item>
              </Link>
              <Link to="/renewal" style={{textDecoration:"none"}}>
                <ListGroup.Item>Renewal</ListGroup.Item>
              </Link>
              <Link to="/leads" style={{textDecoration:"none"}}>
                <ListGroup.Item>Leads</ListGroup.Item>
              </Link>
              <Link to="/ncb" style={{textDecoration:"none"}}>
                <ListGroup.Item>Ncb/Pyp</ListGroup.Item>
              </Link>
              <Link to="/uploaddoc" style={{textDecoration:"none"}}>
                <ListGroup.Item>Upload Documents</ListGroup.Item>
              </Link>
              <Link to="/raiseselfInspection" style={{textDecoration:"none"}}>
                <ListGroup.Item>Raise Self Inspection</ListGroup.Item>
              </Link>
              <Link to="/transaction" style={{textDecoration:"none"}}>
                <ListGroup.Item>Your Transactions</ListGroup.Item>
              </Link>
              <Link to="/poscertificate" style={{textDecoration:"none"}}>
                <ListGroup.Item>Pos Certificate</ListGroup.Item>
              </Link>
            </ListGroup>
          </Row>
        </Col>
      </div>
    );
  }
}
