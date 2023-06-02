import { Col, Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/images/color-sharp2.png";
import { ProjectList } from "./ProjectList";
import { useContext } from "react";
import { LanguageContext } from "../context";

export const Projects = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="project" id="projects">
      <img className="background-image-right" src={colorSharp2} alt="bgimg2" />
      <Container>
        <Row className="d-flex justify-content-center">
          <Col size={12} sm={12}>
            <h2 className="mb-4">
              {language === "es" ? "Proyectos" : "Projects"}
            </h2>
          </Col>
          <ProjectList />
        </Row>
      </Container>
    </section>
  );
};
