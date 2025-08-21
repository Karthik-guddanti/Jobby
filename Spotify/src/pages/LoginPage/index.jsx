// src/pages/LoginPage/index.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const loginUser = async e => {
    e.preventDefault()
    const userDetails = { username, password }

    const res = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify(userDetails),
    })

    const data = await res.json()
    if (res.ok) {
      Cookies.set('jwt_token', data.jwt_token, { expires: 30 }) // ✅ Save to cookies
      navigate('/', { replace: true })
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={loginUser} className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </form>
    </div>
  )
}

export default LoginPage
