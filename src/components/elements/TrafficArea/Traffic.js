import { Container, Row, Col } from "react-bootstrap";
import trafficThumb from "../../../assets/traffic/traffic-thumb.png";
import { FaArrowRight } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import "animate.css";
import "./Traffic.css";

const trafficArea = (props) => {
  const trafficItems = props.trafficItems;
  return (
    <div className="traffic-area-wrapper">
      <Container>
        <Row>
          <Col lg="7">
            <div className="traffic-area-text-wrapper">
              <span>Traffic</span>
              <h3 class="title">Stage reporting with 50k queries.</h3>
              <p>
                He nicked it tickety boo harry the cras bargy chap mush spiffing
                spend a penny the full monty burke butty.
              </p>
            </div>
            <Row>
              {trafficItems.map((item, index) => (
                <Col lg="6" md="6" sm="12" key={index}>
                  <div className="traffic-item-wrapper">
                    <div className="traffic-item-icon-wrapper">
                      <span style={{ marginRight: "5px" }}>{item.icon}</span>
                    </div>
                    <div className="traffic-item-text-wrapper">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
              <Col lg="12" className="mb-5">
                <Link class="secondary-btn" to="/">
                  <span style={{ marginRight: "5px" }}>
                    <FaArrowRight />
                  </span>
                  Learn More{" "}
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg="5">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce="true"
            >
              <div className="traffic-tablet-image">
                <img src={trafficThumb} alt="trafficThumb" />
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default trafficArea;
