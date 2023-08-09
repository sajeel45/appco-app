import { Container, Row, Col } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import pagetitlebg from "../../../assets/contact/contact-thumb.jpg";
import "./FeaturesPage.css";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div
      className="features-page-wrapper"
      style={{ backgroundImage: `url(${pagetitlebg})` }}
    >
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="features-page-content">
              <span>Amazing and Exciting Features</span>
              <h3>
                Experience Amazing Features <br /> in Our Application!
              </h3>
              <div className="features-breadcrumbs">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><FaChevronRight color="white"/></li>
                  <li>Features</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FeaturesPage;
