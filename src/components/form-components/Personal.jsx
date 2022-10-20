import React from "react";
import "./Personal.css";

const Personal = ({ formData, setFormData }) => {
  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  return (
    <div className="card">
      <h1 className="personal-information-form-header">Personal Information</h1>
      <form className="personal-information input-container form">
        <label htmlFor="firstName">
          First Name
          <input
            onChange={handleChange}
            className="personal-input"
            name="firstName"
            placeholder="eg: John"
            value={formData.firstName}
          />
        </label>

        <label htmlFor="lastName">
          Last Name
          <input
            onChange={handleChange}
            className="personal-input"
            name="lastName"
            placeholder="eg: Smith"
            value={formData.lastName}
          />
        </label>

        <label htmlFor="jobTitle">
          Title
          <input
            onChange={handleChange}
            className="personal-input"
            name="jobTitle"
            placeholder="Web Developer"
            value={formData.jobTitle}
          />
        </label>

        <label htmlFor="address">
          Address
          <input
            onChange={handleChange}
            className="personal-input"
            name="address"
            placeholder="123 Forest Hills Road"
            value={formData.address}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            onChange={handleChange}
            className="personal-input"
            name="email"
            placeholder="Example@hotmail.com"
            value={formData.email}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            onChange={handleChange}
            className="personal-input"
            name="phone"
            placeholder="Example@hotmail.com"
            value={formData.phone}
          />
        </label>
        <div className="desc box">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            className="personal-input"
            name="description"
            placeholder="I am teddy and I am a web developer from..."
            value={formData.description}
          />
        </div>
      </form>
    </div>
  );
};

export default Personal;
