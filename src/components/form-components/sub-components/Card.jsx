import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="title">{props.title}</h1>
      {props.display}
      <div className="form"></div>
    </div>
  );
};

export default Card;
