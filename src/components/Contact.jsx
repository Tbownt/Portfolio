import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
import { LanguageContext } from "../context";
import { useContext } from "react";

export const Contact = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2 className="d-flex justify-content-center">
                {language === "es" ? "Contactame" : "Get in touch"}
              </h2>
              <form form name="contact" method="POST" data-netlify="true">
                <input
                  type="hidden"
                  name="form-name"
                  action="/contact"
                  value="contact"
                />
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder={language === "es" ? "Nombre" : "First Name"}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder={language === "es" ? "Apellido" : "Last Name"}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={
                        language === "es" ? "Correo" : "Email Address"
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="number"
                      name="phone"
                      required
                      placeholder={
                        language === "es"
                          ? "Numero de telefono"
                          : "Phone Number"
                      }
                    />
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <textarea
                      rows="6"
                      name="message"
                      required
                      placeholder={language === "es" ? "Mensaje" : "Message"}
                    ></textarea>
                  </Col>
                  <Col size={12} sm={12}>
                    <button
                      type="submit"
                      className="d-flex my-0 mx-auto"
                      style={{ borderRadius: "15px" }}
                    >
                      <span>{language === "es" ? "Enviar" : "Send"}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
