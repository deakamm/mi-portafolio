import { Container } from "react-bootstrap";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Project1 from "../assets/img/Project1.webp";
import Project2 from "../assets/img/Project2.webp";
import Project3 from "../assets/img/Project3.webp";
import Project4 from "../assets/img/Project4.webp";
import Project5 from "../assets/img/Project5.webp";
import Project6 from "../assets/img/Project6.webp";
import Project7 from "../assets/img/Project7.webp";
import Project8 from "../assets/img/Project8.webp";
import Project9 from "../assets/img/Project9.webp";
import Project10 from "../assets/img/Project10.webp";
import Project11 from "../assets/img/Project11.webp";
import Project12 from "../assets/img/Project12.webp";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Player } from "video-react";

import "./Projects.css";

function Projects() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>deakamm- Project</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="projects-container">
        <div className="projects-title animate__animated animate__zoomIn">
          <h3>Projects</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>04</strong>
          </h4>
        </div>
        <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
          <div className="row custom-margin-bottom">
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project1} alt="Project 1" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>RANKAPP</h3>
                  <p>
                    RanKapp una aplicación web para calificar todas las aplicaciones que existen y 
                    ponerlas en un ranking de las mejores, las intermedias y las peores.
                  </p>
                  <a
                    className="btn-website"
                    href="https://github.com/deakamm/rankapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm/rankapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Javascript</span>
                    <span id="tech-stack">SASS</span>
                    <span id="tech-stack">API</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project2} alt="Project 2" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>MONTRE-NOM-NOM</h3>
                  <p>
                    Monter-nom-nom es el laberinto, los juegos del hambre,
                    web para un nuevo evento de sacrifico de coders,
                    en la que se hará el sorteo de una lista de nombres que se han sacrificado.
                  </p>
                  <a
                    className="btn-website"
                    href="https://vercel.com/deakamm/monster-nom-nom"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm/monster-nom-nom"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">HTML</span>
                    <span id="tech-stack">CSS</span>
                    <span id="tech-stack">JAVASCRIPT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project3} alt="Project 3" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>CatSpace</h3>
                  <p>
                    E-bookpolis is a website for selling and ordering book
                    products.
                  </p>
                  <a
                    className="btn-website"
                    href="https://cat-space-dusky.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm/CatSpace"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">HTML</span>
                    <span id="tech-stack">CSS</span>
                    <span id="tech-stack">Javascript</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project6} alt="Project 4" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>Toque_el_Dom</h3>
                  <p>
                    Dapper barber is a website for finding the best barbers in a
                    city
                  </p>
                  <a
                    className="btn-website"
                    href="https://github.com/deakamm/Toque_el_Dom_Breafing_004"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm/Toque_el_Dom_Breafing_004"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">HTML</span>
                    <span id="tech-stack">CSS</span>
                    <span id="tech-stack">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project7} alt="Project 6" loading="lazy" />
                <div className="project-content">
                  <h3>CRUD LARAVEL</h3>
                  <p>
                    Es un projecto de laravel utilizado el crud por una lista de los empleados.
                  </p>
                  <a
                    className="btn-website"
                    href="http://localhost/rundev/public/empleado"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm/rundev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">PHP</span>
                    <span id="tech-stack">LARAVEL</span>
                    <span id="tech-stack">Mysql</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project5} alt="Project 5" loading="lazy" />
                <div className="project-content">
                  <h3>Replica web </h3>
                  <p>
                  Es un landing page,he utilizado los conocimientos de HTML semántico y CSS.
                  </p>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">HTML</span>
                    <span id="tech-stack">CSS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col project-col">
              <div className="project-card">
                <img src={Project10} alt="Project 7" loading="lazy" />
                <div className="project-content">
                  <h3>MY-PORTOFOLIO</h3>
                  <p>Es un pequeño descripcion de mi y mis proyectos.</p>
                  <a
                    className="btn-website"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React</span>
                    <span id="tech-stack">Bootstrap</span>
                    <span id="tech-stack">Axios</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project8} alt="Project 8" loading="lazy" />
                <div className="project-content">
                  <h3>AniMa</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, magni!
                  </p>
                  <a
                    className="btn-website"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React</span>
                    <span id="tech-stack">React Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project9} alt="Project 9" loading="lazy" />
                <div className="project-content">
                  <h3>MI-PORTOFOLIO</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, magni!
                  </p>
                  <a
                    className="btn-website"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Bootstrap 5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col project-col">
              <div className="project-card">
                <img src={Project11} alt="Project 11" loading="lazy" />
                <div className="project-content">
                  <h3>Marugame Landing Page</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, magni!
                  </p>
                  <a
                    className="btn-website"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Bootstrap 5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project12} alt="Project 10" loading="lazy" />
                <div className="project-content">
                  <h3>Fish Weight Prediciton</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, magni!
                  </p>

                  <a
                    className="btn-github"
                    href="https://github.com/deakamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">JavaScript</span>
                    <span id="tech-stack">HTML</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img
                    src={Project4}
                    alt="Project 12"
                    className="dif-image-project"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3>E-commerce_react</h3>
                  <p>
                    Es una aplicacion de tienda online que venden productos.
                  </p>

                  <a
                    className="btn-github"
                    href="https://github.com/deakamm/Breafing_006_E-commerce_react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">JavaScript</span>
                    <span id="tech-stack">Bootstrap</span>
                    <span id="tech-stack">CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Projects;
