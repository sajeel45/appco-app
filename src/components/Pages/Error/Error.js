import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import errorImg from "../../../assets/error/error.png";
import Header from "../../common/Header/Header";
import { helpLinks } from "../../../data/data";
import Footer from "../../common/Footer/Footer";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main style={{ marginTop: "65px" }}>
        <div className="error-page-wrapper">
          <Container>
            <Row className="justify-content-center">
              <Col lg="6">
                <div className="error-image-wrapper">
                  <img src={errorImg} alt="404-image" />
                </div>
                <div className="error-content-wrapper">
                  <span>Sorry!</span>
                  <h3 className="title text-center">
                    The page can't be found.
                  </h3>
                  <p className="text-center">
                    The page you're looking for isn't available. Try with
                    another page or use the go home button below
                  </p>
                  <div className="error-return-button">
                    <Link to="/">Back To Home</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <Footer helpLinks={helpLinks} />
    </div>
  );
};
export default Error;
