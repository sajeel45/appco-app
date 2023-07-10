import { Container,Row,Col,Form,Button  } from "react-bootstrap";
import projectbg from "../../../assets/subscription/project-bg.jpg";
import projectThumb from "../../../assets/subscription/project-thumb.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import "animate.css";
import "./project.css";

const project = () =>{
    return(
        <Container>
            <Row>
                <Col lg="12">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                <div className="project-section-wrapper mt-100" style={{backgroundImage:`url(${projectbg})`}}>
                <Row>
                    <Col lg="6" md="12" sm="12">
                        <div className="project-section-content">
                        <h3>Start your project with appie.</h3>
                        <p>We will email you only about this product.</p>
                        </div>
                        <div className="email-input-wrapper mt-30">
                        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="d-flex input-panel-style">
            <div>
            <Form.Control type="email" placeholder="Your Email" className="input-tab-style"/>
            </div>
            <div>
            <Button className="email-btn-syle"><Link to="/" className="project-btn-style">Subscribe</Link></Button>
            </div>
        
        
        </div>
        </Form.Group>
        
        
        </Form>
                        </div>
                    </Col>
                    <Col lg="6" md="12" sm="12">
                    <div className="project-thumb">
                    <img src={projectThumb} alt="projectThumb"/>
                </div>
                    </Col>
                </Row>
                
                </div>
                </AnimationOnScroll>
                </Col>
            </Row>
        
                
        
        </Container>
        
        )
    
}
export default project;