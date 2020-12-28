import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";
import Index from "../components/breadCrumbs";
import "./stylesPages.css";

function Donate(props) {
  return (
    <div className="container-pages">
        <Index
        name="Donar"
        link="/Donar"
        showIndexItem="show-item-index"
      />
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="skyblue-container text-center border-radius">
              <h3 className="text-white bold-text">DONACIONES</h3>
              <p className="text-white bold-text">
                Puedes escribirnos a sonrisasdenepalchile@gmail.com o llamános
                al +56 978065857
              </p>
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading className="skyblue-text bold-text">
                    Fundación Sonrisas Para Educar
                  </ListGroupItemHeading>
                </ListGroupItem>
                <ListGroupItem color={props.color2}>
                  <ListGroupItemHeading className="skyblue-text bold-text">
                    Rut: 65.125.105-2
                  </ListGroupItemHeading>
                </ListGroupItem>{" "}
                <ListGroupItem color={props.color3}>
                  <ListGroupItemHeading className="skyblue-text bold-text">
                    Cuenta Corriente 3300421507
                  </ListGroupItemHeading>
                </ListGroupItem>
                <ListGroupItem color={props.color3}>
                  <ListGroupItemHeading className="skyblue-text bold-text">
                    Banco Edwards - Chile
                  </ListGroupItemHeading>
                </ListGroupItem>
              </ListGroup>
              <p className="text-white italic-text">
                *Recuerda programar tus donaciones automáticamente
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Donate;
