import { Container,Row,Col } from "react-bootstrap";
import { FaCheck, FaDollarSign } from "react-icons/fa";
import "./Packages.css";

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
                            <h3>Choose Your Plan</h3>
                            <p>Different layouts and styles for team sections.</p>
                        </div>
                    </Col>
                    {packages.map((item,index)=>(
                    <Col lg="4" md="6" sm="12">
                        <div key={index} className="packages-wrapper pt-5 pb-5">
                            <div className={index === 1 ? 'center-package package-wrapper' : 'normal-package package-wrapper'} >
                                <div className="package-heading-wrapper">
                                <h6>{item.title}</h6>
                                </div>
                                <div className="price-range-wrapper">
                                    <span><FaDollarSign /><span className="package-price">{item.price}</span>/month</span>
                                    <p>{item.description}</p>
                                </div>
                                <hr />
                                <div className="package-features-wrapper">
                                <ul className="features-list">
                                    {packagesFeatures.map((item,index)=>(
                                    <li key={index}><span className="check-styling"><FaCheck color="green"/></span>{item.features}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="package-button-wrapper">
                                <a className="main-btn" href="#">Choose Your Plan</a>
                            </div>
                            </div>
                            
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
};
export default packages;
