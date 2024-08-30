import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'

const Register = () => {
  const [core, setcore] = useState(false)
  const [name,setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [member, setmember] = useState("")

  const Navigate = useNavigate()

  return (
    <div className='page-content'>
      <div class="login-box" style={{marginTop:"-40px"}}>
        <div class="login-form">
          <form action="/api/v1/users/login" method="POST">
            <div class="input-field">
              <h3>For Register as core member (click below : )</h3>
              <label for="core">
                <input type="checkbox" id="core" name="type" onChange={(e) => { setcore(!core) }} />
              </label>
            </div>
            <div class="input-field">
              <h3>Name :</h3>
              <label for="name">
                <input type="name" id='name' value={name} onChange={(e) => setname(e.target.value)} placeholder='John Dey ' />
              </label>
            </div>
            <div class="input-field">
              <h3>Email :</h3>
              <label for="email">
                <input type="email" id='email' value={email} onChange={(e) => setemail(e.target.value)} placeholder='abcd@1234gmail.com ' />
              </label>
            </div>
            <div class="input-field">
              <h3>Password :</h3>
              <label for="password">
                <input type="password" id='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter password' autoComplete='off' />
              </label>
            </div>
            {
              (core) ?
                <div class="input-field">
                  <h3>Member ID :</h3>
                  <label for="password">
                    <input type="text" id='member' value={member} onChange={(e) => setmember(e.target.value)} placeholder='Enter member id' required />
                  </label>
                </div> : ""
            }
            <div className='login_register_btns'>
            <Button variant='contained' className='btn1' onClick={() => { Navigate("/") }}>Register Now</Button>
            <br />
            <h2>or</h2>
            <br />
            <Button variant='contained' className='btn2' onClick={() => { Navigate("/login") }}>Login</Button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Register