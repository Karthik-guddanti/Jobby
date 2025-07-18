import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import { ThreeDots } from "react-loader-spinner";
import { FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import "./index.css";

const API_STATUS = {

  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

function JobDetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [status, setStatus] = useState(API_STATUS.INITIAL);

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    setStatus(API_STATUS.LOADING);
    const jwtToken = Cookies.get("jwt_token");

    try {
      const response = await fetch(`https://apis.ccbp.in/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) throw new Error("Job fetch failed");

      const data = await response.json();
      const job = data.job_details;

      const formattedJob = {
        id: job.id,
        role: job.title,
        company: job.company_name,
        location: job.location,
        type: job.employment_type,
        rating: job.rating,
        salary: job.package_per_annum,
        description: job.job_description,
        companyLogoUrl: job.company_logo_url,
        websiteUrl: job.company_website_url,
        skills: job.skills,
        lifeAtCompany: job.life_at_company,
      };

      const similar = data.similar_jobs.map((job) => ({
        id: job.id,
        role: job.title,
        company: job.company_name,
        location: job.location,
        type: job.employment_type,
        rating: job.rating,
        description: job.job_description,
        companyLogoUrl: job.company_logo_url,
      }));

      setJobData(formattedJob);
      setSimilarJobs(similar);
      setStatus(API_STATUS.SUCCESS);
    } catch (error) {
      setStatus(API_STATUS.FAILURE);
    }
  };

  const renderSimilarJobs = () => (
    <div className="similar-jobs-grid">
      {similarJobs.map((job) => (
        <div className="similar-job-card" key={job.id}>
          <div className="job-card-header">
            <img
              src={job.companyLogoUrl}
              alt={`${job.company} logo`}
              className="similar-job-logo"
            />
            <div className="job-title-rating">
              <h3 className="similar-job-title">{job.role}</h3>
              <p className="job-rating">⭐ {job.rating}</p>
            </div>
          </div>

          <h4 className="similar-desc-title">Description</h4>
          <p className="similar-job-description">{job.description}</p>

          <div className="similar-job-footer">
            <p className="similar-job-meta">{job.location}</p>
            <p className="similar-job-meta">{job.type}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderJobDetails = () => {
    if (!jobData) return null;

    return (
      <div className="job-details-container">
        <div className="job-details-card">
          <div className="job-top-section">
            <div className="job-title-box">
              <img
                src={jobData.companyLogoUrl}
                alt={`${jobData.company} logo`}
                className="job-logo"
              />
              <div className="job-title-rating-box">
                <h2 className="job-role">{jobData.role}</h2>
                <p className="job-rating">⭐ {jobData.rating}</p>
              </div>
            </div>

            <div className="job-meta-right">
              <p className="job-salary">{jobData.salary}</p>
              <a
                href={jobData.websiteUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="visit-link"
              >
                Visit ↗
              </a>
            </div>

            <div className="job-meta-info">
              <span className="meta-item">
                <FaMapMarkerAlt /> {jobData.location}
              </span>
              <span className="meta-item">
                <FaSuitcase /> {jobData.type}
              </span>
            </div>
          </div>

          <hr />

          <h2 className="section-title">Description</h2>
          <p className="job-description">{jobData.description}</p>

          <h2 className="section-title">Skills</h2>
          {jobData.skills?.length > 0 && (
            <ul className="skills-list">
              {jobData.skills.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <img
                    src={skill.image_url}
                    alt={skill.name}
                    className="skill-icon"
                    loading="lazy"
                  />
                  <p>{skill.name}</p>
                </li>
              ))}
            </ul>
          )}

          {jobData.lifeAtCompany && (
            <>
              <h2 className="section-title">Life at Company</h2>
              <div className="life-at-company">
                <p>{jobData.lifeAtCompany.description}</p>
                <img
                  src={jobData.lifeAtCompany.image_url}
                  alt={`Life at ${jobData.company}`}
                  className="life-img"
                />
              </div>
            </>
          )}
        </div>

        <h2 className="section-title similar-jobs-title">Similar Jobs</h2>
        {renderSimilarJobs()}
      </div>
    );
  };

  const renderContent = () => {
    switch (status) {
      case API_STATUS.LOADING:
        return (
          <div className="loader-container" data-testid="loader">
            <ThreeDots color="#ffffff" height={50} width={50} />
          </div>
        );
      case API_STATUS.SUCCESS:
        return renderJobDetails();
      case API_STATUS.FAILURE:
        return (
          <div className="error-view">
            <h1>Something went wrong!</h1>
            <button
              onClick={() => {
                setStatus(API_STATUS.LOADING);
                fetchJobDetails();
              }}
            >
              Retry
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      {renderContent()}
    </div>
  );
}

export default JobDetails;
