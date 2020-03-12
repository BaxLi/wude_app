import React, { useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
  const message=useMessage()

  const {loading, request, err, clearError }=useHttp()
  const [form, setform] = useState({ email: '', password: '' })

  const changeHandler = event => {
    setform({ ...form, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    message(err)
    clearError()
  }, [err, message, clearError])
  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const registerHandler = async () => {
    try {
      const objToSend={ ...form }
      // console.log("datasend =", objToSend);
      
      const data = await request('/api/auth/register', 'POST', objToSend )
      message(data.message)
    } catch (err) {}
  }

  const loginHandler = async () => {
    try {
     const data = await request('/api/auth/login', 'POST', { ...form } )
     console.log(data.message);
     
      message("Excellent! Successfuly logged-in !")
    } catch (err) {}
  }

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization Panel</span>

            <div className="input-field ">
              <input
                id="email"
                name="email"
                type="email"
                className="validate yellow-input"
                placeholder="Please enter email"
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field">
              <input
                id="password"
                name="password"
                type="password"
                className="validate yellow-input"
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action">
            <button 
              className="btn yellow darken-4" 
              style={{ marginRight: 5 }}
              disabled={loading}
              onClick={loginHandler}
            >
              Login
            </button>
            <button 
              className="btn grey lighten-1 black-text"
              disabled={loading}
              onClick={registerHandler}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
