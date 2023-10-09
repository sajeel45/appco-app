import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = (props) => {
  const blogs = props.blogs;
  return (
    <div className="blogs-wrapper">
      <Container>
        <Col lg="12" md="12" sm="12">
          <div className="blogs-upper-content text-center">
            <h3>Latest blog posts</h3>
            <p>Different layouts and styles for team sections.</p>
          </div>
        </Col>
        <Row>
          {blogs.map((item, index) => (
            <Col lg="4" md="6" sm="12">
              <div className="blog-wrapper" key={index}>
                <div className="blog-image-wrapper">
                  <img src={item.src} alt="blog-post" />
                </div>
                <div className="blog-content-wrapper ">
                  <ul className="list">
                    <li>
                      <a>{item.meta1}</a>
                    </li>
                    <li>
                      <a>{item.meta2}</a>
                    </li>
                  </ul>
                  <h3>
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                </div>
                <Col className="blog-button">
                  <Link className="secondary-btn " to={item.link}>
                    <span className="m-1">
                      <FaArrowRight />
                    </span>
                    Learn More
                  </Link>
                </Col>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Blogs;
