import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const ListGroupInfo = (props) => {
  return (
    <ListGroup className="text-center">
      <ListGroupItem color={props.color1}>
        <ListGroupItemHeading className="green-text">
          {props.title1}
        </ListGroupItemHeading>
        <ListGroupItemText className="subtitle">
          {props.subtitle1}
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem color={props.color2}>
        <ListGroupItemHeading className="green-text">
          {props.title2}
        </ListGroupItemHeading>
        <ListGroupItemText className="subtitle">
          {props.subtitle2}
        </ListGroupItemText>
      </ListGroupItem>{" "}
      <ListGroupItem color={props.color3}>
        <ListGroupItemHeading className="red-text">
          {props.title3}
        </ListGroupItemHeading>
        <ListGroupItemText className="subtitle">
          {props.subtitle3}
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>

    //   <ListGroup className="list-info">
    //    <ListGroupItem color="success">
    //      <ListGroupItemHeading className="green-text">Meta 2020: $2.600.000.-</ListGroupItemHeading>
    //      <ListGroupItemText className="subtitle"> Para año académico 2021, para 7 niños.
    //      </ListGroupItemText>
    //    </ListGroupItem>
    //    <ListGroupItem color="success" >
    //      <ListGroupItemHeading className="green-text">Recaudado a la fecha: $1.020.00.-</ListGroupItemHeading>
    //      <ListGroupItemText className="subtitle">
    //        Al 25 de Noviembre de 2020.
    //      </ListGroupItemText>
    //    </ListGroupItem>
    //    <ListGroupItem color="danger">
    //      <ListGroupItemHeading className="red-text">Falta Recaudar: $1.580.000.-</ListGroupItemHeading>
    //      <ListGroupItemText className="subtitle">
    //        Tenemos que llegar a la meta a más tardar Marzo 2021.
    //      </ListGroupItemText>
    //    </ListGroupItem>
    //  </ListGroup>
  );
};

export default ListGroupInfo;
