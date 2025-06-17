import JobItem from "../JobItems";
import "./index.css";

function JobsBlock({ jobsList, searchValue, onSearchChange }) {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const searchResults = jobsList.filter((item) =>
    item.role.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
        className="search-bar"
      />
      {searchResults.length === 0 ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
          className="no-job"
        />
      ) : (
        <ul>
          {searchResults.map((job) => (
            <JobItem key={job.id} job={job} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobsBlock;
