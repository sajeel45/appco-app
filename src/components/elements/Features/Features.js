import { Container, Row, Col, Nav } from "react-bootstrap";
import featureThumb from "../../../assets/features/features-thumb-1.png";
import {FaHandshake,FaLock,FaBell,FaExclamation} from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Features.css";

const features = () => {
  return (
    <div className="features-wrapper">
      <Container>
        <Row className="align-items-center">
        <Col lg="3">
          <Col lg="12" md="6" sm="12"  className="">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
            <div className="features-wrapper">
              <Nav variant="pills" defaultActiveKey="#" className="flex-column">
                <div className="nav-link-wrapper active"> 
                <Nav.Link href="#" className="pills-style">
                <span className="feature-icon"><FaHandshake color="white"/></span>Settings
                </Nav.Link>
                </div>
                <div className="nav-link-wrapper">
                <Nav.Link href="#" eventKey="link-1"><span className="feature-icon"><FaExclamation color="white"/></span>Report</Nav.Link></div>
                <div className="nav-link-wrapper"><Nav.Link href="#" eventKey="link-2"><span className="feature-icon"><FaBell color="white"/></span>Safety Notices</Nav.Link></div>
                <div className="nav-link-wrapper"><Nav.Link href="#" eventKey="link-3"><span className="feature-icon"><FaLock color="white"/></span>App Lock</Nav.Link></div>
              </Nav>
            </div>
            </AnimationOnScroll>
          </Col>
          </Col>
          <Col lg="9">
          <Container>
              <Row>
                <Col lg="6">
                  <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                  <div className="features-image-thumb-wrapper">
                    <img src={featureThumb} alt="featureThumb" />
                  </div>
                  </AnimationOnScroll>
                </Col>
                <Col lg="6">
                  <div className="features-text-wrapper">
                    <span>Custom Reactions</span>
                    <h3>
                      Let the
                      <br />
                      Conversation flow
                    </h3>
                    <p>
                      Car boot absolutely bladdered posh burke the wireless mush
                      some dodg.
                    </p>
                    <a className="main-btn" href="#">
                      Learn More
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          
          
            
          
          
        </Row>
      </Container>
    </div>
  );
};
export default features;
