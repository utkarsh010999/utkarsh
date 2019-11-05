import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Summary from "./PolicySummary";
import "../CSS/quotes.css";

export default class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issummary: false,
      isquotes: true
    };

    this.handlequotes = this.handlequotes.bind(this); //handle function for quote button
    this.handlesummary = this.handlesummary.bind(this);
  }

  handlequotes() {
    this.setState({ isquotes: true, issummary: false });
  }
  handlesummary() {
    this.setState({ isquotes: false, issummary: true });
  }

  render() {
    if (this.state.isquotes) {
      return ( //styling
        <div>
          <Row
            xs={12}
            sm={6}
            className=""
            style={{ textAlign: "-webkit-right" }}
          >
            <Col md={5}>
              <Button variant="hidden">3rd Party + Vehicle Damage</Button>
            </Col>
            <Col md={2}>
              <Button variant="hidden"> 3rd Party Only</Button>
            </Col>
            <Col md={4}>
              <Card className="text-center w-25 mr-5">
                Filter:
                <Row>
                  <input type="checkbox" className="ml-4 mt-2" />
                  Zero Dep
                </Row>
                <Row>
                  <input type="checkbox" className="ml-4 mt-2" />
                  Pa Cover
                </Row>
              </Card>
            </Col>
          </Row>

          <Row xs={12} md={8} sm={6}>
            <Col xs={12} md={3} sm={6}>
              <Card
                className=" mr-5 mt-5 border-secondary"
                style={{ height: "25rem", border: "hidden" }}
              >
                <Row>
                  <Card
                    className=" mt-3 mr-5 border-secondary"
                    style={{ border: "hidden" }}
                  >
                    Car No:
                  </Card>
                </Row>
                <Row>
                  <Card
                    className=" mt-3 mr-5 border-secondary"
                    style={{ border: "hidden" }}
                  >
                    Manufacturer:
                  </Card>
                </Row>
                <Row className="varcar">
                  <Card
                    className=" mt-4  border-secondary"
                    style={{ border: "hidden" }}
                  >
                    Car Variant:
                  </Card>
                </Row>
                <Row className="mancar">
                  <Card
                    className=" mt-3  border-secondary"
                    style={{ border: "hidden" }}
                  >
                    Manufacturing Year:
                  </Card>
                </Row>
              </Card>
            </Col>

            <Col xs={12} md={9} sm={6}>
              <Card
                className="border-secondary text-center quotcard"
                style={{ border: "hidden" }}
              >
                <Row className='quotes1'>
                  <Col>
                    <Card
                      className="border-secondary card1"
                      style={{ border: "hidden" }}
                    >
                      National Insurance
                      <Button
                        className=" border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                        onClick={this.handlesummary}
                      >
                        Rs 3,729
                      </Button>
                    </Card>
                  </Col>

                  <Col>
                    <Card
                      className=" border-secondary card2"
                      style={{ border: "hidden" }}
                    >
                      Bajaj Allianz
                      <Button
                        className=" border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                      >
                        Rs 5,102
                      </Button>
                    </Card>
                  </Col>

                  <Col>
                    <Card
                      className=" border-secondary card3"
                      style={{ border: "hidden" }}
                    >
                      Star Health Insurance
                      <Button
                        className=" border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                      >
                        Rs 4,435
                      </Button>
                    </Card>
                  </Col>
                </Row>

                <Row className="quotes2">
                  <Col>
                    <Card
                      className=" border-secondary card4"
                      style={{ border: "hidden" }}
                    >
                      Max Life
                      <Button
                        className=" border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                      >
                        Rs 6,213
                      </Button>
                    </Card>
                  </Col>

                  <Col>
                    <Card
                      className="  border-secondary card5"
                      style={{ border: "hidden" }}
                    >
                      LIC
                      <Button
                        className="border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                      >
                        Rs 5,735
                      </Button>
                    </Card>
                  </Col>

                  <Col>
                    <Card
                      className=" border-secondary card6"
                      style={{ border: "hidden" }}
                    >
                      Reliance Health Insurance
                      <Button
                        className="border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                      >
                        Rs 5,623
                      </Button>
                    </Card>
                  </Col>
                </Row>

                <Row className="quotes3">
                  <Col>
                    <Card
                      className="  border-secondary card7"
                      style={{ border: "hidden" }}
                    >
                      Metlife Health Insurance
                      <Button
                        className=" border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                      >
                        Rs 4,234
                      </Button>
                    </Card>
                  </Col>

                  <Col>
                    <Card
                      className="  border-secondary card8"
                      style={{ border: "hidden" }}
                    >
                      PNB life Insurance
                      <Button
                        className=" border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                      >
                        Rs 6,231
                      </Button>
                    </Card>
                  </Col>

                  <Col>
                    <Card
                      className="  border-secondary card9"
                      style={{ border: "hidden" }}
                    >
                      SBI Insurance
                      <Button
                        className="border-secondary"
                        variant="hidden"
                        style={{ alignSelf: "center" }}
                      >
                        Rs 4.234
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      );
    } else if (this.state.issummary) {
      return <Summary />;
    }
  }
}