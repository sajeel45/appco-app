import { Container,Row,Col } from "react-bootstrap";
import pagetitlebg from "../../../assets/servicePage/page-title-bg.jpg";
import pricingThumb from "../../../assets/pricingPage/pricing.png";
import "./PricingPageContent.css";

const PricingPageContent = () => {
    return(
        <div className="pricing-page-content-wrapper" style={{backgroundImage:`url(${pagetitlebg})`}}>
            <Container>
                <Row>
                    <Col lg="7" md="7" sm="12">
                        <div className="pricing-content">
                            <span>Affordable Pricing</span>
                            <h3>Unlock the Full Potential of Our <br />Feature-Packed Application <br />at Competitive Prices!</h3>
                        </div>
                    </Col>
                    <Col lg="5" md="5" sm="12">
                        <div className="pricing-page-content-thumb-wrapper">
                            <img src={pricingThumb} alt="pricingThumb"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PricingPageContent;