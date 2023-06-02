import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { imageData } from "../helpers/imageData";
import "react-multi-carousel/lib/styles.css";
import { SkillItem } from "./SkillItem";
import { useContext } from "react";
import { LanguageContext } from "../context";

export const Skills = () => {
  const { skills } = imageData();
  const { language } = useContext(LanguageContext);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>{language === "es" ? "Habilidades" : "Skills"}</h2>
              <p>
                {language === "es"
                  ? "Estas tecnologias son las que he aprendido desde el principio de mi carrera, tanto en el Bootcamp como fuera de el de manera autodidacta, me siento confidente con las siguientes tecnologias"
                  : "These technologies are the ones I have learned since the beginning of my career, both in the Bootcamp and outside it in a self-taught way, I feel confident with the following technologies"}
              </p>
              <Carousel
                responsive={responsive}
                infinite
                className="skills-slider"
                autoPlay
                autoPlaySpeed={3000}
              >
                {skills.map((item) => (
                  <SkillItem key={item.id} {...item} />
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
