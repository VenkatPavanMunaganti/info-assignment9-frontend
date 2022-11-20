import React from 'react'
import Card from '../Card/Card'
import './Login.css'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
const services = require('../Services/Service')

export const Login = () => {
  const [errorMessages, setErrorMessages] = useState(null);
  const [isUserInvalid, setIsUserInvalid] = useState(null);
  let loggedInUser = null;

  if (sessionStorage.getItem("user")) {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"))
  }

  const Error = (props) => {
    return (
      <div className='error'>{props.error}</div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      setErrorMessages("Email/Password cannot be empty, try again")
      setIsUserInvalid(true)
    } else {
      try {
        const user = await services.loginUser(email, password)
        loggedInUser = user;
        setIsUserInvalid(false)
        if (!sessionStorage.getItem("user")) {
          sessionStorage.setItem("user", JSON.stringify(user))
        }
      } catch (e) {
        setErrorMessages(e)
        setIsUserInvalid(true)
      }
    }
  }

  return (
    <Card title="Login">
      {loggedInUser && <Navigate to="/home" />}
      <form onSubmit={handleSubmit}>
        {isUserInvalid && <Error error={errorMessages}/>}
        <input type="text" id='email' name='email' placeholder='Email Id' />
        <input type="password" id='password' name='password' placeholder='Password' />
        <button className='loginbtn' type="submit" value="Login">Login</button>
      </form>
    </Card>
  )
}

