import { Container,Row,Col } from "react-bootstrap";
import background from "../../../assets/contact/contact-thumb.jpg";
import TeamMember from "../../../assets/team/team-4.jpg";
import { Link } from "react-router-dom";
import { FaTwitter,FaFacebook,FaLinkedin,FaYoutube } from "react-icons/fa";
import "./Team4.css";


const Team4 = () => {
    return(
        <div
      className="team-member-single-wrapper"
      
    >
        <div className="team-member-name text-center" style={{ backgroundImage: `url(${background})` }}> 
              <h2>Amelia Harper</h2>
            </div>
      <Container>
        <Row>
            <Col lg="3" md="4" sm="12">
                <div className="team-member-single-image-wrapper">
                    <img src={TeamMember} alt="teamMember"/>
                </div>
                <div className="team-member-single-social-icons">
                    <ul>
                        <li><Link to="#"><FaFacebook color="black"/></Link></li>
                        <li><Link t0="#"><FaTwitter color="black"/></Link></li>
                        <li><Link to="#"><FaLinkedin color="black"/></Link></li>
                        <li><Link to="#"><FaYoutube color="black"/></Link></li>
                    </ul>
                </div>
                </Col>
                <Col lg="9" md="8" sm="12">
                    <div className="team-member-single-content-wrapper">
                        <h3>About Amelia</h3>
                        <p>Tomfoolery wind up blag me old mucker chap super ruddy chancer bobby, vagabond it's your round cuppa cheesed off blower nice one at public school, Why cockup knackered pear shaped amongst spiffing good time he nicked it.</p>
                        <span>He lost his bottle mufty spend a penny cheeky at public school daft get stuffed mate don't get shirty.</span>
                        <p>My good sir cup of char no biggie knees up happy days absolutely bladdered don't get shirty with me chimney pot James Bond he lost his bottle me old mucker, bobby nice one cack codswallop what a load of rubbish Jeffrey barmy blower tomfoolery, crikey only a quid at public school mufty tosser up the duff say Richard I don't want no agro. Owt to do with me barney quaint jolly good off his nut vagabond pardon you gutted mate the little rotter excuse my French, the bee's knees don't get shirty with me he nicked it give us a bell zonked lavatory Charles gosh, Eaton the BBC is victoria sponge a William bog what a load of rubbish. Smashing only a quid cockup he lost his bottle bugger Jeffrey mufty, starkers blatant zonked easy peasy brolly car boot, blimey at public school cheeky bugger you mug david. Tomfoolery a load of old tosh Queen's English lemon squeezy old hunky-dory mush chap give us a bell bloke, chancer knackered cheesed off buggered tinkety tonk old fruit car boot only a quid spiffing good time chinwag, he lost his bottle pukka gutted mate naff horse play cup of tea baking cakes a blinding shot. bobby the wireless matie boy show.</p>
                        
                    </div>
                </Col>
                </Row>
      </Container>
    </div>
    )
};

export default Team4;