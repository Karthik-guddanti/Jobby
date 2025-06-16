import "./index.css"
function JobItem({job}){
        return (
                        <li key={job.id} className="job-card">
                            <div className="job-header">
                                <div className="company">{job.company}</div>
                                <div className="role">{job.role}</div>
                                <div >⭐ {job.rating}</div>
                            </div>
                            <div className="job-info">
                                <div className="location">📍 {job.location}</div>
                                <div className="type">💼 {job.type}</div>
                                <div className="salary">{job.salary}</div>
                            </div>
                            <hr />
                            <div className="description">
                                <strong>Description</strong>
                                <p>{job.description}</p>
                            </div>
                        </li>
                    )
    
}
export default JobItem