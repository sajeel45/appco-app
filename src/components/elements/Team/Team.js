import { Container,Row,Col } from "react-bootstrap";
import {FaArrowRight,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./Team.css"

const Team = (props) => {
    const teamMembers = props.teamMembers;
    return(
        <div className="team-section-wrapper">
            <Container>
                <Row>
                    <Col lg="12" md="12" sm="12">
                        <div className="team-heading-wrapper text-center">
                            <h3>Meet our Team Members</h3>
                            <p>Different layouts and styles for team sections.</p>
                        </div>
                    </Col>
                    {teamMembers.map((item,index)=>(
                    <Col lg="3" md="6" sm="12">
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <div className="team-member-wrapper" key={index}>
                            <div className="team-member-image-wrapper">
                                <img src={item.src} alt="teamMember"/>
                            </div>
                            <div className="team-member-content-wrapper text-center pt-3">
                                <h5>{item.name}</h5>
                                <span>{item.designation}</span>
                                <div className="team-member-social-links pt-3 pb-3">
                                <ul>
                                    <li><a href="#"><FaLinkedin color="white"/></a></li>
                                    <li><a href="#"><FaTwitter color="white"/></a></li>
                                    <li><a href="#"><FaFacebook color="white"/></a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        </AnimationOnScroll>
                    </Col>
                    ))}
                    <Col className="text-center">
                        <div className="team-button-wrapper">
                    <a className="secondary-btn" href="#"><span className="m-1"><FaArrowRight /></span>View all Members</a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default Team;