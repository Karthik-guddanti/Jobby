import "./index.css";

const Sidebar = ({ onTypeChange, onSalaryChange }) => {
  const handleTypeChange = (event) => {
    onTypeChange(event.target.value);
  };

  const handleSalaryChange = (event) => {
    onSalaryChange(event.target.value);
  };

  return (
    <div>
      <div className="card">
        <img src="" alt="profile" />
        <h3>Manichandana</h3>
        <b>Lead Frontend Developer</b>
      </div>
      <hr />
      <h2>Type of Employment</h2>
      <div className="list">
        <label><input type="checkbox" value="Full Time" onChange={handleTypeChange} /> Full Time</label>
        <label><input type="checkbox" value="Part Time" onChange={handleTypeChange} /> Part Time</label>
        <label><input type="checkbox" value="Freelance" onChange={handleTypeChange} /> Freelance</label>
        <label><input type="checkbox" value="Internship" onChange={handleTypeChange} /> Internship</label>
      </div>
      <hr />
      <h2>Salary Range</h2>
      <div className="list">
        <label><input type="radio" name="salary" value="10" onChange={handleSalaryChange} />10LPA and above</label>
        <label><input type="radio" name="salary" value="20" onChange={handleSalaryChange} />20LPA and above</label>
        <label><input type="radio" name="salary" value="30" onChange={handleSalaryChange} />30LPA and above</label>
        <label><input type="radio" name="salary" value="40" onChange={handleSalaryChange} />40LPA and above</label>
        <label><input type="radio" name="salary" value="0" onChange={handleSalaryChange} />0LPA and above</label>
        
      </div>
    </div>
  );
};

export default Sidebar;
