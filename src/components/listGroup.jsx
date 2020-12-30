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
  );
};

export default ListGroupInfo;
