import { Container, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = (props) => {
    const testimonials = props.testimonials;
  return (
    <div className="testimonial-section-wrapper">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="testimonial-upper-content-wrapper text-center">
              <h3>What Says Our Most Of</h3>
              <h2>
                Happy <span>Clients</span>
              </h2>
              <div className="bar bar-big"></div>
            </div>
           
          </Col>
          {testimonials.map((item,index)=>(
            <Col lg="4" md="6" sm="12">
              <div className="testimonials-wrapper">
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
                <div className="testimonial-wrapper"  key={index}>
                    <div className="testimonial-image-wrapper">
                        <img src={item.img} alt="slider-item"/>
                    </div>
                    <div className="testimonial-content-wrapper text-center">
                        <div className="testi-description">
                            <p>{item.feedback}</p>
                        </div>
                        <div className="stars-wrapper">
                            <span><FaStar color="#5653b1" size={30}/></span>
                            <span><FaStar color="#5653b1" size={30}/></span>
                            <span><FaStar color="#5653b1" size={30}/></span>
                            <span><FaStar  size={30}/></span>
                            <span><FaStar  size={30}/></span>
                        </div>
                        <div className="testi-name-wrapper">
                            <h5 className="mt-3">{item.name}</h5>
                        </div>
                        <div className="testi-skill-wrapper">
                            <span>{item.skill}</span>
                        </div>
                    </div>
                </div>
                </AnimationOnScroll>
                </div>
                </Col>
                
                ))}
        </Row>
      </Container>
    </div>
  );
};
export default Testimonials;
