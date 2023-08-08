import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Call.css";

const Call = (props) => {
  return (
    <div className="call-to-action-wrapper" style={{ margin: props.margin }}>
      <Container>
        <Row>
          <Col lg="12">
            <div className="call-to-action-content-wrapper text-center">
              <h2>
                We Deliver Solution with the Goal of
                <br />A Trusting Relationships
              </h2>
              <p>
                Appropriate for your specific business, making it easy for you
                to have quality IT services.
              </p>
              </div>
              </Col>
              <Col lg="12">
              <div className="call-to-action-button">
                <Link to="/LearnMore">Learn More</Link>
              </div>
              </Col>            
          
        </Row>
      </Container>
    </div>
  );
};
export default Call;
