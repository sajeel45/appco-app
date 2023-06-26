import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import feedbackBg from "../../../assets/feedback/feedback-bg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Feedback.css";
const feedback = (props) => {
  const feedbacks = props.feedbacks;
  var settings = {
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  return (
    <div
      className="feedback-wrapper"
      style={{ backgroundImage: `url(${feedbackBg})` }}
    >
      <Container>
        <Row>
          <Slider {...settings}>
            {feedbacks.map((item, index) => (
              <Col key={index}>
                
                <div className="feedback-wrapper">
                
                  <div className="user-image-wrapper">
                    <img src={item.img} alt="user-image" />
                  </div>
                  <div className="feedback-content-wrapper">
                  <Container>
                    <h5>{item.name}</h5>
                    <span className="date-styling">{item.date}</span>
                    <p>{item.feedback}</p>
                    <span><FaStar color="yellow"/><FaStar color="yellow"/><FaStar color="yellow"/><FaStar color="yellow"/><FaStar color="yellow"/></span>
                    </Container>
                  </div>
                  
                </div>
                
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </div>
  );
};
export default feedback;
