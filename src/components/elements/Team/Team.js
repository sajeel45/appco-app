import { Container,Row,Col } from "react-bootstrap";
import {FaArrowRight,FaFacebook,FaPinterest,FaTwitter} from "react-icons/fa";
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
                        <div className="team-member-wrapper" key={index}>
                            <div className="team-member-image-wrapper">
                                <img src={item.src} alt="teamMember"/>
                                <ul>
                                    <li><a href="#"><FaPinterest color="black"/></a></li>
                                    <li><a href="#"><FaTwitter color="black"/></a></li>
                                    <li><a href="#"><FaFacebook color="black"/></a></li>
                                </ul>
                            </div>
                            <div className="team-member-content-wrapper text-center pt-3">
                                <h5>{item.name}</h5>
                                <span>{item.designation}</span>
                            </div>
                        </div>
                    </Col>
                    ))}
                    <Col className="text-center">
                    <a className="secondary-btn  mt-50" href="#"><span className="m-1"><FaArrowRight /></span>View all Members</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default Team;