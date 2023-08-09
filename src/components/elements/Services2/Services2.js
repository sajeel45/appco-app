import { Container,Row,Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Services2.css";

const Services2 = (props) => {
    const services = props.services2;
    return(
        <div className="about-us-services-wrapper">
            <Container>
                <Row>
                    <Col lg="12" md="12" sm="12">
                        <div className="about-us-services-content-wrapper text-center">
                        <h3>We're driven by our values</h3>
                        <p>The app provides design and digital marketing. </p>
                        </div>
                    </Col>
                    {services.map((item,index)=>(
                    <Col lg="4" md="6" sm="12">
                        <div className="services2-main-wrapper" key={index}>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                            <div className="service2-wrapper">
                                <div className="service2-item-wrapper">
                            <div className="services2-icon-wrapper">
                                <span>{item.icon}</span>
                            </div>
                            <div className="services2-content-wrapper text-center">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
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
    )
}
export default Services2;