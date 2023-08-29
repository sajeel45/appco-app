import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import callThumb from "../../../assets/call/cta-bg.jpg";
import funfact from "../../../assets/call/fun-fact-thumb.jpg";
import "./Call.css";

const Call = (props) => {
  return (
    <div style={{ margin: props.margin,}}>
      <Container>
        <div className="call-to-action-section-wrapper" style={{backgroundImage:`url(${callThumb})` }}>
        <Row>
          <Col lg="6" >
            <div className="call-to-action-wrapper">
            <div className="call-to-action-content-wrapper text-center">
              <h2>
                Get Started With 
                <br />Appico Template
              </h2>
              <p>
                Appropriate for your specific business, making it easy for you
                to have quality IT services.
              </p>
              </div>
              <div className="cta-achievements-wrapper">
                <div className="cta-single-achievement-wrapper">
                  <span>700K</span>
                  <p>App Downloads</p>
                </div>
                <div className="cta-single-achievement-wrapper">
                <span>476+</span>
                  <p>Average Review</p>
                </div>
                <div className="cta-single-achievement-wrapper">
                <span>30M</span>
                  <p>Active Users</p>
                </div>
              </div>
              </div>
              </Col>
              <Col lg="6">
                <div className="cta-thumb-wrapper">
                  <div className="cta-thumb">
                    <img src={funfact} alt="fun-fact-thumb"/>
                  </div>
                  <div className="call-to-action-button">
                <Link to="/Contact">Get Started</Link>
              </div>
              </div>
                </Col>            
          
        </Row>
        </div>
      </Container>
    </div>
  );
};
export default Call;
