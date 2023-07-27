import { Container,Row,Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./ServiceDetails.css";

const ServiceDetails = (props) =>{
    const servicesItems = props.servicesItems;
    return(
        <div className="service-details-wrapper">
            <Container>
                <Row>
                    <Col lg="12" sm="12" md="12">
                        <div className="details-heading-wrapper">
                        <h3>What We Provide</h3>
                        <div class="bar bar-big"></div>
                        </div>
                    </Col>
                    {servicesItems.map((item,index)=>(
                    <Col lg="4" md="6" sm="12">
                        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
                        <div className="service-page-items-wrapper">
                            <div className="service-page-item-wrapper" key={index}>
                                <div className="service-page-item-icon-wrapper">
                                    <span>{item.icon}</span>
                                </div>
                                <div className="service-page-item-title-wrapper py-3">
                                <h2>{item.title}</h2>
                                </div>
                                <div className="service-page-item-description-wrapper text-center">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                        </AnimationOnScroll>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
};
export default ServiceDetails;