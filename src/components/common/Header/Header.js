import logo from "../../../assets/logo/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Container>
        <Row>
          <Col sm="12" lg="4" md="6">
            <Link to="/" className="logo-link">
              <img src={logo} alt="logo" className="img-fluid mt-20" />
            </Link>
          </Col>
          <Col className="header-nav-wrapper" md="6" sm="6" lg="8">
            <div className="nav-items-wrapper">
              <Navbar expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto nav-dropdown-link">
                    <NavDropdown title="Home" id="basic-nav-dropdown" as="li">
                      <NavDropdown.Item href="#home1" className="nav-link">
                        <Link to="/" className="nav-link-style nav-link"><span>Home 1</span></Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#home2" className="nav-link">
                        <Link to="/" className="nav-link-style nav-link"><span>Home 2</span></Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="nav-link">
                      <Link to="/" className="nav-link-style nav-link"><span>Home 3</span></Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#home4" className="nav-link">
                      <Link to="/" className="nav-link-style nav-link"><span>Home 4</span></Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink href="#"  className="nav-link">
                      <Link to="/AboutUs" className="nav-link-style">About</Link>
                    </NavLink >
                    <NavLink className="nav-link">
                      <Link to="/Services" className="nav-link-style">Services</Link>
                    </NavLink>
                    <NavLink className="nav-link">
                    <Link to="/Features" className="nav-link-style">
                      Features
                    </Link>
                    </NavLink>
                    <NavLink className="nav-link">
                      <Link to="/Pricing" className="nav-link-style">Pricing</Link>
                    </NavLink>
                    <NavDropdown title="Pages" as="li" id="basic-nav-dropdown">
                      <NavDropdown.Item >
                        <Link to="/AboutUs" className="nav-link nav-link-style"><span>About Us</span></Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                      <Link to="/Services" className="nav-link nav-link-style"><span>Services</span></Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                      <Link to="/Features" className="nav-link nav-link-style"><span>Features</span></Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                      <Link to="/Pricing" className="nav-link nav-link-style"><span>Pricing</span></Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blogs" as="li" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#blog1" className="nav-link">
                        <span>Blog Grid</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#Page2" className="nav-link">
                        <span>Blog Left Sidebar</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#Page3" className="nav-link">
                        <span>Blog Right Sidebar</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink className="nav-item-link">
                      <Link to="/Contact" className="nav-link-style">Contact</Link>
                      <p></p>
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
