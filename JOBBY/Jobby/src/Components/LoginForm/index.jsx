import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css' // you can add styling later


const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const onSubmitForm = async event => {
    event.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok) {
      //  Save token and redirect
      Cookies.set('jwt_token', data.jwt_token, { expires: 30 })
      navigate('/')
    } else {
      //  Show error
      setErrorMsg("* Please enter Valid Credentials!!")
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={onSubmitForm}>
        <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="Jobby Logo" className="logo" />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Enter Username"
          onChange={e => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder='Enter Password'
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {errorMsg && <p className="error">{errorMsg}</p>}
      </form>
    </div>
  )
}

export default LoginForm


