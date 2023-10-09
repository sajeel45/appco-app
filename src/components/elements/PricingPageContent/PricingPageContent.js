import { Container, Row, Col } from "react-bootstrap";
import pagetitlebg from "../../../assets/contact/contact-thumb.jpg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PricingPageContent = () => {
  return (
    <div
      className="pricing-page-content-wrapper"
      style={{ backgroundImage: `url(${pagetitlebg})` }}
    >
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="pricing-content">
              <span>Affordable Pricing</span>
              <h3>
                Unlock the Full Potential of Our <br />
                Feature-Packed Application <br />
                at Competitive Prices!
              </h3>
              <ul>
                <li>
                  <Link to="/" className="">
                    Home
                  </Link>
                </li>
                <li>
                  <FaChevronRight color="white" />
                </li>
                <li>Pricing</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PricingPageContent;
