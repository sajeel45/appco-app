import bannerbg from "../../../assets/Banner/slider-bg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container,Row,Col } from "react-bootstrap";
import "./Banner.css";

const Banner = (props) =>{
    var settings = {
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3500
      };
      const bannerImages = props.bannerItems;
    return(
        <div className="banner-wrapper" style={{backgroundImage:`url(${bannerbg})`}}>
            <Container>
                <Row>
                    <Col lg="8" md="6" sm="6">
                        <div className="banner-text-wrap">
                            <div className="banner-upper-text-wrapper">
                            <h4>Secure & IT Services</h4> 
                            <div className="banner-bottom-text-wrapper">
                                <h1> Excellent IT services 
                                <br />
                                for your success
                                </h1>
                                <p>Pellentesque at posuere tellus phasellus scelerisque porem.</p>
                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <div className="banner-slider-wrapper">
                            <Slider {...settings}>
                                {bannerImages.map((item,index)=>(
                                <div className="bannerItem-wrapper" key={index}>
                                    <div className="bannerImage-wrapper">
                                        <img src={item.src} alt="bannerImage"/>
                                    </div>
                                </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;