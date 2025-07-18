import "./index.css"
import Header from "../Header"
import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate()
    return(
        <div>
            <Header />
            <div className="Home-bg">
                
                <h1>
                    Finding The Job That <br/> Fits Your Life
                </h1>
                <p>Millions of people are searching for jobs, salary <br/> information, company reviews. Find the job that fits your <br/> abilities and potential.</p>
                <button className="button"  onClick={() => navigate("/jobs")}>Find Jobs</button>
            </div>
        </div>
    )
}
export default Home