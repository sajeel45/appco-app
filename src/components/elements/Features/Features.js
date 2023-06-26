import { Container, Row, Col, Nav } from "react-bootstrap";
import featureThumb from "../../../assets/features/features-thumb-1.png";
import {FaHandshake} from "react-icons/fa";
import "./Features.css";

const features = () => {
  return (
    <div className="features-wrapper">
      <Container>
        <Row className="align-items-center">
          <Col lg="9">
          <Container>
              <Row>
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
                    <a class="main-btn" href="#">
                      Learn More
                    </a>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="features-image-thumb-wrapper">
                    <img src={featureThumb} alt="featureThumb" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg="3">
          <Col   className="">
            <div className="features-wrapper">
              <Nav variant="pills" defaultActiveKey="#" className="flex-column align-items-flex-end">
                <Nav.Link href="#" className="text-right pills-style">
                  Settings<span className="feature-icon"><FaHandshake color="white"/></span>
                </Nav.Link>
                <Nav.Link href="#" eventKey="link-1">Report<span className="feature-icon"><FaHandshake color="white"/></span></Nav.Link>
                <Nav.Link href="#" eventKey="link-2">Safety Notices<span className="feature-icon"><FaHandshake color="white"/></span></Nav.Link>
                <Nav.Link href="#" eventKey="link-3">App Lock<span className="feature-icon"><FaHandshake color="white"/></span></Nav.Link>
              </Nav>
            </div>
          </Col>
          </Col>
          
            
          
          
        </Row>
      </Container>
    </div>
  );
};
export default features;
