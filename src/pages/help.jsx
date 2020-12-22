import React from "react";

import CardInfo from "../components/card";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import ComoAyudar from "../assets/help_h.png";

function Help() {
  return (
    <div className="container-pages">
      <Container>
        <h2 className="titles-pages">¿Cómo ayudar?</h2>
        <Row>
        <Col xs={"12"} md={"8"}> 
        <img className="bg-img img-size" src={ComoAyudar} alt="how_to_help" />
        </Col>
          <Col xs={"12"} md={"4"}> 

            <Card body inverse color="danger" className="text-center">
              <CardTitle tag="h5" className="text-card">Campañas</CardTitle>
              <CardText className="text-white">
                Te invitamos a conocer las campañas que hemos desarrollado y
                como se invierten las donaciones.
              </CardText>
              <Button color="secondary">CAMPAÑAS</Button>
            </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Help;
