import { Container, Row, Col } from "react-bootstrap";
import sponsorShape from "../../../assets/sponsors/sponser-shape.png";
import "./Sponsors.css";

const sponsors = (props) => {
  const sponsors = props.sponsors;
  return (
    <div className="sponsors-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12" md="12" sm="12">
            <div className="sponsor-section-heading-wrapper text-center">
              <h3>
                Appie works best with <br /> your favorite platforms
              </h3>
              <p>Join over 40,000 businesses worldwide.</p>
            </div>
          </Col>
          {sponsors.map((item,index)=>(
          <Col lg="2" md="2" sm="4">
            <div className="sponsors-wrapper">
                <div className="sponsor-wrapper" key={index}>
                    <div className="sponsor-img-wrapper">
                        <img src={item.img} alt="sponsor-image"/>
                    </div>
                </div>
            </div>
          </Col>
          ))}
        </Row>
        <div className="sponsor-shape-position">
            <img src={sponsorShape} alt="sponsor-shape"/>
        </div>
      </Container>
    </div>
  );
};

export default sponsors;
