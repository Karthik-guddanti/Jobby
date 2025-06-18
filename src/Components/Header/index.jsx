import { Link } from 'react-router-dom';
import "./index.css"

function Header(){
    return(
        <>
            <div className='main'>
                    <Link to="/home">
                        <img 
                            src="https://assets.ccbp.in/frontend/react-js/logo-img.png" 
                            alt="logo"
                            className="logo"
                        />
                    </Link>
                <div >
                    <Link className='icons' to="/home" >Home</Link>
                    <Link className="icons" to="/jobs">Jobs</Link>
                </div>
                <div>
                    <Link to="/"><button>Logout</button></Link>
                </div>
            </div>
        </>
    )
}
export default Header