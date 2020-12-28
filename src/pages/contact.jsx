import React from "react";
import BasicForm from "../components/form.jsx";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import CardInfo from "../components/cardInfo";
import Index from "../components/breadCrumbs";
import "./stylesPages.css";
import Sonep from "../assets/LOGO-SONEP.png";

function Contact(props) {
  return (
    <div>
      <div className="container-index">
      <Index 
        name="Contacto"
        link="/Contacto"
        showIndexItem="show-item-index"
        showIndex={props.showIndex}
      />
      </div>
      <div className="blue-container">
        <h2 className="titles-pages text-white">¡Contáctanos!</h2>
        <Container>
          <Row>
            <Col xs={"12"} md={"6"}>
              <BasicForm />
            </Col>
            <Col xs={"12"} md={"6"}>
              {/* <div className="card-margin"> */}
              <CardInfo
                color="info"
                title="COMUNICATE CON NOSOTROS"
                text="Si quieres participar de la campaña o tienes alguna duda, 
                sugerencia o comentario no dudes en escribirnos."
                btnColor=""
                btnTitle=""
                photo={Sonep}
              />
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
