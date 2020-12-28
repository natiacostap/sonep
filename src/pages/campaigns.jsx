import React from "react";

import CardInfo from "../components/cardInfo";
import Index from "../components/breadCrumbs";
import { Container, Row, Col } from "reactstrap";

function Help() {
  return (
    <div className="container-pages">
      <Index name="Campañas" link="/Campañas" showIndexItem="show-item-index" />

      {/* <h2 className="titles-pages">Nuestras Campañas</h2> */}
      <Container>
        <Row>
          <Col xs={"12"} md={"4"}>
            <CardInfo
              color="info"
              title="CAMPAÑA ESCOLAR"
              text="Para que nuestros niños puedan tener acceso y continuar sus estudios sin preocupaciones."
              btnColor="secondary"
              btnTitle="Ver más"
              linkTo="/CampañaEscolar"
              // photo={Graduated}
            />
          </Col>
          <Col xs={"12"} md={"4"}>
            <CardInfo
              color="success"
              title="CAMPAÑA CORONAVIRUS"
              text="El Coronavirus ha impactado globalmente y nuestros niños también se han visto afectados."
              btnColor="secondary"
              btnTitle="Ver más"
              linkTo="/CampañaCovid"
              // photo={Graduated}
            />
          </Col>
          <Col xs={"12"} md={"4"}>
            <CardInfo
              color="primary"
              title="DOCUMENTOS RESPALDO"
              text="Revisa los documentos que abalan nuestro compromiso con la causa y con los niños y sus familias."
              btnColor="secondary"
              btnTitle="Ver más"
              linkTo="/Documentos"
              // photo={Graduated}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Help;
