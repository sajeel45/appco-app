import { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FaQuestion, FaQuestionCircle } from "react-icons/fa";
import faqShape from "../../../assets/questions/faq-shape.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Questions.css";

const Questions = (props) => {
  const questions = props.questions;
  return (
    <section
      className="questions-section-wrapper pb-5"
      style={{ backgroundImage: `url(${faqShape})` }}
    >
      <Container>
        <Row className="flex-column">
          <Col>
            <div className="questions-heading-wrapper text-center">
              <h3>Frequently asked questions</h3>
              <p>Different layouts and styles for team sections.</p>
            </div>
          </Col>
          </Row>
            {questions.map((item, index) => (
                <div className="faq-wrapper">
                <Accordion
                  className="questions-section-main-wrapper"
                  defaultActiveKey="0"
                >
                  <AnimationOnScroll
                    animateIn="animate__fadeIn"
                    animateOnce="true"
                  >
                    <Accordion.Item
                      className="questions-content-wrapper"
                      eventKey={index.toString()}
                    >
                      <Accordion.Header className="question-wrapper">
                        <h4>{item.question}</h4>
                      </Accordion.Header>
                      <Accordion.Body className="answer-wrapper">
                        <p>{item.answer}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </AnimationOnScroll>
                </Accordion>
                </div>
            ))}
      </Container>
    </section>
  );
};
export default Questions;
