import React from "react";
import Personal from "./form-components/Personal";
import Work from "./form-components/Work";
import Education from "./form-components/Education";

const Form = (props) => (
  <div className="form-page">
    <Personal
      formData={props.personalFormData}
      setFormData={props.setPersonalFormData}
    />

    <Work />
    <Education />
  </div>
);

export default Form;
