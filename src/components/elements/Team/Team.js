import { Container,Row,Col } from "react-bootstrap";
import {FaArrowRight,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
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
                                    <li><Link to="#"><FaLinkedin color="white"/></Link></li>
                                    <li><Link to="#"><FaTwitter color="white"/></Link></li>
                                    <li><Link to="#"><FaFacebook color="white"/></Link></li>
                                </ul>
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
export default Team;