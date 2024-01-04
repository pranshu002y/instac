import React, { useState } from 'react';
import './signup.css'
import { registerUser } from './services/authService';
import { useNavigate } from 'react-router-dom';
// name,userName,email,password,gender
function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    gender:'male'
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }

    if (!formData.name) {
      validationErrors.name = 'Full name is required';
    }

    if (!formData.userName) {
      validationErrors.userName = 'Username is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("first",formData)
    registerUser(formData);
    navigate("/")

  };
  const navigate = useNavigate();

  return (
    <main>
      <div className="page">
        <div className="header">
          <h1 className="logo">Instagram</h1>
          <p>Sign up to see photos and videos from your friends.</p>
          <button onClick={()=> navigate("/")}><i className="fab fa-facebook-square"></i> Log in </button>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Mobile Number or Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span>{errors.email}</span>}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span>{errors.name}</span>}
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleInputChange}
            />
            {errors.userName && <span>{errors.userName}</span>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <span>{errors.password}</span>}
            <button type="submit">Sign up</button>
          </form>
          <ul>
            <li>By signing up, you agree to our</li>
            <li><a href="">Terms</a></li>
            <li><a href="">Data Policy</a></li>
            <li>and</li>
            <li><a href="">Cookies Policy</a>.</li>
          </ul>
        </div>
      </div>
      <div className="option">
        <p>Have an account? <a href="">Log in</a></p>
      </div>
      <div className="otherapps">
        <p>Get the app.</p>
        <button type="button"><i className="fab fa-apple"></i> App Store</button>
        <button type="button"><i className="fab fa-google-play"></i> Google Play</button>
      </div>
      <div className="footer">
        <ul>
          <li><a href="">ABOUT</a></li>
          <li><a href="">HELP</a></li>
          <li><a href="">PRESS</a></li>
          <li><a href="">API</a></li>
          <li><a href="">JOBS</a></li>
          <li><a href="">PRIVACY</a></li>
          <li><a href="">TERMS</a></li>
          <li><a href="">LOCATIONS</a></li>
          <li><a href="">TOP ACCOUNTS</a></li>
          <li><a href="">HASHTAGS</a></li>
          <li><a href="">LANGUAGE</a></li>
        </ul>
        <p>© 2020 PICTUREGRAM</p>
      </div>
    </main>
  );
}

export default SignUpPage;
