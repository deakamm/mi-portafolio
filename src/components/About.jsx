import Certificate1 from "../assets/img/Certificate1.webp";

import FsLightbox from "fslightbox-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./About.css";

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>deakamm- About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Certificate1,
         
        ]}
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
          Hola soy Mamadou, estudiante en Factoría F5. 
          Allí estoy aprendiendo a desarrollar aplicaciones y páginas web desde el front-end hasta el back-end. 
          Tengo habilidades en HTML, CSS, JavaScript, PHP, MySQL y algunos frameworks y lenguajes de programación 
          como React, SASS, BOOTSTRAP y LARAVEL. 
          Soy una persona apasionada por aprender nuevas cosas en programación, además de ser entusiasta, motivado,
          confiable, responsable y trabajador. Soy capaz de trabajar bien bajo presión y cumplir con plazos ajustados.
          </p>

          <h4>Certificate(s)</h4>
          <span>─────</span>
          <div className="certificates-wrapper">
            <div className="row my-2">
              <div className="col certificates-ratio">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate1}
                  alt="Certificate 1"
                  onClick={() => openLightboxOnSlide(1)}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
