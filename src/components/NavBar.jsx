/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useContext } from "react";
import {
  Navbar as NavbarBS,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { LanguageContext } from "../context";

export const NavBar = () => {
  //Estados
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  //Context
  const { language, setEsLanguage, setEnLanguage } =
    useContext(LanguageContext);

  //Se utiliza un efecto para cuando baje la pagina se aplique una animacion en el navbar
  //Efectos
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <header>
      <NavbarBS expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container fluid className="p-0 px-lg-3">
          <div className="nav-box"></div>
          <NavbarBS.Brand href="#home">Andres Salom</NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBS.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "about"
                    ? "active navbar-link about"
                    : "navbar-link about"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                {language === "es" ? "Sobre mi" : "About me"}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {language === "en" ? "Skills" : "Habilidades"}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                {language === "es" ? "Proyectos" : "Projects"}
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                {language === "es" ? "Contactame" : "Contact"}
              </Nav.Link>
              <NavDropdown
                title={language === "es" ? "Certificados" : "Certificates"}
                id="basic-nav-dropdown"
                className="nav-link navbar-link"
              >
                <NavDropdown.Item
                  href="https://www.efset.org/cert/3tvBSK"
                  target="_blank"
                >
                  EF SET
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://certificates.soyhenry.com/new-cert?id=d3daac1140c4acf8d6382c21df8a192fd5f587a9a061b3026faa468566c13564"
                  target="_blank"
                >
                  Henry Bootcamp
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={language === "es" ? "CV" : "Curriculum"}
                id="basic-nav-dropdown"
                className="nav-link navbar-link"
              >
                <NavDropdown.Item
                  href="/images/CV_Andres_Salom_Español.pdf"
                  download="CV_Andres_Salom_Español.pdf"
                >
                  Español
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/images/CV_Andres_Salom_English.pdf"
                  download="CV_Andres_Salom_English.pdf"
                >
                  English
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={language === "es" ? "Idioma" : "Language"}
                id="basic-nav-dropdown"
                className="nav-link navbar-link"
              >
                <NavDropdown.Item onClick={setEsLanguage}>
                  Español
                </NavDropdown.Item>
                <NavDropdown.Item onClick={setEnLanguage}>
                  English
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    </header>
  );
};
