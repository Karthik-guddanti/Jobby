import { useState } from "react";
import "./index.css"
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate()
    function submitted(){
        
        navigate('/home')
        
    }
    return(
        <center className="form-page">
            <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png"/>
            <form onSubmit={submitted}>
                <div className="set">
                    <label>Username</label>
                    <br/>
                    <input  type="type" placeholder="Enter Username"/>
                </div>
                <div className="set">
                    <label>Password</label>
                    <br/>
                    <input type="password" placeholder="Enter Password"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </center>
    )
}
export default Login