import React from "react";
import { Link } from "react-router-dom";
import "../CSS/footer.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <div>
      <div class="waves" style={{ marginBottom: "-6%" }}>
        <svg width="100%" height="200px" fill="none">
          <path
            fill="#8395A7"
            d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 

          V 359 
          H 0 
          V 67
          Z"
          >
            <animate
              repeatCount="indefinite"
              fill="#454599"
              attributeName="d"
              dur="15s"
              values="
            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z
            "
            ></animate>
          </path>
        </svg>
      </div>
      <footer
        className="footer"
        style={{ backgroundColor: "#8395A7", position: "sticky" }}
      >
        <div className="container">
          <Row md={12} sm={12}>
            <Col md={5} sm={12} className="image">
              <Image
                className="img-fluid"
                src={require("../../images/logo.png")}
                style={{ marginTop: "22%", marginLeft: "-40%", height: "40%" }}
              />
            </Col>
            <Col md={10} sm={12} className="links">
              <Row className="linkk4">
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  className="mr-2 linkk1"
                >
                  About Us
                </Link>
                |
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  className="mr-2 ml-2 linkk1"
                >
                  Our Team
                </Link>
                |{" "}
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  className="mr-2 ml-2 linkk1"
                >
                  Careers
                </Link>{" "}
                |
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  className="mr-2 ml-2 linkk1"
                >
                  {" "}
                  Articles
                </Link>{" "}
                |{" "}
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  className="ml-2 linkk1"
                >
                  Partnerships
                </Link>
              </Row>
              <Row className="iconss">
                <a
                  className="icon"
                  href="https://plus.google.com/"
                  style={{ color: "white" }}
                >
                  <i className="fa fa-google-plus fa-2x"></i>
                </a>
                <a
                  className="icon"
                  href="https://www.facebook.com/"
                  style={{ color: "white" }}
                >
                  <i className="fa fa-facebook-square fa-2x ml-3"></i>
                </a>
                <a
                  className="icon"
                  href="https://www.linkedin.com/"
                  style={{ color: "white" }}
                >
                  <i className="fa fa-linkedin fa-2x ml-3"></i>
                </a>
                <a
                  className="icon"
                  href="https://www.youtube.com/"
                  style={{ color: "white" }}
                >
                  <i className="fa fa-youtube-play fa-2x ml-3"></i>
                </a>
                <a
                  className="icon"
                  href="https://twitter.com/"
                  style={{ color: "white" }}
                >
                  <i className="fa fa-twitter-square fa-2x ml-3"></i>
                </a>
                <a
                  className="icon"
                  href="https://www.instagram.com/"
                  style={{ color: "white" }}
                >
                  <i className="fa fa-instagram fa-2x ml-3"></i>
                </a>
              </Row>
              <Row className="mb-2 links2" style={{ marginTop: "5%" }}>
                <Link
                  to="/disclaimer"
                  style={{ textDecoration: "none" }}
                  className="mr-2 linkk"
                >
                  Disclaimer
                </Link>
                |{" "}
                <Link
                  to="/privacy"
                  style={{ textDecoration: "none" }}
                  className="mr-2 ml-2 linkk"
                >
                  Privacy Policy
                </Link>
                |{" "}
                <Link
                  to="/terms"
                  style={{ textDecoration: "none" }}
                  className="mr-2 ml-2 linkk"
                >
                  Terms & Conditions
                </Link>{" "}
                |
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  className="mr-2 ml-2 linkk"
                >
                  Contact Us
                </Link>{" "}
                |{" "}
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  className="mr-2 ml-2 linkk link12"
                >
                  Customer Service
                </Link>
                |{" "}
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  className="mr-2 ml-2 linkk links3 link12"
                >
                  Downloads
                </Link>
              </Row>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
