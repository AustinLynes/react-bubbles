import React, { useState, useEffect } from "react";
import axios from 'axios'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [payload, setPayload] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  })
  const handleChange = e => {
    e.preventDefault();
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    })
  }
  const submit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', payload)
      .then(res => {
        console.log(res)
        window.localStorage.setItem('token', res.data.payload)
        props.history.push('/bubble-page')
      })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submit}>
        <input
          name='username'
          type='text'
          value={payload.username}
          onChange={handleChange}
          placeholder='username'
        />
        <input
          name='password'
          type='passsword'
          value={payload.password}
          onChange={handleChange}
          placeholder='password'
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
