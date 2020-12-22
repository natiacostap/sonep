import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Kids from "../assets/kids.png";

const CardInfo = (props) => {
  return (
    <div>
      <Card>
        <CardImg className="card-info" top  src={Kids} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle> */}
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardInfo;
