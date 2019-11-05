import React from "react";
import Button from "react-bootstrap/Button";
import "../CSS/VehicleDetails.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

 
const Vehicle = () => {
  return (//styling
     
    <div>
       
      <Row className="mt-5">
        <Col xs={12} md={2} sm={12} style={{ alignSelf: "flex-end" }}>
          <Button className=" ml-5 mt-5" style={{ backgroundColor: "#FFAD64" }}>
            WRONG DETAILS?
          </Button>
        </Col>
        <Col xs={12} md={8} sm={12}>
          <Card
            className="mt-5 w-75 shadow-lg ml-5"
            style={{ height: "30rem" }}
          >
            <Card.Body className="text-center">
              <Card
                className="mt-5 w-50"
                style={{
                  height: "3rem",
                  border: "hidden",
                  justifyContent: "center"
                }}
              >
                MANUFACTURER
              </Card>
              <Card
                className="mt-5 w-50"
                style={{
                  height: "3rem",
                  border: "hidden",
                  justifyContent: "center"
                }}
              >
                CAR VARIANT
              </Card>
              <Card
                className="mt-5 w-50"
                style={{
                  height: "3rem",
                  border: "hidden",
                  justifyContent: "center"
                }}
              >
                REGISTRATION YEAR
              </Card>
              <Card
                className="mt-5 w-50"
                style={{
                  height: "3rem",
                  border: "hidden",
                  justifyContent: "center"
                }}
              >
                REGISTERED STATE
              </Card>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={12} md={2} sm={12} style={{ alignSelf: "flex-end" }}>
          <Button className=" mt-5 " style={{ backgroundColor: "#FFAD64" }}>
            VIEW QUOTES
          </Button>
        </Col>
      </Row>
       
    </div>
  );
};

export default Vehicle;
