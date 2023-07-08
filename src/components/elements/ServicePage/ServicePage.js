import { Container, Row, Col } from "react-bootstrap";
import servicebg from "../../../assets/servicePage/page-title-bg.jpg";
import serviceThumb from "../../../assets/servicePage/fun-fact-thumb.png";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <div
      className="service-page-wrapper"
      style={{ backgroundImage: `url(${servicebg})` }}
    >
      <Container>
        <Row>
          <Col lg="6" md="6" sm="!2">
            <div className="service-page-thumb-wrapper">
                <span>Fast Development</span>
                <h3>
                Simple but effective, <br /> effortless yet powerful.
                </h3>
            </div>
            
          </Col>
          <Col lg="6" md="6" sm="12">
          <div className="service-page-thumb">
                <img src={serviceThumb} alt="service-thumb"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ServicePage;
