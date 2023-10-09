import { Container, Row, Col } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import contactThumb from "../../../assets/contact/contact-thumb.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      className="contact-page-wrapper"
      style={{ backgroundImage: `url(${contactThumb})` }}
    >
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="contact-thumb-content">
              <h2>Contact Us</h2>
              <div class="breadcumb-inner">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <FaChevronRight color="white" />
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
