import { Container,Row,Col } from "react-bootstrap";
import { useEffect,useState } from "react";
import ReactPaginate from 'react-paginate';
import pagetitlebg from "../../../assets/contact/contact-thumb.jpg";
import { Link } from "react-router-dom";
import { FaChevronRight,FaArrowRight } from "react-icons/fa";
import "./twoColumn.css";

const twoColumn = (props) =>{
    const twoBlogs = props.twoBlogs;
    return(
        <div className="two-column-blogs-wrapper" >
            <div className="two-column-thumb-wrapper" style={{backgroundImage:`url(${pagetitlebg})`}}>
            <div className="two-column-heading text-center" >
                <h3>2 Column Layout</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><FaChevronRight color="white"/></li>
                    <li>2 Column Blog</li>
                </ul>
                </div>
                </div>
            <Container>
                <Row className="align-content-center mt-5">
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
                        <h3><Link to={item.link}>{item.title}</Link></h3>
                        <p>{item.description}</p>
                        <div className="read-more-button">
                            <Link to={item.link}>Read More <span><FaArrowRight color="black"/></span></Link>
                        </div>
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