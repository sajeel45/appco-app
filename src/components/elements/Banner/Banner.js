import bannerbg from "../../../assets/Banner/slider-bg.jpg";
import { Container,Row,Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () =>{
    return(
        <div className="banner-wrapper" style={{backgroundImage:`url(${bannerbg})`}}>
            <Container>
                <Row>
                    <Col lg="3" md="3" sm="12">
                        <div className="banner-text-wrap">
                            <div className="banner-upper-text-wrapper">
                            <h4> Secure & IT Services  </h4> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;