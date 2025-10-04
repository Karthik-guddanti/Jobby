import './index.css';

const employmentTypes = [
  { label: 'Full Time', id: 'FULLTIME' },
  { label: 'Part Time', id: 'PARTTIME' },
  { label: 'Freelance', id: 'FREELANCE' },
  { label: 'Internship', id: 'INTERNSHIP' },
];

const salaryRanges = [
  { label: '10 LPA and above', id: '1000000' },
  { label: '20 LPA and above', id: '2000000' },
  { label: '30 LPA and above', id: '3000000' },
  { label: '40 LPA and above', id: '4000000' },
];

const Sidebar = ({ onTypeChange, onSalaryChange }) => {
  return (
    <div className="sidebar-container">
      <div className='card'>
          <img src="https://res.cloudinary.com/deakngwen/image/upload/v1759554355/Screenshot_2025-10-04_102941_mhtbzq.png" className='profile-img'/>
          <div className='profile-info'>
            <h1>Rahul</h1>
            <p>Lead Frontend Developer</p>
          </div>
      </div>
      <div className="filter-group">
        <h3>Type of Employment</h3>
        {employmentTypes.map((each) => (
          <div key={each.id}>
            <input
              type="checkbox"
              id={each.id}
              value={each.label.toUpperCase()}
              onChange={(e) => onTypeChange(e.target.value)}
            />
            <label htmlFor={each.id}>{each.label}</label>
          </div>
        ))}
      </div>

      <div className="filter-group">
        <h3>Salary Range</h3>
        {salaryRanges.map((each) => (
          <div key={each.id}>
            <input
              type="radio"
              name="salary"
              id={each.id}
              value={each.id}
              onChange={(e) => onSalaryChange(e.target.value)}
            />
            <label htmlFor={each.id}>{each.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
