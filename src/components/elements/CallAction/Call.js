import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Call.css";

const Call = () => {
    return(
        <div className="call-to-action-wrapper">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="call-to-action-content-wrapper text-center">
                        <h2>We Deliver Solution with the Goal of<br />A Trusting Relationships</h2>
                        <p>Appropriate for your specific business, making it easy for you to have quality IT services.</p>
                        <div className="call-to-action-button">
                        <Link to="/LearnMore">Learn More</Link>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default Call;