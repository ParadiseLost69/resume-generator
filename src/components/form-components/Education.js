import React from "react";
const Education = (props) => (
  <section className="education-page card">
    <h1>Education</h1>
    <form action="/" className="form">
      <div className="box">
        <label htmlFor="company">Company</label>
        <input type="text" />
      </div>

      <div className="box">
        <label htmlFor="startDate">Start Date</label>
        <input type="text" />
      </div>

      <div className="box">
        <label htmlFor="endDate">End Date</label>
        <input type="text" />
      </div>

      <div className="box">
        <label htmlFor="duties">Duties</label>
        <textarea type="text"></textarea>
      </div>
    </form>
  </section>
);

export default Education;
