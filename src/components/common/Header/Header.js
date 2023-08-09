import { useState, useEffect } from "react";
import logo from "../../../assets/logo/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { NavLink } from "react-bootstrap";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header-wrapper${isScrolled ? " scrolled" : ""}`}>
      <Container>
        <Row>
          <Col sm="12" lg="4" md="6">
            <div className="header-logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>
            </div>
          </Col>
          <Col className="header-nav-wrapper" md="6" sm="6" lg="8">
            <div className="nav-items-wrapper">
              <Navbar expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto nav-dropdown-link">
                    <NavLink href="#" className="nav-link">
                      <Link to="/" className="nav-link-style">
                        Home
                      </Link>
                    </NavLink>
                    <NavLink href="#" className="nav-link">
                      <Link to="/AboutUs" className="nav-link-style">
                        About
                      </Link>
                    </NavLink>
                    <NavLink className="nav-link">
                      <Link to="/Services" className="nav-link-style">
                        Services
                      </Link>
                    </NavLink>
                    <NavLink className="nav-link">
                      <Link to="/Features" className="nav-link-style">
                        Features
                      </Link>
                    </NavLink>
                    <NavDropdown title="Team" id="basic-nav-dropdown" as="li" renderMenuOnMount="true">
                      <NavDropdown.Item href="#home1" className="nav-link">
                        <Link to="/Team" className="nav-link-style nav-link">
                          <span>Our Dedicated Team</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#home1" className="nav-link">
                        <Link
                          to="/Benjamin"
                          className="nav-link-style nav-link"
                        >
                          <span>Benjamin Evalent</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#home2" className="nav-link">
                        <Link to="/Ellen" className="nav-link-style nav-link">
                          <span>Ellen Erye</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="nav-link">
                        <Link to="/Bryan" className="nav-link-style nav-link">
                          <span>Bryan Gill</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#home4" className="nav-link">
                        <Link to="/Amelia" className="nav-link-style nav-link">
                          <span>Amelia Harper</span>
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink className="nav-link">
                      <Link to="/Pricing" className="nav-link-style">
                        Pricing
                      </Link>
                    </NavLink>
                    <NavDropdown title="Pages" as="li" id="basic-nav-dropdown" renderMenuOnMount="true">
                      <NavDropdown.Item>
                        <Link to="/AboutUs" className="nav-link nav-link-style">
                          <span>About Us</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link
                          to="/Services"
                          className="nav-link nav-link-style"
                        >
                          <span>Services</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link
                          to="/Features"
                          className="nav-link nav-link-style"
                        >
                          <span>Features</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/Pricing" className="nav-link nav-link-style">
                          <span>Pricing</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/error" className="nav-link nav-link-style">
                          <span>404 Page</span>
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blogs" as="li" id="basic-nav-dropdown" renderMenuOnMount="true">
                      <NavDropdown.Item href="#blog1" className="nav-link">
                        <Link
                          to="/twoColumn"
                          className="nav-link nav-link-style"
                        >
                          <span>2 Column Layout</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#Page2" className="nav-link">
                        <Link
                          to="/threeColumn"
                          className="nav-link nav-link-style"
                        >
                          <span>3 Column Layout</span>
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink className="nav-item-link">
                      <Link to="/Contact" className="nav-link-style">
                        Contact
                      </Link>
                      <p></p>
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
