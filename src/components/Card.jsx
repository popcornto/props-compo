import React from "react";
import Avatar from "./details/Avatar";
import Email from "./details/Email";
import Number from "./details/Number";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>

      <div className="bottom">
        <Number tel={props.tel} />
        <Email email={props.email} />
      </div>
    </div>
  );
}

export default Card;
