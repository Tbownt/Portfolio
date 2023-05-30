import { Col, Container, Row } from "react-bootstrap";
import { projectsData } from "../helpers";
import { ProjectItems } from "./ProjectItems";
import colorSharp2 from "../assets/images/color-sharp2.png";

export const Projects = () => {
  const { projectsEN } = projectsData();
  return (
    <section className="project" id="projects">
      <img className="background-image-right" src={colorSharp2} alt="bgimg2" />
      <Container>
        <Row className="d-flex justify-content-center">
          <Col size={12} sm={12}>
            <h2 className="mb-4">Projects</h2>
          </Col>
          {projectsEN.map((item) => (
            <ProjectItems key={item.title} {...item} />
          ))}
        </Row>
      </Container>
    </section>
  );
};
