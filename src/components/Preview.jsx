import React from "react";
import "./Preview.css";
import { FaAddressBook } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Preview = (props) => (
  <main className="page">
    <div className="preview-page">
      <div className="personal-information-header content">
        <div className="name-title-container personal-container">
          <div className="full-name-container">
            <h1 className="first-name-preview">
              {props.personalFormData.firstName}
            </h1>
            <h1 className="last-name-preview">
              {props.personalFormData.lastName}
            </h1>
          </div>
          <h2 className="job-title-preview">
            {props.personalFormData.jobTitle}
          </h2>
        </div>
        <div className="contact-info-container personal-container">
          <div className="contact-info-wrapper">
            <AiFillPhone />
            <h3 className="contact-info-h3">{props.personalFormData.phone}</h3>
          </div>
          <div className="contact-info-wrapper">
            <AiOutlineMail />
            <h3 className="contact-info-h3">{props.personalFormData.email}</h3>
          </div>
          <div className="contact-info-wrapper">
            <FaAddressBook />
            <h3 className="contact-info-h3">
              {props.personalFormData.address}
            </h3>
          </div>
        </div>
      </div>
      <div className="description-preview content">
        <h2 className="sub-header about">About Me</h2>
        <p>{props.personalFormData.description}</p>
      </div>
      <div className="area content">
        <section className="work section">
          <h1>Work Experience</h1>
          <div className="sector">
            <h2 className="company-preview"> {props.workFormData.company}</h2>
            <h3>
              {props.workFormData.startDate} - {props.workFormData.endDate}
            </h3>
            <ul>
              <li>{props.workFormData.dutyOne}</li>
              <li>{props.workFormData.dutyTwo}</li>
              <li>{props.workFormData.dutyThree}</li>
            </ul>
          </div>
        </section>

        <section className="education section">
          <h2>Education</h2>

          <div className="sector">
            <h3>{props.educationFormData.school}</h3>
            <h4>{props.educationFormData.program}</h4>
            <h3>
              {props.educationFormData.startDate} -{" "}
              {props.educationFormData.endDate}
            </h3>
          </div>
        </section>
        <section className="skills section">
          <h2>Skills</h2>

          <div className="sector">
            <h3>{props.skillsFormData.skillOne}</h3>
            <h3>{props.skillsFormData.skillTwo}</h3>
            <h3>{props.skillsFormData.skillThree}</h3>
          </div>
        </section>
      </div>
    </div>
  </main>
);

export default Preview;
