import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/images/header-img.svg";
import TrackVisibility from "react-on-screen";
import { useTextChange } from "../hooks/useTextChange";
import "animate.css";

export const Banner = () => {
  const { tick, text, delta } = useTextChange();

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
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi there! I'm Andres `}
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
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
