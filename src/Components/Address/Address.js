import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./address.css";

import {BsTelephone} from "react-icons/bs"
import {HiOutlineMailOpen} from "react-icons/hi"
import {AiFillGithub , AiFillLinkedin} from "react-icons/ai"
function Address() {
  return (
    <Container>
      <h1 className="contact-address">Contact
        <span className="ctn"> Me</span>
      </h1>

      <p style={{ textAlign: "center",padding:"20px", color:"white" }}>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.</p>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <BsTelephone/>
            <br/>
            <span>8287891182</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <HiOutlineMailOpen/>
           <br/>
            <a style={{textDecoration: 'none',color: 'white'}}  href="mailto:jatinsharma9871@gmail.com">jatinsharma9871@gmail.com</a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <AiFillGithub/>
            <br/>
            <a style={{textDecoration: 'none',color: 'white'}}  href="https://github.com/jatinsharma9871" target="_blank" rel="noopener noreferrer">Github</a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <AiFillLinkedin/>
            <br/>
            
            <a style={{textDecoration: 'none',color: 'white'}}  href="linkedin.com/in/jatin-sharma-0044b2154"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Col>
      </Row>

     
        </Container>
   
  );
}

export default Address;

