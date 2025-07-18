import { Link } from 'react-router-dom';
import './index.css';

const JobsBlock = ({ jobsList, searchValue, onSearchChange }) => {
  return (
    
    <div className="jobs-block">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>


      {jobsList.length === 0 ? (
        <p className="no-jobs">No jobs found</p>
      ) : (
        <ul className="jobs-list">
          {jobsList.map((job) => (
            <li key={job.id} className="job-card">
              <Link to={`/jobs/${job.id}`} className="job-link">
                <img
                  src={job.companyLogoUrl}
                  alt="company logo"
                  className="company-logo"
                />

                <div className="job-title-rating">
                  <h1 className="job-title">{job.role}</h1>
                  <p className="rating">⭐ {job.rating}</p>
                </div>

                <div className="job-info">
                  <p>{job.location}</p>
                  <p>{job.type}</p>
                </div>
                
                <p className="package">{job.salary} LPA</p>
                <hr />
                <p className="description-label">Description</p>
                <p className="job-description">{job.description}</p>
              </Link>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobsBlock;
