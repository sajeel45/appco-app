import { Container, Row, Col } from "react-bootstrap";
import thumb from "../../../assets/contact/contact-thumb.jpg";
import { Link } from "react-router-dom";
import { FaChevronRight,FaLinkedin,FaFacebook,FaTwitter } from "react-icons/fa";
import "./TeamPage.css";

const TeamPage = (props) => {
  const teamMembers = props.teamMembers2;
  return (
    <>
      <div className="team-page-wrapper">
        <div
          className="team-page-background team-page-breadcrumb"
          style={{ backgroundImage: `url(${thumb})` }}
        >
          <span>Meet Our Dedicated Team Members</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <FaChevronRight color="white" />
            </li>
            <li>Team Members</li>
          </ul>
        </div>
        <Container>
        <div className="team-members-page-section-wrapper">
          <Row>
            {teamMembers.map((item, index) => (
              <Col lg="4" md="6" sm="12">
                
                  <div className="team-member-single-item-wrapper" key={index}>
                    <div className="team-member-single-item-image-wrapper">
                      <img src={item.src} alt="tam-member" />
                    </div>
                    <div className="team-member-single-content-wrapper text-center">
                      <h5>{item.name}</h5>
                      <span>{item.designation}</span>
                      <div className="team-member-single-social-links">
                        <ul>
                          <li>
                            <Link to="https://www.linkedin.com/in/muhammad-sajeel-34405b221/">
                              <FaLinkedin color="white" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <FaTwitter color="white" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <FaFacebook color="white" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                
              </Col>
            ))}
          </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
export default TeamPage;
