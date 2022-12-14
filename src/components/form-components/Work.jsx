import React from "react";

const Work = ({ formData, setFormData }) => {
  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  return (
    <section className="work-page card">
      <h1>Work Experience</h1>
      <form action="/" className="form">
        <div className="box">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            value={formData.company}
            name="company"
            onChange={handleChange}
          />
        </div>

        <div className="box">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            value={formData.startDate}
            name="startDate"
            onChange={handleChange}
          />
        </div>

        <div className="box">
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            value={formData.endDate}
            name="endDate"
            onChange={handleChange}
          />
        </div>

        <div className="box">
          <label htmlFor="duties">Duties</label>
          <input
            type="text"
            value={formData.dutyOne}
            name="dutyOne"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.dutyTwo}
            name="dutyTwo"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.dutyThree}
            name="dutyThree"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};
export default Work;
