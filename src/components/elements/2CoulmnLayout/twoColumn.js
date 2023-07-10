import { Container,Row,Col } from "react-bootstrap";
import pagetitlebg from "../../../assets/servicePage/page-title-bg.jpg";
import "./twoColumn.css";

const twoColumn = (props) =>{
    const twoBlogs = props.twoBlogs;
    return(
        <div className="two-column-blogs-wrapper">
            <Container>
                <Row className="align-content-center">
                    <Col lg="12">
                    <div className="two-column-heading text-center">
                <h3>2 Column Layout</h3>
                </div>
                
                    </Col>
                    {twoBlogs.map((item,index)=>(
                    <Col lg="6" md="6" sm="12">
                        <div className="two-column-blogs-wrapper" key={index}>
                            <div className="two-column-blog-wrapper">
                            <div className="blog-image-wrapper">
                        <img src={item.src} alt="blog-post"/>
                    </div>
                    <div className="blog-content-wrapper ">
                    <ul className="list">
                            <li><a>{item.meta1}</a></li>
                            <li><a>{item.meta2}</a></li>
                        </ul>
                        <h3><a href="#">{item.title}</a></h3>
                    </div>
                            </div>
                        </div>
                    </Col>))}
                </Row>
            </Container>
            </div>
       
            
    )
};
export default twoColumn;