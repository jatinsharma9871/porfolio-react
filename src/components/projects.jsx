import React from "react";
import CardComponent from "./card-component";
import Pro1 from "../assets/img/project-1.jpg";
import Pro3 from "../assets/img/project-3.jpg";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="project"
    >
      <Fade left cascade>
        <section className="div-1">
          <h1 className="heading">Featured Projects..</h1>
          <div>
            {ProjectData.map((data, ind) => {
              const { github, external, img, title, text, skills } = data;
              return (
                <CardComponent
                  key={data + ind}
                  github={github}
                  external={external}
                  img={img}
                  title={title}
                  text={text}
                  skills={skills}
                />
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="https://github.com/jatinsharma9871"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn-outline-light"
              style={{ width: "fit-content" }}
            >
              More Projects
            </a>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Projects;

const ProjectData = [
  {
    title: "Practo Clone",
    img: "https://i.ibb.co/KWyKmK0/pract.png",
    skills: "React.js, Redux, SASS, Node.js, Express.js, MongoDB, and Django",
    github: "https://github.com/jatinsharma9871/practo-clone",
    text: "This project is a clone of Practo.com which is health realated website where you can consult with top Doctors for any health concern and also can buy medicines from there.",
    external: "https://youthful-curie-2f90b3.netlify.app/",
  },
  {
    title: "MeTalk",
    img: "https://user-images.githubusercontent.com/60403638/122263235-d58b8f00-cef3-11eb-88ff-a6172ed924b7.png",
    skills:
      "CSS, React.js, Redux, Semantic-UI-React, Semantic-UI-CSS, and Firebase",
    github: "https://github.com/jatinsharma9871/me-talk.git",
    text: "Created a group/one-to-one chat application using Firebase with capabilities of joining “groups” of other hosts.",
    external: "",
  },
  {
    title: "YesStyle Clone",
    img: "https://i.ibb.co/x7cpTTR/y.png",
    skills: "React.js, Redux, Firebase, Stripe API, SASS",
    github: "https://i.ibb.co/x7cpTTR/y.png",
    text: "Designed and developed an ecommerce site where user can purchase clothes and make payments along with the signin and signup functionality.",
    external: "https://yestyle-final-jey6ozcg5-jatinsharma9871.vercel.app/",
  },
  {
    title: "Recipe App",
    img: Pro3,
    skills: "React.js, Edamam API",
    github: "https://github.com/",
    text: "Constructed web app for searching recipe of a food item and displaying it in the form of tables.",
    external: "",
  },
];