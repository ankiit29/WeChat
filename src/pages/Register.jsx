import React from 'react';
import add from "../img/addAvatar.png";
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
                <input type="file" style={{display:"none"}}id='file'/>
                <label htmlFor="file">
                    <img src={add} alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
