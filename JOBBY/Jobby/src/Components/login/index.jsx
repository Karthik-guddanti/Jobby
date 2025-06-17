import { useState } from "react";
import Cookies from "js-cookie"
import "./index.css"
import { replace, useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showMsg, setShowMsg] = useState(false);

    const onSubmitSuccess = (jwtToken) => {
        Cookies.set('jwt_token', jwtToken, {expires: 30});
        navigate('/home', {replace: true});
    }
    const onSubmitFailure = (errorMsg) => {
        setErrorMsg(errorMsg);
        setShowMsg(true);
    } 
    const submitted = async (event) => {
        event.preventDefault();
        const userDetails = {username,password}
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if (response.ok === true) {
            onSubmitSuccess(data.jwt_token);
        }
        else {
            onSubmitFailure(data.error);
        }

    }
    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    return(
        <center className="form-page">
            <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png"/>
            <form onSubmit={submitted}>
                <div className="set">
                    <label>Username</label>
                    <br/>
                    <input  type="type" placeholder="Enter Username" onChange={onChangeUsername}/>
                </div>
                <div className="set">
                    <label>Password</label>
                    <br/>
                    <input type="password" placeholder="Enter Password" onChange={onChangePassword}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            {showMsg && <p className="error-message">*{errorMsg}</p>}
        </center>
    )
}
export default Login