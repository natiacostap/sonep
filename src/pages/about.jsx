import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./stylesPages.css";
import Kids from "../assets/kids.png";
import Photo1 from "../assets/foto1.png"

function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col xs={"12"} md={"6"}>
            <div className="text-container gray-container">
            <h2 className="titles-pages">¿Quiénes somos?</h2>
            <p className="texts-justify">
              Sonrisa de Nepal (SONEP), es un proyecto que nació el año 2014 en
              Bakhtapur, Nepal, con la intención de ayudar a dos niños de
              escasos recursos para que pudieran asistir a la escuela. Gracias
              al éxito de esta primera campaña, las ganas de ayudar de la
              comunidad Chilena, y el compromiso que ellos mismos demostraron,
              el apoyo se expandió a 6 niños de la zona, y a la fecha la campaña
              lleva 2 años consecutivos con exitosos resultados. Actualmente
              somos entre 30 y 40 personas que año tras año se han puesto la
              mano en el bolsillo para apoyar a estos pequeños con su educación,
              y así entregarles una herramienta concreta con la que ellos puedan
              salir adelante y romper el círculo de la pobreza en que se han
              visto inmersas sus familias por generaciones.
            </p>
            </div>
          </Col>
          <Col xs={"12"} md={"6"}>
            <img className="img-rows" src={Kids} alt="kids" />
          </Col>
        </Row>
        </Container>
        <Container >
        <Row>
          {" "}
          <Col xs={"12"} md={"6"}>
            <img className="img-rows" src={Photo1} alt="foto"/>
          </Col>

          <Col xs={"12"} md={"6"} >
            <div className="text-container blue-container"> 
            <h2 className="titles-pages text-white">¿Por qué Nepal?</h2>
            <p className="texts-justify  text-white">
              Es uno de los países más pobres del mundo, donde realmente existen
              pocas oportunidades para aquellas personas que han nacido en la
              clase social baja. Aquí la educación es una de las pocas
              herramientas que pueden sacar adelante a una familia. Para un niño
              nepalí y su familia, sentir el apoyo de gente que ni siquiera los
              conoce, pero que confían en ellos y que les importa su futuro, es
              un regalo tremendo, el que cada una de estas familias se ha
              comprometido personalmente a no desaprovechar. Además, se presentó
              la oportunidad concreta con esta comunidad de generar un puente de
              trabajo confiable y sostenible para el apoyo de manera
              responsable, y el seguimiento que corresponde a cada uno de estos
              niños y sus familias.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
