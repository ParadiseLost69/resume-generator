import React from "react";

const Skills = ({ formData, setFormData }) => {
  // const [workFormData, setWorkFormData] = useState({
  //   id: "0",
  //   company: "Future Shop",
  //   startDate: "July 12 1995",
  //   endDate: "June 4 1996",
  //   duties: "Do this this and that",
  // });
  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  return (
    <section className="skills-page card">
      <h1>Skills</h1>
      <form action="/" className="form">
        <div className="box">
          <label htmlFor="skillOne">Skill One</label>
          <input
            type="text"
            value={formData.skillOne}
            name="skillOne"
            onChange={handleChange}
          />
        </div>

        <div className="box">
          <label htmlFor="skillTwo">Skill Two</label>
          <input
            type="text"
            value={formData.skillTwo}
            name="skillTwo"
            onChange={handleChange}
          />
        </div>
        <div className="box">
          <label htmlFor="skillThree">Skill Three</label>
          <input
            type="text"
            value={formData.skillThree}
            name="skillThree"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};
export default Skills;
