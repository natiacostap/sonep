import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const ListGroupInfo = (props) => {
  return (
    <ListGroup className="list-info">
      <ListGroupItem >
        <ListGroupItemHeading className="blue-text">Meta 2020: $2.600.000.-</ListGroupItemHeading>
        <ListGroupItemText className="subtitle"> Para año académico 2021, para 7 niños.
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading className="blue-text">Recaudado a la fecha: $1.020.00.-</ListGroupItemHeading>
        <ListGroupItemText className="subtitle">
          Al 25 de Noviembre de 2020.
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading className="red-text">Falta Recaudar: $1.580.000.-</ListGroupItemHeading>
        <ListGroupItemText className="subtitle">
          Tenemos que llegar a la meta a más tardar Marzo 2021.
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  );
}

export default ListGroupInfo;