import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";
import React, { useState } from "react";

function App() {
  const [isPreview, setIsPreview] = useState(false);
  const [personalFormData, setPersonalFormData] = useState({
    firstName: "Teddy",
    lastName: "Loukas",
    jobTitle: "Developer",
    address: "250 North Centre Road, London, ON",
    phone: "613-532-9421",
    email: "tedloukas@outlook.com",
    Description:
      "I am a professional full-stack web developer from Kingston, Ontario, Canada.",
  });

  const [workFormData, setWorkFormData] = useState([
    {
      company: "Future Shop",
      id: "0",
    },
  ]);

  const [educationFormData, setEducationFormData] = useState([
    {
      id: "0",
      school: "St. Francis Xavier University",
    },
  ]);

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
        />
      ) : (
        <Form
          personalFormData={personalFormData}
          setPersonalFormData={setPersonalFormData}
          workFormData={workFormData}
          setWorkFormData={setWorkFormData}
          educationFormData={educationFormData}
          setEducationFormData={setEducationFormData}
        />
      )}
    </div>
  );
}

export default App;
