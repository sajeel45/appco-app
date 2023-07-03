import { Container,Row,Col } from "react-bootstrap";
import { FaCheck, FaDollarSign } from "react-icons/fa";
import "./Packages.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const packages = (props) => {
    const packages = props.packages;
    const packagesFeatures = props.packagesFeatures;
    console.log(packagesFeatures);
    return(
        <div className="packages-section-wrapper">
            <Container>
                <Row>
                    <Col lg="12" md="12" sm="12">
                        <div className="package-heading-wrapper text-center pt-5">
                            <h3>Affordable Pricing and Packages.
                                <br />
Choose your Best One</h3>
                            <p>Distinctively brand cutting-edge imperatives through synergistic infrastructures customize low-risk high-yield processes rather than user friendly.</p>
                        </div>
                    </Col>
                    {packages.map((item,index)=>(
                    <Col lg="4" md="6" sm="12">
                        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
                        <div key={index} className="packages-wrapper pt-5 pb-5 text-center">
                            <div className={index === 1 ? 'center-package package-wrapper' : 'normal-package package-wrapper'} >
                                <div className="package-heading-wrapper">
                                <h6>{item.title}</h6>
                                </div>
                                <div className="package-image-wrapper">
                                    <img src={item.src} alt="package-img" className="img-fluid"/>
                                </div>
                                <hr />
                                <div className="package-features-wrapper">
                                <ul className="features-list">
                                    <li>{item.feature1}</li>
                                    <li>{item.feature2}</li>
                                    <li>{item.feature3}</li>
                                    <li>{item.feature4}</li>
                                    <li>{item.feature5}</li>
                                    <li>{item.feature6}</li>
                                </ul>
                            </div>
                            <div className="price-range-wrapper">
                                    <span><FaDollarSign size="30px" color="#5653b1"/><span className="package-price">{item.price}</span></span>
                                </div>
                            <div className="package-button-wrapper">
                                <a className="main-btn" href="#">Purchase Now</a>
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
export default packages;
