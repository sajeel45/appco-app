import { Container,Row,Col,Form } from "react-bootstrap";
import { FaGlobe,FaEnvelope,FaPhone } from "react-icons/fa";
import "./ContactForm.css";
import { Link } from "react-router-dom";

const ContactForm = (props) =>{
    const addressInfo = props.addressInfo;
    return(
        <div className="contact-form-wrapper">
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="contact-info-wrapper">
                            <span>Contact Details</span>
                            <h2>Contact Us</h2>
                            <div class="bar bar-big"></div>
                            <p className="py-4">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>

                        </div>
                        <div className="contact-items-wrapper">
                            {addressInfo.map((item,index)=>(
                            <div className="address-wrapper" key={index}>
                                <span>{item.icon}</span>
                                <div className="adress-section-content">
                                <span>{item.caption}</span>
                                <p className="py-2">{item.info}</p>
                                </div>
                                
                            </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="contact-form-main-wrapper">
                            <div className="form-content">
                            <h5>Get In Touch</h5>
                            <div className="form-title">
                            <h3>Ready to Get Started?</h3>
                            </div>
                            <div class="bar bar-big"></div>
                            <p className="pt-4">Your email address will not be published. Required fields are marked *</p>
                            
                            
                            
                            <div className="consultation-form-wrapper">
            <Form>
              <Form.Group className="mb-3" controlId="ControlId1">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlId2"> 
              <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlId3">
              <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={6} placeholder="Your Message"/>
            </Form.Group>
            </Form>
            <div className="consultation-button-wrapper">
                <Link to="/comsultation" className="consultation-button-style">Free Consulting</Link>
            </div>
          </div>
          </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ContactForm;