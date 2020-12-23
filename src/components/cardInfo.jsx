import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const CardInfo = (props) => {
  return (
    <div>
      <Card body inverse color={props.color}>
        <CardTitle tag="h5" className="bold-title">{props.title}</CardTitle>
        <CardText className="cardBody-height">{props.text}</CardText>
        <Button href={props.link} color="secondary">{props.btnTitle}</Button>
      </Card>
    </div>
  );
};

export default CardInfo;