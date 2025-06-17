import "./index.css"
import Header from "../Header"
function Home() {
    return(
        <div>
            <Header />
            <div className="Home-bg">
                
                <h1>
                    Finding The Job That <br/> Fits Your Life
                </h1>
                <p>Millions of people are searching for jobs, salary <br/> information, company reviews. Find the job that fits your <br/> abilities and potential.</p>
                <button className="button">Find Jobs</button>
            </div>
        </div>
    )
}
export default Home