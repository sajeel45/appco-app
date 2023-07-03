import logo from "../../../assets/logo/logo.png";
import { Container, Row, Col } from "react-bootstrap";
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
            <a to="#" className="logo-link">
              <img src={logo} alt="logo" className="img-fluid mt-20" />
            </a>
          </Col>
          <Col className="header-nav-wrapper" md="6" sm="6" lg="8">
            <div className="nav-items-wrapper">
              <Navbar expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto nav-dropdown-link">
                    <NavDropdown title="Home" id="basic-nav-dropdown" as="li">
                      <NavDropdown.Item href="#home1" className="nav-link">
                        <span>Home 1</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#home2" className="nav-link">
                        <span>Home 2</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#home3" className="nav-link">
                        <span>Home 3</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#home4" className="nav-link">
                        <span>Home 4</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink href="#" className="nav-item-link">
                      <p>About</p>
                    </NavLink>
                    <NavLink href="#" className="nav-item-link">
                      <p>Features</p>
                    </NavLink>
                    <NavLink href="#" className="nav-item-link">
                      <p>Pricing</p>
                    </NavLink>
                    <NavDropdown title="Pages" as="li" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#Page1" className="nav-link">
                        <span>Page 1</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#Page2" className="nav-link">
                        <span>Page 2</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#Page3" className="nav-link">
                        <span>Page 3</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#Page4" className="nav-link">
                        <span>Page 4</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#Page5" className="nav-link">
                        <span>Page 5</span>
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
                    <NavLink href="#" className="nav-item-link">
                      <p>Team</p>
                    </NavLink>
                    <NavLink href="#" className="nav-item-link">
                      <p>Contact</p>
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
