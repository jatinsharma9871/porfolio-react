// import React from "react";
import React, { useEffect } from "react";
import { Container} from "react-bootstrap";
import Techstack from "../Components/TechStack/TechStack";
import ToolStack from "../Components/ToolStack/ToolStack";
// import AboutCard from "../Components/AboutCard/AboutCard";
import aos from 'aos';
import "aos/dist/aos.css";
// C:\Users\jatin\OneDrive\Desktop\porfolio-react\src\Components\AboutCard\AboutCard.js

function About() {
   useEffect(() => {
    aos.init({duration:5000});
  },[]);
  return (
    
    <Container id="about" fluid className="about-section">
      {/* <Particle /> */}
     
      <Container>
      <div data-aos="fade-right">
       <Techstack />
        <ToolStack />
        </div>
      </Container>
    
    </Container>
  );
}

export default About;