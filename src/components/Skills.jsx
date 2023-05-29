import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
// import { imageData } from "../helpers/imageData";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  //   const { skills } = imageData();

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
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                eius, labore quam, quis tenetur aliquid doloribus, molestias
                voluptate repellendus deserunt error odio enim accusantium
                exercitationem quidem vel soluta mollitia numquam.
              </p>
              <Carousel
                responsive={responsive}
                infinite
                className="skills-slider"
                autoPlay
                autoPlaySpeed={3000}
              >
                {/* <div className="item">
                  <img src={skills[0].image} alt="skillsImage" />
                  <h5>{skills[0].name}</h5>
                </div> */}
                <div className="item">
                  <img src="" alt="skillsImage" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src="" alt="skillsImage" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src="" alt="skillsImage" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
