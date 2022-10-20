import React from "react";
import Personal from "./form-components/Personal.jsx";
import Work from "./form-components/Work.jsx";
import Education from "./form-components/Education.jsx";
import "./Form.css";
import Skills from "./form-components/Skills.jsx";

const Form = (props) => {
  return (
    <main className="form-page">
      <Personal
        formData={props.personalFormData}
        setFormData={props.setPersonalFormData}
      />

      <Work formData={props.workFormData} setFormData={props.setWorkFormData} />

      <Education
        formData={props.educationFormData}
        setFormData={props.setEducationFormData}
      />
      <Skills
        formData={props.skillsFormData}
        setFormData={props.setSkillsFormData}
      />
    </main>
  );
};

export default Form;
