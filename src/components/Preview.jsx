import React from "react";
import "./Preview.css";
import { FaAddressBook } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Preview = (props) => (
  <main className="page">
    <main className="preview-page">
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
    </main>
  </main>
);

export default Preview;
