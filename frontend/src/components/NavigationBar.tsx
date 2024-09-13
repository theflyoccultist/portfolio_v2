import { Container, Nav, Navbar } from "react-bootstrap/"
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navigationbar() {
  const { t } = useTranslation();

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

              <Nav.Link as={NavLink} to="/">{t('navBarHome')}</Nav.Link>
              <Nav.Link as={NavLink} to="/about">{t('navBarAbout')}</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">{t('navBarContact')}</Nav.Link>
              <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
