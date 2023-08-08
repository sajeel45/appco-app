import { Container, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = (props) => {
    const testimonials = props.testimonials;
    var settings = {
      dots:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll:1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll:1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll:5
          }
        }
      ]

    }
  return (
    <div className="testimonial-section-wrapper" style={{paddingBottom:props.paddingBottom}}>
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
          <Slider {...settings}>
          {testimonials.map((item,index)=>(
            
               
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
                
                ))}
        </Slider>
        </Row>
      </Container>
    </div>
  );
};
export default Testimonials;
