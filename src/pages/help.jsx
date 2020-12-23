import React from "react";

import CardInfo from "../components/cardInfo";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import ComoAyudar from "../assets/help_v.png";

function Help() {
  return (
    <div className="container-pages">
      <Container>
        <h2 className="titles-pages">¿Cómo ayudar?</h2>
        <Row>
          <Col xs={"12"} md={"8"}>
            <img
              className="bg-img img-size"
              src={ComoAyudar}
              alt="how_to_help"
            />
          </Col>
          <Col xs={"12"} md={"4"}>
            <CardInfo
              color="danger"
              title="Campañas"
              text=" Te invitamos a conocer las campañas que hemos desarrollado y
              como se invierten las donaciones."
              btnTitle="CAMPAÑAS"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Help;
