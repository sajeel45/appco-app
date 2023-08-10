import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import pagetitlebg from "../../../assets/contact/contact-thumb.jpg";
import { Link } from "react-router-dom";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import "./twoColumn.css";

const TwoColumn = (props) => {
  const twoBlogs = props.twoBlogs;
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = twoBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const pageCount = Math.ceil(twoBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };



  

  return (
    <div className="two-column-blogs-wrapper">
      <div
        className="two-column-thumb-wrapper"
        style={{ backgroundImage: `url(${pagetitlebg})` }}
      >
        <div className="two-column-heading text-center">
          <h3>2 Column Layout</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <FaChevronRight color="white" />
            </li>
            <li>2 Column Blog</li>
          </ul>
        </div>
      </div>
      <Container>
        <Row className="align-content-center mt-5">
          {currentBlogs.map((item, index) => (
            <Col lg="6" md="6" sm="12">
              <div className="two-column-blogs-wrapper" key={index}>
                <div className="two-column-blog-wrapper">
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
                    <p>{item.description}</p>
                    <div className="read-more-button">
                      <Link to={item.link}>
                        Read More
                        <span>
                          <FaArrowRight color="black" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </Col>
          ))}
          <div className="pagination">
          <button onClick={handlePrevClick} disabled={currentPage === 1} className="page-btn-style">
          Previous
        </button>
            {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active page-btn-style' : 'page-btn-style'}
          >
            {index + 1}
          </button>
          
        ))}
        <button onClick={handleNextClick} disabled={currentPage === pageCount} className="page-btn-style">
          Next
        </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default TwoColumn;
