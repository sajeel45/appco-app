import { Container,Row,Col } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
    return(
        <div className="aboutUs-top-title-wrapper">
            <Container>
                <Row>
                    <Col lg="7">
                        <div className="about-us-top-title-wrapper">
                        <h2 className="title">The leading people Management platform</h2>
                        <p>We offer you a panoply of cutting-edge options.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs;