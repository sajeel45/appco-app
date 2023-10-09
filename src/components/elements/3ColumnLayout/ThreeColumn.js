import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import blog2 from "../../../assets/blogs/blog-2.jpg";
import blog3 from "../../../assets/blogs/blog-3.jpg";
import blog1 from "../../../assets/blogs/blog-1.jpg";
import pagetitlebg from "../../../assets/contact/contact-thumb.jpg";
import { Link } from "react-router-dom";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";



const blogItems = [
  {
    id: 19,
    src: blog1,
    meta1: "Saas & App",
    meta2: "April 14,2022",
    title: "17 Effective Ways to Monetize Mobile Apps",
    link: "/Blog1",
    description:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
  },
  {
    id: 20,
    src: blog2,
    meta1: "Saas & App",
    meta2: "April 14,2022",
    title: "How to bring Dolce to your company",
    link: "/Blog2",
    description:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
  },
  {
    id: 21,
    src: blog3,
    meta1: "Saas & App",
    meta2: "April 14,2022",
    title: "Introducing New Apps Design for our iOS App",
    link: "/Blog3",
    description:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
  },
  {
    id: 22,
    src: blog1,
    meta1: "Saas & App",
    meta2: "April 14,2022",
    title: "17 Effective Ways to Monetize Mobile Apps",
    link: "/Blog1",
    description:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
  },
  {
    id: 23,
    src: blog2,
    meta1: "Saas & App",
    meta2: "April 14,2022",
    title: "How to bring Dolce to your company",
    link: "/Blog2",
    description:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
  },
  {
    id: 24,
    src: blog3,
    meta1: "Saas & App",
    meta2: "April 14,2022",
    title: "Introducing New Apps Design for our iOS App",
    link: "/Blog3",
    description:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
  },
  {
    id: 25,
    src: blog1,
    meta1: "Saas & App",
    meta2: "April 14,2022",
    title: "17 Effective Ways to Monetize Mobile Apps",
    link: "/Blog1",
    description:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
  },

  {
    id: 26,
    src: blog2,
    meta1: "Saas & App",
    meta2: "April 14,2022",
    title: "How to bring Dolce to your company",
    link: "/Blog2",
    description:
      "Many people are not aware of their legal rights and dont pay attention to the helping hand they can get from legal advise. Therefore it is very important to know that you are aware of …",
  },
];
const ThreeColumn = (props) => {
  const twoBlogs = props.twoBlogs;
  const previousBlogs = twoBlogs.slice(0, 10);
  const newBlogs = previousBlogs.concat(blogItems);
  console.log(newBlogs);

  const blogsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = newBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
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
    <div className="three-column-page-wrapper">
      <div
        className="three-column-thumb-wrapper"
        style={{ backgroundImage: `url(${pagetitlebg})` }}
      >
        <div className="three-column-heading text-center">
          <h3>3 Column Layout</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <FaChevronRight color="white" />
            </li>
            <li>3 Column Blog</li>
          </ul>
        </div>
      </div>
      <Container>
        <Row className="mt-5">
          {currentBlogs.map((item, index) => (
            <Col lg="4" md="6" sm="12">
              <div className="three-column-blogs-wrapper" key={index}>
                <div className="three-column-blog-wrapper">
                  <div className="blog-image-wrapper">
                    <img src={item.src} alt="blog-post" />
                  </div>
                  <div className="blog-content-wrapper ">
                    <ul className="list">
                      <li>
                        <Link>{item.meta1}</Link>
                      </li>
                      <li>
                        <Link>{item.meta2}</Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to={item.link}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                    <div className="read-more-button">
                      <Link to={item.link}>
                        Read More{" "}
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
            {Array.from(
              { length: pageCount },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={
                    currentPage === index + 1
                      ? "active page-btn-style"
                      : "page-btn-style"
                  }
                >
                  {index + 1}
                </button>
              )
            )}
            <button onClick={handleNextClick} disabled={currentPage === pageCount} className="page-btn-style">
          Next
        </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default ThreeColumn;
