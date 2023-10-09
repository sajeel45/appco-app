import { Container, Row, Col } from "react-bootstrap";
import AboutUsBg from "../../../assets/aboutpageContent/about-page-bg.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AboutUsContent = () => {
  return (
    <div
      className="about-us-content-wrapper"
      style={{ backgroundImage: `url(${AboutUsBg})` }}
    >
      <Container>
        <Row>
          <Col lg="8">
            <div className="about-us-content-area">
              <h3>Join our team to create the best digital solutions.</h3>
              <p>
                He nicked it up the duff a load of old tosh bleeder butty bugger
                all mate cheeky bugger bodge tickety boo, mush well Richard
                geeza buggered haggle david you mug I, such a fibber my good sir
                knackered down the pub baking cakes chancer golly gosh. Car boot
                give us a bell bits and hanky panky me old mucker fantastic in
                my flat so I said nice one he lost his bottle.
              </p>
              <div className="about-us-button-wrapper">
                <Link className="secondary-btn " to="#">
                  Learn More
                  <span className="m-1">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutUsContent;
