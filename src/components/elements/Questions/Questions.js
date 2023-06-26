import { Container,Row,Col } from "react-bootstrap";
import "./Questions.css";

const questions = (props) => {
    const questions = props.questions;
    return(
        <div className="questions-section-wrapper">
            <Container>
                <Row>
                    <Col>
                    <div className="questions-heading-wrapper text-center">
            <h3>Frequently asked questions</h3>
            </div>
        
                    </Col>
                </Row>
            </Container>
            </div>
    )
};
export default questions;