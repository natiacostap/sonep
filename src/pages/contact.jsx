import React from "react";
import BasicForm from "../components/form.jsx";
import { Container, Row, Col } from "reactstrap";
import CardInfo from "../components/cardInfo";
import "./stylesPages.css";
import Sonep from "../assets/LOGO-SONEP.png";

function Contact() {
  return (
    <div>
      <div className="blue-container"> 
      <h2 className="titles-pages text-white">¡Contáctanos!</h2>
      <Container>
        <Row>
          <Col xs={"12"} md={"6"}>
            <BasicForm />
          </Col>
          <Col xs={"12"} md={"6"}>
            <div className="card-margin">
              <CardInfo 
                color="info"
                title="COMUNICATE CON NOSOTROS"
                text="Si quieres participar de la campaña o tienes alguna duda, sugerencia o comentario por favor contáctate con nosotros y te responderemos a la brevedad posible!"
                btnColor=""
                btnTitle=""
                photo={Sonep}
              />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default Contact;
