import { Container,Row,Col } from "react-bootstrap";
import trafficThumb from "../../../assets/traffic/traffic-thumb.png";
import "./Traffic.css";
import { FaArrowRight } from "react-icons/fa";

const trafficArea = (props) => {
    const trafficItems = props.trafficItems; 
    return(
        <div className="traffic-area-wrapper">
            <Container>
                <Row>
                    <Col lg="7">
                    
                    <div className="traffic-area-text-wrapper">
                    <span>Traffic</span>
                    <h3 class="title">Stage reporting with  50k queries.</h3>
                    <p>He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.</p>
                    </div>
                    <Row>
                        {trafficItems.map((item,index)=>(
                        <Col lg="6" md="6" key={index}>
                            
                            <div className="traffic-item-wrapper">
                                <div className="traffic-item-text-wrapper">
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                                <div className="traffic-item-icon-wrapper">
                                    <span>{item.icon}</span>
                                </div>
                            </div>
                           
                        </Col>
                        ))}
                        <Col lg="12">
                        <a class="secondary-btn" href="#"><span style={{marginRight:"5px"}}><FaArrowRight /></span>Learn More </a>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                </Container>
        </div>
    )
}
export default trafficArea;