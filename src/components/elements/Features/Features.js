import { Container, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import featureThumb from "../../../assets/features/features-thumb-2.png";
import "animate.css";
import "./Features.css";

const features = (props) => {
  const features1 = props.features1;
  const features2 = props.features2;
  return (
    <div className="features-wrapper">
      <Container>
        <Row className="align-items-center">
          
          <Col lg="4" >
          
            <div className="features-wrapper" >
            {features1.map((item,index)=>(
              <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
              <div className="single-feature-wrapper py-3" key={index}>
                <div className="feature-icon-wrapper m-3">
                  <span>{item.icon}</span>
                </div>
                <div className="feature-content-wrapper">
                  <div className="feature-title-wrapper">
                    <span>{item.title}</span>
                  </div>
                  <div className="feature-description-wrapper py-2">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              </AnimationOnScroll>
               ))}
            </div>
            
          </Col>
         
          <Col lg="4">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
            <div>
              <img src={featureThumb} alt="feature-thumb"/>
            </div></AnimationOnScroll>

          </Col>
          <Col lg="4"> 
          <div className="features-wrapper" >
            {features2.map((item,index)=>(
              <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
              <div className="single-feature-wrapper py-3" key={index}>
                <div className="feature-icon-wrapper m-3">
                  <span>{item.icon}</span>
                </div>
                <div className="feature-content-wrapper">
                  <div className="feature-title-wrapper">
                    <span>{item.title}</span>
                  </div>
                  <div className="feature-description-wrapper py-2">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              </AnimationOnScroll>
               ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default features;
