import React from "react";
import { Card, Button, CardTitle, CardImg } from "reactstrap";
import "./stylesComponents.css";

const CardInfo = (props) => {
  return (
    <div>
      <Card className="card-home center-icon" body inverse color={props.color}>
        <CardTitle tag="h2" className="bold-title">
          {props.title}
        </CardTitle>
        <CardImg src={props.photo}></CardImg>
        <CardTitle tag="p">{props.text}</CardTitle>
        <Button href={props.linkTo} color={props.btnColor}>
          {props.btnTitle}
        </Button>
      </Card>
    </div>
  );
};

export default CardInfo;
