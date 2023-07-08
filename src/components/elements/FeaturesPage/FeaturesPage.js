import { Container,Row,Col } from "react-bootstrap";
import pagetitlebg from "../../../assets/servicePage/page-title-bg.jpg";
import featuresImg from "../../../assets/featuresPage/fun-fact-thumb.png";
import "./FeaturesPage.css";


const FeaturesPage = () => {
    return(
        <div className="features-page-wrapper" style={{backgroundImage:`url(${pagetitlebg})`}}>
            <Container>
                <Row>
                    <Col lg="7" md="7" sm="12">
                        <div className="features-page-content" >
                            <span>Amazing and Exciting Features</span>
                            <h3>Experience Amazing Features <br /> in Our Application!</h3>
                        </div>
                    </Col>
                    <Col lg="5" md="5" sm="12">
                        <div className="features-page-thumb-wrapper">
                            <img src={featuresImg} alt="thumb"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default FeaturesPage;