import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview.jsx";
import React, { useState } from "react";

function App() {
  const [isPreview, setIsPreview] = useState(false);
  const [personalFormData, setPersonalFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  });

  const [workFormData, setWorkFormData] = useState({
    id: "0",
    company: "",
    startDate: "",
    endDate: "",
    dutyOne: "",
    dutyTwo: "",
    dutyThree: "",
  });

  const [educationFormData, setEducationFormData] = useState({
    id: "0",
    school: "",
    program: "",
    startDate: "",
    endDate: "",
  });

  const [skillsFormData, setSkillsFormData] = useState({
    skillOne: "",
    skillTwo: "",
    skillThree: "",
  });

  function handleSubmit() {
    setIsPreview((prev) => !prev);
  }

  return (
    <div className="App">
      <div className="App-header">
        <button className="App-switch-button" onClick={handleSubmit}>
          {isPreview ? "Edit Information" : "View Preview"}
        </button>
        <header>Resume Generator</header>
      </div>
      {isPreview ? (
        <Preview
          personalFormData={personalFormData}
          workFormData={workFormData}
          educationFormData={educationFormData}
          skillsFormData={skillsFormData}
        />
      ) : (
        <Form
          personalFormData={personalFormData}
          setPersonalFormData={setPersonalFormData}
          workFormData={workFormData}
          setWorkFormData={setWorkFormData}
          educationFormData={educationFormData}
          setEducationFormData={setEducationFormData}
          skillsFormData={skillsFormData}
          setSkillsFormData={setSkillsFormData}
        />
      )}
    </div>
  );
}

export default App;
