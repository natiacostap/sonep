import React from "react";
import { Jumbotron, Button, Col, Row, Container } from "reactstrap";
import kids from "../assets/clases/foto1.png";
// import Smile from "../assets/smile.png"
import "./stylesComponents.css";

const Banner = () => {
  return (
    <div>
      <Jumbotron className="jumbotron-bg">
        <Container>
          <Row>
            <Col xs={"12"} md={"6"}>
              <div>
                <h6 className="display-3 to-front">¡Regala Sonrisas!</h6>
              </div>
              <p className="lead">
                Te invitamos a unirte a esta noble campaña que busca apoyar a 7
                niños vulnerables y de escasos recursos de Nepal para que logren
                completar su educación.
              </p>
              <p className="lead">
                <Button href="/ComoAyudar" size="lg" color="danger">
                  ¿Cómo Ayudar?
                </Button>
              </p>
            </Col>
            <Col xs={"12"} md={"6"}>
              <img
                className="img-container border-radius"
                src={kids}
                alt="kids"
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Banner;
