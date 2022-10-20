import React from "react";
const Education = ({ formData, setFormData }) => {
  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  return (
    <section className="education-page card">
      <h1>Education</h1>
      <form action="/" className="form">
        <div className="box">
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />
        </div>

        <div className="box">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="box">
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="box">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default Education;
