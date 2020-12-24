import React from "react";

import CardInfo from "../components/cardInfo";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Card,
  CardTitle,
  Button,
} from "reactstrap";
import ListGroupInfo from "../components/listGroup";
import Graduated from "../assets/graduated.png";
import School from "../assets/school.png";
import Student from "../assets/student.png";

function Help() {
  return (
    <div>
      <h2 className="titles-pages">Nuestras Campañas</h2>
      <Container>
        <div className="green-container">
          <Row>
            <Col xs={"12"} md={"6"}>
              <h3 className="titles-pages text-white"> Campaña Escolar</h3>
              <p className="text-justify text-white bold-text">
                {" "}
                Para financiar el año académico 2021 de 7 esforzados niños de
                escasos recurso de Nepal. Conoce a continuación la meta, lo que
                llevamos recaudado y algunas fotos de los niños.
              </p>
              <p className="text-justify text-white bold-text">
                TU AYUDA ESTÁ CAMBIANDO LA VIDA DE MUCHAS FAMILIAS AL ENTREGAR
                EDUCACIÓN A NIÑAS, NIÑOS Y FAMILIAS QUE QUIEREN SALIR ADELANTE.
              </p>
            </Col>

            <Col xs={"12"} md={"6"}>
              <ListGroupInfo
                title1="Meta 2020: $2.600.000.-"
                subtitle1="Para año académico 2021, para 7 niños."
                color1=""
                title2="Recaudado a la fecha: $1.020.00.-"
                subtitle2=" Al 25 de Noviembre de 2020."
                color2=""
                title3="Falta Recaudar: $1.580.000.-"
                subtitle3="Tenemos que llegar a la meta a más tardar Marzo 2021."
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
      Incluye 2 Set de: Pantalón - Camisa, Chaleco - Corbata, Zapatos - Calcetines, Mochila - Buzo"
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
        <div className="green-container">
          <Row>
            <Col xs={"12"} md={"6"}>
              <h3 className="titles-pages text-white bold-text">
                Campaña Ayuda Pandemia 2020
              </h3>
              <p className="text-justify text-white bold-text">
                {" "}
                En Nepal están en cuarentena hace más de 5 meses, lo que
                significa que muchos no han podido trabajar ni llevar ingresos
                ni comida a sus hogares. La situación se vuelve cada día más
                crítica, considerando especialmente la precaria condición en que
                viven las familias más humildes en este país país, por lo que
                cualquier aporte es bienvenido.
              </p>
              <p className="text-justify text-white bold-text">
                El{" "}
                  1er envío de ayuda a Nepal fue concretado el 1ero de Octubre
                  2020
                , enviando un total de 578 USD que serán
                destinados principalmente a alimentación de las 4 familias que
                apoyamos, y también artículos de higiene como mascarillas,
                sanitizantes, etc.
              </p>
              <p className="text-justify text-white bold-text">
                El dinero llego exitosamente a Nepal, y mas abajo pueden
                encontrar fotos y registros de la ayuda entregada. La campaña
                sigue abierta para intentar un 2ndo envío de ayuda dentro de los
                próximos meses.
              </p>
              <p className="text-justify text-white bold-text">
                ¡Sigamos sumando ayuda! Te dejamos los datos de
                la cuenta corriente de la Fundación más abajo.
              </p>
            </Col>
            <Col xs={"12"} md={"6"}>
              <Container>
                <Row>
                  <Col sm="12" md="12">
                    <ListGroup className="text-center">
                      <ListGroupItem color="">
                        <ListGroupItemHeading className="green-text">
                          Total Recaudado: $500.000.-
                        </ListGroupItemHeading>
                        <ListGroupItemText className="subtitle">
                          Al 01 de octubre de 2020.
                        </ListGroupItemText>
                      </ListGroupItem>
                      <ListGroupItem color="">
                        <ListGroupItemHeading className="green-text">
                          "Número de Donantes: 13"
                        </ListGroupItemHeading>
                        <ListGroupItemText className="subtitle">
                          Al 01 de octubre de 2020.
                        </ListGroupItemText>
                      </ListGroupItem>{" "}
                    </ListGroup>
                    
                    <Card className="card-campaign" body inverse color="primary">
                        <CardTitle tag="h2" className="bold-title">
                          Galeria
                        </CardTitle>
                        <CardTitle tag="p">
                          En nuestra galeria podrás encontrar fotos de nuestras campañas, niños y más.
                        </CardTitle>
                        <Button href="/gallery" color="secondary">
                          Ver más
                        </Button>
                      </Card>
                      <Card className="card-campaign" body inverse color="info">
                        <CardTitle tag="h2" className="bold-title">
                          Documentos
                        </CardTitle>
                        <CardTitle tag="p">
                          Revisa nuestros documentos que respaldan nuestras
                          acciones.
                        </CardTitle>
                        <Button href="/" color="secondary">
                          Ver más
                        </Button>
                      </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Help;
