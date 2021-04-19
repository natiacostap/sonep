import React from "react";

import CardInfo from "../components/cardInfo";
import { Container, Row, Col } from "reactstrap";
import ListGroupInfo from "../components/listGroup";
import SmallCard from "../components/SmallCard";
import Graduated from "../assets/icons/icon-graduated.png";
import School from "../assets/icons/icon-school.png";
import Student from "../assets/icons/icon-student.png";
import "./stylesPages.css";
import Index from "../components/breadCrumbs";

function Help() {
  return (
    <div className="container-pages">
      <Index 
        name="Campañas"
        link="/Campañas"
        name2="Campaña Escolar"
        link2="/CampañaEscolar"
      />
      <Container>
        <div className="green-container border-radius">
          <Row>
            <Col xs={"12"} md={"6"}>
              <h3 className="titles-pages text-white"> Campaña Escolar 2021</h3>
              <p className="text-justify text-white bold-text">
                {" "}
                Para financiar el año académico 2022 de 7 esforzados niños de
                escasos recurso de Nepal, y también ponernos al día con lo que faltó recaudar en la campaña 2020.
          
              </p>
              <p className="text-justify text-white bold-text">
                {" "}
               
                Conoce a continuación la meta, lo que
                llevamos recaudado y algunas fotos de los niños.
              </p>
              <p className="text-justify text-white bold-text">
                TU AYUDA ESTÁ CAMBIANDO LA VIDA DE MUCHAS FAMILIAS AL ENTREGAR
                EDUCACIÓN A NIÑAS, NIÑOS Y FAMILIAS QUE QUIEREN SALIR ADELANTE.
              </p>
            </Col>

            <Col xs={"12"} md={"6"}>
              <ListGroupInfo
                title1="Meta 2021: $4.500.000"
                subtitle1="Para año académico 2022 de 7 niños, y ponernos al día con lo que no se logro cubrir el año 2020."
                color1=""
                title2="Recaudado a la fecha: $320.000"
                subtitle2="Al 01 de Abril de 2021."
                color2=""
                title3="Falta Recaudar: $4.180.000"
                subtitle3="Tenemos que llegar a la meta a más tardar Marzo 2022."
                color3="danger"
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="card-margin">
          <Row>
            <Col xs={"12"} md={"4"}>
              <CardInfo
                color="warning"
                title="$270.000"
                text="1 AÑO DE COLEGIO:
      Incluye matrícula, mensualidad, materiales, almuerzos en colegio y exámenes"
                btnColor=""
                photo={Graduated}
              />
            </Col>
            <Col xs={"12"} md={"4"}>
              <CardInfo
                color="danger"
                title="$80.000"
                text="UNIFORME POR NIÑ@:
      Incluye 2 Set de: Pantalón, Camisa, Chaleco, Corbata, Zapatos, Calcetines, Mochila, Buzo"
                btnColor=""
                photo={Student}
              />
            </Col>
            <Col xs={"12"} md={"4"}>
              <CardInfo
                color="info"
                title="$15.000"
                text="1 AÑO DE COLEGIO COMPLETO
      Mensualidad colegio"
                btnColor=""
                photo={School}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Container> 
      <div className="blue-container border-radius">
          <Row>
            <Col xs={"12"} md={"12"}>
              <h5 className="titles-pages text-white"> Recaudación Campaña Escolar 2020</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={"12"} md={"4"}>
              <SmallCard
                title="Meta 2021"
                subtitle="$2.700.000"
              />
            </Col>
            <Col xs={"12"} md={"4"}>
            <SmallCard
                title="Monto recaudado"
                subtitle="$1.025.000"
              />
            </Col>
            <Col xs={"12"} md={"4"}>
            <SmallCard
                title="Monto traspasado a campaña 2021"
                subtitle="$1.675.000"
              />
            </Col>
          </Row>
        </div>
        </Container>

    </div>
  );
}

export default Help;
