import React from "react";

import CardInfo from "../components/cardInfo";
import { Container, Row, Col } from "reactstrap";
import ListGroupInfo from "../components/listGroup";
import Costos from "../assets/costs.png";

function Help() {
  return (
    <div className="container-pages">
      <Container>
        <h2 className="titles-pages">Campañas</h2>
        <Row>
          <Col xs={"12"} md={"6"}>
            <div className="border-container">
              <h3 className="titles-pages"> Campaña Escolar</h3>
              <div className="blue-container"> 
              <p className="text-justify text-white">
                {" "}
                Para financiar el año académico 2021 de 7 esforzados niños de
                escasos recurso de Nepal. Conoce a continuación la meta, lo que
                llevamos recaudado y algunas fotos de los niños.
              </p>
              <p className="text-justify text-white">
                TU AYUDA ESTÁ CAMBIANDO LA VIDA DE MUCHAS FAMILIAS AL ENTREGAR
                EDUCACIÓN A NIÑAS, NIÑOS Y FAMILIAS QUE QUIEREN SALIR ADELANTE.
              </p>
              </div>

              {/* <div className="blue-container text-center">
              <h3 className="text-white">Meta 2020: 122343435</h3>
              <h3 className="text-white">Recaudado a la fecha: 122343435</h3>
              <h3 className="text-white">Falta recaudar: 122343435</h3>

            </div> */}
              <ListGroupInfo />
            </div>
          </Col>
          <Col xs={"12"} md={"6"}>
            <img className="img-rows" src={Costos} alt="costos" />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardInfo
              className="cards-campaign"
              color="danger"
              title="Campaña COVID"
              text="Coronavirus ha causo gran impacto en el mundo y Nepal no ha sido la excepción. "
              btnTitle="Saber más"
              link="/covid"
            />
          </Col>
          <Col>
            <CardInfo
              color="danger"
              title="Donaciones"
              text="Te invitamos a ser parte de esta causa."
              btnTitle="Donar"
              link="donate"
            />
          </Col>
          <Col>
            <CardInfo
              color="danger"
              title="Documentos"
              text="Aquí podrás revisar los documentos de respaldo de nuestras campañas."
              btnTitle="Ver más"
              link="/documents"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Help;
