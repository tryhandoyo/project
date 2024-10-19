// import Component React-Bootstrap
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";

import logo from "../assets/Logo.png";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Row className="logo d-flex inline align-items-center">
            <Col md={4}>
              <img src={logo} alt="logo" />
            </Col>
            <Col md={8} className="d-flex">
              <Navbar.Brand href="/">
                <h3 className="merek-top">
                  Rizqiana
                  <br />
                </h3>
                <h3 className="merek-bot">Car Rental</h3>
              </Navbar.Brand>
            </Col>
          </Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#tentang-kami">Tentang Kami</Nav.Link>
              <Nav.Link href="">Kontak</Nav.Link>
              <NavDropdown title="Armada Kami" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Mobil Innova</NavDropdown.Item>
                <NavDropdown.Item href="">Mobil Avanza</NavDropdown.Item>
                <NavDropdown.Item href="">Mobil Calya</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">Home</Nav.Link>

              <Button to="/" className="btn-nav text-white">Pesan Sekarang</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
