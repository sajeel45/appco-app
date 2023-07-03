import { Container, Row, Col } from "react-bootstrap";
import faqShape from "../../../assets/questions/faq-shape.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Questions.css";


const questions = (props) => {
  const questions = props.questions;
  return (
    <div className="questions-section-wrapper pt-5 pb-5" style={{backgroundImage: `url(${faqShape})`}}>
      <Container>
        <Row className="flex-column">
          <Col>
            <div className="questions-heading-wrapper pb-5 text-center">
              <h3>Frequently asked questions</h3>
              <p>Different layouts and styles for team sections.</p>
            </div>
          </Col>
          <Row>
          {questions.map((item,index)=>(
          <Col lg="6" md="12" sm="12">
            <div className="questions-section-main-wrapper" key={index}>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
                <div className="questions-content-wrapper">
                <div className="question-wrapper">
                    <h4>{item.question}</h4>
                </div>
                <div className="answer-wrapper">
                    <p>{item.answer}</p>
                </div>
                </div>
                </AnimationOnScroll>
            </div>
          </Col>
          ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
};
export default questions;
