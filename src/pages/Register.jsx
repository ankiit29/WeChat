import React from 'react';
import "../";

function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">WeChat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="file" placeholder='Add an Avatar'/>
                <button>Sign Up</button>
            </form>
            <p>Do not have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
