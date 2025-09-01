import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../Header";
import Sidebar from "../Sidebar";
import JobsBlock from "../JobsBlock";
import { ThreeDots } from 'react-loader-spinner';
import "./index.css";

const API_STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

function Jobs() {
  const [allJobs, setAllJobs] = useState([]);
  const [status, setStatus] = useState(API_STATUS.INITIAL);

  const [filters, setFilters] = useState({
    type: [],
    salary: "",
    search: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setStatus(API_STATUS.LOADING);
    const jwtToken = Cookies.get("jwt_token");

    try {
      const response = await fetch("https://apis.ccbp.in/jobs", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) throw new Error("Fetch failed");

      const data = await response.json();
      const formatted = data.jobs.map((job) => ({
        id: job.id,
        role: job.title,
        company: job.company_name,
        location: job.location,
        type: job.employment_type,
        rating: job.rating,
        salary: parseInt(job.package_per_annum.replace(" LPA", "")), // "12 LPA" -> 12
        description: job.job_description,
        companyLogoUrl: job.company_logo_url,
      }));

      setAllJobs(formatted);
      setStatus(API_STATUS.SUCCESS);
    } catch (error) {
      setStatus(API_STATUS.FAILURE);
    }
  };

  const handleTypeChange = (jobType) => {
    setFilters((prev) => {
      const updated = prev.type.includes(jobType)
        ? prev.type.filter((type) => type !== jobType)
        : [...prev.type, jobType];
      return { ...prev, type: updated };
    });
  };

  const handleSalaryChange = (salary) => {
    setFilters((prev) => ({ ...prev, salary }));
  };

  const handleSearchChange = (searchValue) => {
    setFilters((prev) => ({ ...prev, search: searchValue }));
  };

  const getFilteredJobs = () => {
    return allJobs.filter((job) => {
      const matchType =
        filters.type.length === 0 ||
        filters.type.includes(job.type.toUpperCase());

      const matchSalary =
        filters.salary === "" || job.salary >= parseInt(filters.salary) / 100000;

      const searchQuery = filters.search.toLowerCase();

      const matchSearch =
        job.role.toLowerCase().includes(searchQuery) ||
        job.company.toLowerCase().includes(searchQuery) ||
        job.location.toLowerCase().includes(searchQuery) ||
        job.description.toLowerCase().includes(searchQuery);

      return matchType && matchSalary && matchSearch;
    });
  };

  const renderContent = () => {
    switch (status) {
      case API_STATUS.LOADING:
        return (
          <div className="loader-container" data-testid="loader">
            <ThreeDots color="#ffffff" height={50} width={50} />
          </div>
        );

      case API_STATUS.FAILURE:
        return (
          <div className="jobs-failure-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              alt="failure view"
              className="failure-img"
            />
            <h1 className="failure-heading">Oops! Something Went Wrong</h1>
            <p className="failure-text">
              We cannot seem to find the page you are looking for
            </p>
            <button onClick={fetchJobs} className="retry-btn">
              Retry
            </button>
          </div>
        );

      case API_STATUS.SUCCESS:
        return (
          <JobsBlock
            jobsList={getFilteredJobs()}
            searchValue={filters.search}
            onSearchChange={handleSearchChange}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="jobs-container">
        <Sidebar
          onTypeChange={handleTypeChange}
          onSalaryChange={handleSalaryChange}
        />
        {renderContent()}
      </div>
    </div>
  );
}

export default Jobs;
