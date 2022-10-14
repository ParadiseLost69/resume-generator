import React from "react";
import "./Preview.css";

const Preview = (props) => (
  <div className="preview-page">
    <div className="personal-information-header">
      <h1 className="first-name-preview">{props.personalFormData.firstName}</h1>
      <h1 className="last-name=preview">{props.personalFormData.lastName}</h1>
    </div>
    <div className="personal-information-preview"></div>
  </div>
);

export default Preview;
