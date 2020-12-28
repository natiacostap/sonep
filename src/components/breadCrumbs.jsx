import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./stylesComponents.css";

const Index = (props) => {
  return (
    <div>
      <Breadcrumb className={props.showIndex}>
        <BreadcrumbItem>
          <a className="subtitle small-text" href="/">
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a className="subtitle small-text" href={props.link}>
            {props.name}
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className={props.showIndexItem}>
          <a className="subtitle small-text" href={props.link2}>
            {props.name2}
          </a>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Index;
