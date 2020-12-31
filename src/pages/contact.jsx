import React from "react";
// import BasicForm from "../components/form.jsx";
import { Container, Row, Col } from "reactstrap";
import CardInfo from "../components/cardInfo";
import Index from "../components/breadCrumbs";
import "./stylesPages.css";
import Sonep from "../assets/logo_blanco.png";
import Phone from "../assets/icons/icon-wsp.png";
import Mail from "../assets/icons/icon-mail.png";

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
        {/* <h2 className="titles-pages text-white margin-container">
          ¡Contáctanos!
        </h2> */}
        <Container>
          <Row>
            <Col xs={"12"} md={"6"}>
              {/* <div className="card-margin"> */}
              <CardInfo
                color="info"
                title="¡CONTACTANOS!"
                text="Si quieres participar de la campaña o tienes alguna duda, 
                sugerencia o comentario no dudes en escribirnos."
                btnColor=""
                btnTitle=""
                photo={Sonep}
              />
              {/* </div> */}
            </Col>
            <Col xs={"12"} md={"6"}>
              {/* <BasicForm /> */}
              <div className="row-container ">
                <a href=" https://wa.me/56978065857">
                  <div className=" center-container margin-container text-center"> 
                  <img className="contact-icons" src={Phone} alt="phone" />
                  <h6 className="text-white bold-text">¡Envíanos un mensaje!</h6>
                  </div>
                </a>
             
                <a href="mailto:sonrisasdenepalchile@gmail.com">
                  <div className="center-container margin-container text-center">
                  <img className="contact-icons" src={Mail} alt="mail" />
                  <h6 className="text-white bold-text">¡Envíanos un correo!</h6>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
