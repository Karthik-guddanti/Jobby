import { useState } from "react";
import Header from "../Header";
import JobsBlock from "../JobsBlock";
import Sidebar from "../Sidebar";
import "./index.css";

function Jobs() {
  const jobsList = [
    {
      id: 1,
      company: "Netflix",
      role: "Frontend Engineer",
      location: "Delhi",
      type: "Freelance",
      rating: 4,
      salary: "19",
      isChecked: false,
      description: "The Experimentation Platform team builds internal tools...",
    },
    {
      id: 2,
      company: "Facebook",
      role: "Frontend Engineer",
      location: "Delhi",
      type: "Part Time",
      rating: 4,
      salary: "43",
      isChecked: false,
      description: "Are you interested in building products used by more than a billion people?...",
    },
    {
      id: 3,
      company: "Facebook",
      role: "Backend Engineer",
      location: "Mumbai",
      type: "Freelance",
      rating: 4,
      salary: "28",
      isChecked: false,
      description: "Are you interested in building products used by more than a billion people?...",
    },
    {
      id: 4,
      company: "Google",
      role: "Fullstack Developer",
      location: "Bangalore",
      type: "Freelance",
      rating: 4,
      salary: "13",
      isChecked: false,
      description: "The Experimentation Platform team builds internal tools...",
    },
    {
      id: 5,
      company: "Amazon",
      role: "Frontend Engineer",
      location: "Hyderabad",
      type: "Internship",
      rating: 4,
      salary: "13",
      isChecked: false,
      description: "You will be part of a new team building a large-scale tier-1 rendering platform...",
    },
    {
      id: 6,
      company: "Amazon",
      role: "Frontend Engineer",
      location: "Hyderabad",
      type: "Internship",
      rating: 5,
      salary: "12",
      isChecked: false,
      description: "You will be part of a new team building a large-scale tier-1 rendering platform...",
    },
  ];

  const [finalList] = useState(jobsList);
  const [filters, setFilters] = useState({ type: [], salary: "", search: "" });

  const handleTypeChange = (jobType) => {
    setFilters((prev) => {
      const newType = prev.type.includes(jobType)
        ? prev.type.filter((type) => type !== jobType)
        : [...prev.type, jobType];
      return { ...prev, type: newType };
    });
  };

  const handleSalaryChange = (salary) => {
    setFilters((prev) => ({ ...prev, salary }));
  };

  const handleSearchChange = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const getFilteredJobs = () => {
    return finalList.filter((job) => {
      const matchType = filters.type.length === 0 || filters.type.includes(job.type);
      const matchSalary = filters.salary === "" || parseInt(job.salary) >= parseInt(filters.salary);
      const matchSearch = job.role.toLowerCase().includes(filters.search.toLowerCase());
      return matchType && matchSalary && matchSearch;
    });
  };

  return (
    <div>
      <Header />
      <div className="jobs-container"> 
        <Sidebar onTypeChange={handleTypeChange} onSalaryChange={handleSalaryChange} />
        <JobsBlock
          jobsList={getFilteredJobs()}
          searchValue={filters.search}
          onSearchChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default Jobs;
