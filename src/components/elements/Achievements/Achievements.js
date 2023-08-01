import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import counterThumb from "../../../assets/counter/counter-thumb.jpg";
import "./Achievements.css";

const Achievements = (props) => {
  const achievements = props.achievements;
  return (
    <div className="achievements-section-wrapper">
      <Container>
        <Row>
          <Col lg="5" md="5" sm="12">
            <div className="achievements-thumb-wrapper">
              <img src={counterThumb} alt="thumb" />
            </div>
          </Col>
          <Col lg="7" md="7" sm="12">
            <div className="achievements-content-section">
              <span>Fun Fact</span>
              <h3>See Our Achievement</h3>
              <div className="purple-bar"></div>
              <div className="achievements-description-wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="achievements-items-wrapper">
                {achievements.map((item, index) => (
                  <div className="single-achievement-wrapper" key={index}>
                    <div className="item-count px-3">
                      <span>
                        <CountUp
                          end={item.achievement}
                          duration={2.5}
                          suffix={item.symbol}
                          enableScrollSpy="true"
                          scrollSpyOnce="true"
                          scrollSpyDelay={500}
                        />
                      </span>
                    </div>
                    <div className="single-item-title">
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Achievements;
