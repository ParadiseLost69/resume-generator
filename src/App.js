import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview.jsx";
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
    description:
      "I am a professional full-stack web developer from Kingston, Ontario, Canada. I have been doing alot of programming and web dev. It has been almost a year since I have started and I am learning quickly.",
  });

  const [workFormData, setWorkFormData] = useState([
    {
      id: "0",
      company: "Future Shop",
      startDate: "July 12 1995",
      endDate: "June 4 1996",
      duties: "Do this this and that",
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
