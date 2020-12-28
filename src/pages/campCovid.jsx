import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import "./stylesPages.css";

function Help() {
  return (
    <div className="container-pages">
      <Breadcrumb>
        <BreadcrumbItem>
          <a className="subtitle small-text" href="/">
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a className="subtitle small-text" href="/Campañas">
            Campañas
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a className="subtitle small-text" href="/CampañaCovid">
            Campaña Covid-19
          </a>
        </BreadcrumbItem>
      </Breadcrumb>
      <Container>
        <div className="green-container border-radius">
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
                El primer envío de ayuda a Nepal fue concretado el 01 de Octubre
                2020, enviando un total de 578 USD que serán destinados
                principalmente a alimentación de las 4 familias que apoyamos, y
                también artículos de higiene como mascarillas, sanitizantes,
                etc. La campaña sigue abierta para intentar un segundo envío
                dentro de los próximos meses.
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
                          Número de Donantes: 13"
                        </ListGroupItemHeading>
                        <ListGroupItemText className="subtitle">
                          Al 01 de octubre de 2020.
                        </ListGroupItemText>
                      </ListGroupItem>{" "}
                    </ListGroup>
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
