import React from "react";
import Personal from "./form-components/Personal.jsx";
import Work from "./form-components/Work.jsx";
import Education from "./form-components/Education";
import "./Form.css";

const Form = (props) => (
  <main className="form-page">
    <Personal
      formData={props.personalFormData}
      setFormData={props.setPersonalFormData}
    />

    <Work formData={props.workFormData} setFormData={props.setWorkFormData} />
    <Education />
  </main>
);

export default Form;
