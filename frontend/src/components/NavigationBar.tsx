import { Container, Nav, Navbar } from "react-bootstrap/"
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"

export default function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="http://rinkakuworks.com/public/images/rinkaku.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Rin Logo"
          />{' '}
          Rinkaku Works
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">

              <Nav.Link as={NavLink} to="/">Work</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
