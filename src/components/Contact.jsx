import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2 className="d-flex justify-content-center">Get in Touch</h2>
              <form
                name="contact"
                action="/contact"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="First name"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder={"Last name"}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={"Email Address"}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="number"
                      name="phone"
                      required
                      placeholder={"Phone number"}
                    />
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <textarea
                      rows="6"
                      name="message"
                      required
                      placeholder={"Message"}
                    ></textarea>
                  </Col>
                  <Col size={12} sm={12}>
                    <button
                      type="submit"
                      className="d-flex my-0 mx-auto"
                      style={{ borderRadius: "15px" }}
                    >
                      <span>Send</span>
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
