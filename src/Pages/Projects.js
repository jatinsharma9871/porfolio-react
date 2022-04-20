import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://i.ibb.co/KWyKmK0/pract.png"
              title="Practo Clone"
              description="This project is a clone of Practo.com which is health realated website where you can consult with top Doctors for any health concern and also can buy medicines from there."
              tech="Tech-Stacks"
              techD="Html | Javascript | Tailwind | Css | MongoDb | Express "
              link="https://youthful-curie-2f90b3.netlify.app/"
              a="https://github.com/jatinsharma9871/practo-clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/x7cpTTR/y.png"
              title="Yes-style clone"
              description="YesStyle.com is the first online retailer in Asia to globally distribute a wide range of lifestyle and fashion products from the region."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://yestyle-final-jey6ozcg5-jatinsharma9871.vercel.app"
              a="https://github.com/jatinsharma9871/yesstyle-unit-3-project"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/svBqmGq/youtube.png"
              title="Youtube"
              description="This is the clone of youtube, which is a free video sharing website that makes it easy to watch online videos.."
              tech="Tech-Stacks"
              techD="javascript | html | css | api "
              link="https://youtube-clone-topaz-six.vercel.app/"
              a="https://github.com/jatinsharma9871/youtube-clone"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
