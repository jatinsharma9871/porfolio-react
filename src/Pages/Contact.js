// import React from 'react'
import { Container } from 'react-bootstrap'
import Address from '../Components/Address/Address'
import aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function Contact() {
    useEffect(() => {
        aos.init({duration:3000});
      },[]);
    return (
        <div data-aos="fade-right">
        <Container id="contact" >
         <Address/>
      </Container>
      </div>
    )
}

export default Contact
