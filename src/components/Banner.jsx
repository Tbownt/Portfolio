import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { useTextChange } from "../hooks/useTextChange";
import { LanguageContext } from "../context";
import headerImg from "../assets/images/header-img.svg";
import "animate.css";

export const Banner = () => {
  const { tick, text, delta } = useTextChange();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} lg={7} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline mt-3">
                    {language === "es"
                      ? " Bienvenido a mi Portafolio"
                      : "Welcome to my Portfolio"}
                  </span>
                  <h1>
                    {language === "es"
                      ? "Hola!, Soy Andres 👨🏻‍💻"
                      : `Hi there! I'm Andres 👨🏻‍💻 `}
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    {language === "es"
                      ? "Soy un programador Front-end egresado del Bootcamp SoyHenry y Autodidacta, me he especializado en la libreria de React para todos mis proyectos y practicas. Estoy disponible para trabajar de forma remota. Estoy motivado por aprender con eficacia y confianza para completar tareas desafiantes."
                      : "I am a Front-end programmer graduated from Bootcamp SoyHenry and self-taught, I have specialized in the React library for all my projects and practices. I am available to work remotely. I am motivated to learn effectively and confident to complete challenging tasks."}
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={12} lg={5} xl={6} className="mt-lg-5">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" className="p-5 my-5" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
