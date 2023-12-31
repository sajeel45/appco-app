import heroThumb from "../../../assets/Banner/hero-thumb-1.png";
import heroThumb2 from "../../../assets/Banner/hero-thumb-2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";

const Banner = (props) => {
  return (
    <div className="banner-wrapper">
      <Container>
        <Row className="align-items-center justify-content-space-between">
          <Col lg="6" md="6" sm="6">
            <div className="banner-text-wrap">
              <div className="banner-upper-text-wrapper">
                <h4>Secure & IT Services</h4>
                <div className="banner-bottom-text-wrapper">
                  <h1>
                    {" "}
                    Excellent IT services
                    <br />
                    for your success
                  </h1>
                  <p>
                    Pellentesque at posuere tellus phasellus scelerisque porem.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6">
            <div className="hero-thumbs-wrapper">
              <div className="hero-thumb">
                <img src={heroThumb} alt="heroThumb" />
              </div>
              <div className="hero-thumb-2">
                <img src={heroThumb2} alt="heroThumb2" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
