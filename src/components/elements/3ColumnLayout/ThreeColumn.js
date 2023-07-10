import { Container,Row,Col } from "react-bootstrap";
import blog1 from "../../../assets/blogs/blog-2.jpg";
import blog2 from "../../../assets/blogs/blog-3.jpg";
import "./ThreeColumn.css";
const blogItems = [
    {
        id:11,
        src:blog1,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"Introducing New Apps Design for our iOS App",
    },
    {
        id:12,
        src:blog2,
        meta1:"Saas & App",
        meta2:"April 14,2022",
        title:"Introducing New Apps Design for our iOS App",
    },
]
const ThreeColumn = (props) =>{
    const twoBlogs = props.twoBlogs;
    const previousBlogs = twoBlogs.slice(0,10);
    const newBlogs = previousBlogs.concat(blogItems);
    console.log(newBlogs);
    return(
        <div className="three-column-page-wrapper">
            <Container>
                <Row>
                    <Col lg="12" md="12" sm="12">
                    <div className="three-column-heading text-center">
                <h3>3 Column Layout</h3>
                </div>
                    </Col>
                    {newBlogs.map((item,index)=>(
                    <Col lg="4" md="6" sm="12">
                        <div className="three-column-blogs-wrapper" key={index}>
                            <div className="three-column-blog-wrapper">
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
}
export default ThreeColumn;