import React from "react";
import "./Preview.css";
import { FaAddressBook } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Preview = (props) => (
  <div className="preview-page">
    <div className="personal-information-header">
      <div className="name-title-container">
        <div className="full-name-container">
          <h1 className="first-name-preview">
            {props.personalFormData.firstName}
          </h1>
          <h1 className="last-name=preview">
            {props.personalFormData.lastName}
          </h1>
        </div>
        <h2 className="job-title-preview">{props.personalFormData.jobTitle}</h2>
      </div>
      <div className="contact-info-container">
        <div className="contact-info-wrapper">
          <AiFillPhone />
          <h3 className="contact-info">{props.personalFormData.phone}</h3>
        </div>
        <div className="contact-info-wrapper">
          <AiOutlineMail />
          <h3 className="contact-info">{props.personalFormData.email}</h3>
        </div>
        <div className="contact-info-wrapper">
          <FaAddressBook />
          <h3 className="contact-info">{props.personalFormData.address}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Preview;
