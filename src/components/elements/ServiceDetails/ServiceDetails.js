import { Container,Row,Col } from "react-bootstrap";
import {FaDownload,FaFile} from "react-icons/fa";
import serviceThumb from "../../../assets/serviceDetails/service-details-thumb.jpg";
import "./ServiceDetails.css";

const ServiceDetails = (props) =>{
    const detailsItems = props.detailsItems;
    return(
        <div className="service-details-wrapper">
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="detail-items-wrapper">
                            {detailsItems.map((item,index)=>(
                                <div className="detail-item-wrapper">
                                    <span>{item.icon}</span>
                                    <span className="caption-wrapper mx-3">{item.caption}</span>
                                </div>
                            ))}
                        </div>
                        <div className="download-section mb-2">
                            <span className="mx-2"><FaDownload color="#5754B1"/></span><a href="#" className="download-button-style">Download Docs</a>
                        </div>
                        <div className="characteristics-section">
                        <span className="mx-2"><FaFile color="#5754B1"/></span><a href="#" className="download-button-style">Characteristics</a>
                        </div>
                    </Col>
                    <Col lg="8">
                        <div className="details-content">
                            <div className="details-content-image-wrapper mb-4">
                                <img src={serviceThumb} alt="thumb"/>
                            </div>
                            <div className="detail-service-content">
                            <h3>What we're Building</h3>
                            <p>Tomfoolery wind up blag me old mucker chap super ruddy chancer bobby, vagabond it's your round cuppa cheesed off blower nice one at public school, Why cockup knackered pear shaped amongst spiffing good time he nicked it.</p>
                            <span>He lost his bottle mufty spend a penny cheeky at public school daft get stuffed mate don't get shirty.</span>
                            <p className="py-4">My good sir cup of char no biggie knees up happy days absolutely bladdered don't get shirty with me chimney pot James Bond he lost his bottle me old mucker, 
                                bobby nice one cack codswallop what a load of rubbish Jeffrey barmy blower tomfoolery, 
                                crikey only a quid at public school mufty tosser up the duff say Richard I don't want no agro. 
                                Owt to do with me barney quaint jolly good off his nut vagabond pardon you gutted mate the little 
                                rotter excuse my French, the bee's knees don't get shirty with me he nicked it give us a bell zonked 
                                lavatory Charles gosh, Eaton the BBC is victoria sponge a William bog what a load of rubbish. 
                                Smashing only a quid cockup he lost his bottle bugger Jeffrey mufty, starkers blatant zonked easy 
                                peasy brolly car boot, blimey at public school cheeky bugger you mug david. Tomfoolery a load of 
                                old tosh Queen's English lemon squeezy old hunky-dory mush chap give us a bell bloke, chancer knackered 
                                cheesed off buggered tinkety tonk old fruit car boot only a quid spiffing good time chinwag, 
                                he lost his bottle pukka gutted mate naff horse play cup of tea baking cakes a blinding shot. 
                                bobby the wireless matie boy show.</p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default ServiceDetails;