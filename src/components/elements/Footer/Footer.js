import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaDashcube,
} from "react-icons/fa";
import "./Footer.css";

const footer = (props) => {
  const helpLinks = props.helpLinks;
  return (
    <div className="footer-section-wrapper">
      <Container>
        <div className="footer-section-main-wrapper">
        <Row>
          <Col lg="12">
            <Row>
              <Col lg="4">
                <div className="info-wrapper">
                  <div className="footer-logo-wrappe">
                    <img src={logo} alt="footer-logo" />
                  </div>
                  <div className="info-description-wrapper">
                    <p>
                      Lorem ipsum dolor sit amet, consetur acing elit, sed do
                      eiusmod ligal
                    </p>
                  </div>
                  <div className="footer-social-links">
                    <span>
                      <FaFacebook color="black" size="20px" />
                    </span>
                    <span>
                      <FaTwitter color="black" size="20px" />
                    </span>
                    <span>
                      <FaPinterest color="black" size="20px" />
                    </span>
                    <span>
                      <FaLinkedin color="black" size="20px" />
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="help-links-wrapper">
                  <h2 className="footer-title">Help Links</h2>
                  {helpLinks.map((item, index) => (
                    <div className="help-links-list">
                      <ul key={index}>
                        <li>
                          <span>-</span>
                          <a href="#">{item.link}</a>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg="4">
                <div className="contact-information-wrapper">
                  <h2 className="footer-title">Contact Infomation</h2>
                  <div className="address-wrapper">
                    <p>
                      <b>Address:</b>
                      27 Division St, New York, NY 10002, USA
                    </p>
                  </div>
                  <div className="phone-number-wrapper">
                    <p>
                      <b>Phone:</b>
                      +8 91230 456 789
                    </p>
                  </div>
                  <div className="fax-wrapper">
                    <p>
                      <b>Fax:</b>
                      +8 91230 456 789
                    </p>
                  </div>
                  <div className="email-wrapper">
                    <p>
                      <b>Email:</b>
                      example@mail.com
                    </p>
                  </div>
                  <div className="website-wrapper">
                    <p>
                      <b>Website:</b>
                      yourwebsite.com
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <hr />
          <Col lg="12">
            <Row>
              <Col lg="8" md="6" sm="12">
                <div className="copyright-section">
                  Copyright © appie all rights reserved.
                </div>
              </Col>
              <Col lg="4" md="6" sm="12">
                    <div className="footer-section-bottom-links">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
              </Col>
            </Row>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
};
export default footer;
