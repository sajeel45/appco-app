import { Container, Row, Col } from "react-bootstrap";
import serviceThumb from "../../../assets/contact/contact-thumb.jpg";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <div
      className="service-page-wrapper"
      style={{backgroundImage: `url(${serviceThumb})`}}
    >
      <Container>
        <Row>
          <Col lg="6" md="6" sm="!2">
            <div className="service-page-thumb-wrapper">
                <span>Fast Development</span>
                <h3>
                Simple but effective, <br /> effortless yet powerful.
                </h3>
                <ul>
                  <li><Link to="/" className="">Home</Link></li>
                  <li><FaChevronRight color="white"/></li>
                  <li>Services</li>
                </ul>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ServicePage;
