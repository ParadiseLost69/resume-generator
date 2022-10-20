import React from "react";

const Work = (props) => {
  return (
    <section className="work-page card">
      <h1>Work</h1>
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
};
export default Work;
