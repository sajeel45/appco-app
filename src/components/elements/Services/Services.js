import { Container,Row,Col } from "react-bootstrap";
import background from "../../../assets/service/shape-1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css';

const services = (props) => {
    const services = props.services;
    return(
        <div className="services-wrapper" style={{backgroundImage:`url(${background})` }}>
            <Container>
                <Row>
                    <Col lg="12" md="12" sm="12" className="text-center" >
            <div className="services-content-wrapper">
                <h3>
                    Designed with.
                    <br />
                    The applicant in mind
                </h3>
                <p>The full monty spiffing good time no biggie cack grub fantastic. </p>
            </div>
            </Col>
            </Row>
            <Row>
            {services.map((item,index)=>(
                <Col lg="3" md="6" sm="12">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <div className="service-items-wrapper">
                    <div className="service-item-wrapper" key={index}>
                        <div className="service-icon-wrapper">
                            <span>{item.icon}</span>
                            <span className="service-item-count">{item.count}</span>
                        </div>
                        
                        <div className="service-content-wrapper">
                            <h4 className="text-align-center">{item.title}</h4>
                            <p className="text-align-center">{item.description}</p>
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
export default services;