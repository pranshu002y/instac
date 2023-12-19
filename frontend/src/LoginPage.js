import React, { useState, useEffect } from 'react';
import "./LoginPage.css"
import slide1 from "../src/photos/slide1.jpg"
import slide2 from "../src/photos/slide2.jpg"
import slide3 from "../src/photos/slide3.jpg"
import slide4 from "../src/photos/slide4.jpg"
import slide5 from "../src/photos/slide5.jpg"
import light from "../src/photos/insta light.png"
import dark from "../src/photos/insta dark.png"
import facebook from "../src/photos/facbook.png"  
import pic3 from "../src/photos/pic3.png"
import pic2 from "../src/photos/pic2.png"
import {loginUser,getLoginStatus} from "./services/authService";
import {useDispatch, useSelector} from "react-redux";
import {SET_LOGIN} from "./redux/features/auth/authSlice";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
const navigate = useNavigate();
const { REACT_APP_API_PORT } = process.env;
  const dispatch = useDispatch();
 
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState(false);
  const [err, setErr] = useState("");
  const checkUser = useSelector((state) => state.auth.user)

  const login = async (e)=>{
      e.preventDefault();
      if (!userName || !password) {

      }

      const input = {
          userName,
          password
      }
      try {
          const data = await loginUser(input);
          if (!data.response){
             const status = await getLoginStatus();
             Cookies.set('userID', data._id);
             console.log("nidhi mc")
              if (status===true){
                 dispatch(SET_LOGIN(true))
                  console.log(data,"hi1")
           
     
              }
              // console.log(data,"logged")
              navigate("/homepage")
              console.log("nidhi mc")

          }else{
              setErr(data.response.data.message)
          }



      } catch (error) {
          console.log("Failed to establish an efficient connection to the server!")
      }
  }


  const [slideIndex, setSlideIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [inputs, setInputs] = useState({
  //   username: '',
  //   password: ''
  // });

  const slide = () => {
    const slideItems = document.querySelectorAll('#slide-content img');
    slideItems.forEach(e => e.classList.remove('active'));
    const newIndex = slideIndex + 1 === slideItems.length ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
    slideItems[newIndex].classList.add('active');
  };

  useEffect(() => {
    const interval = setInterval(slide, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  const handleShowPassword = () => {
    const passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput.getAttribute('type') === 'text') {
      passwordInput.setAttribute('type', 'password');
    } else {
      passwordInput.setAttribute('type', 'text');
    }
  };

  // const checkSigninInput = () => {
  //   return Object.values(inputs).every(value => value.trim().length >= 4);
  // };

  const handleDarkModeToggle = (e) => {
    e.preventDefault();
    setIsDarkMode(prevState => !prevState);
  };

  // console.log(REACT_APP_API_PORT)

  return (
    <div className={`container ${isDarkMode ? 'dark' : ''}`}>
      <div className="main-container">
        <div className="main-content">
          <div className="slide-container">
            <div className="slide-content" id="slide-content">
              <img src={slide1} alt="slide image" className={slideIndex === 0 ? 'active' : ''} />
              <img src={slide2} alt="slide image" className={slideIndex === 1 ? 'active' : ''} />
              <img src={slide3} alt="slide image" className={slideIndex === 2 ? 'active' : ''} />
              <img src={slide4} alt="slide image" className={slideIndex === 3 ? 'active' : ''} />
              <img src={slide5} alt="slide image" className={slideIndex === 4 ? 'active' : ''} />
            </div>
          </div>
          <div className="form-container">
            <div className="form-content box">
              <div className="logo">
                <img src={light} alt="Instagram logo" className="logo-light" />
                <img src={dark} alt="Instagram logo" className="logo-dark" />
              </div>
              <div className="signin-form" id="signin-form">
                <div className="form-group">
                  <div className="animate-input">
                   
                    <input type="text" name="username" onChange={event => setUserName(event.target.value)} placeholder={"Phone number, username or email"} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="animate-input">
                   
                    <input type="password" name="password"  onChange={event => setPassword(event.target.value)} placeholder={"Password"} />
                    <button onClick={handleShowPassword}>Show</button>
                  </div>
                </div>
                <div className="btn-group">
                  <button className="btn-login" id="signin-btn" 
                  // disabled={!checkSigninInput()} 
                   onClick={login}>
                    Log In
                  </button>
                </div>
                <div className="divine">
                  <div></div>
                  <div>OR</div>
                  <div></div>
                </div>
                <div className="btn-group">
                  <button className="btn-fb">
                    <img src={facebook} alt="facebook logo" />
                    <span>
                      <a href="https://www.facebook.com/">Log in with Facebook</a>
                    </span>
                  </button>
                </div>
                <a href="https://www.instagram.com/accounts/password/reset/" className="forgot-pw">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="box goto">
              <p onClick={()=> navigate("/signup")}>
                Don't have an account? Sign up
              </p>
            </div>

            <div className="app-download">
              <p>Get the app.</p>
              <div className="store-link">
                <a href="https://www.apple.com/in/app-store/">
                  <img src={pic2} alt="app store" />
                </a>
                <a href="https://play.google.com/store">
                  <img src={pic3} alt="google play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <a href="https://about.instagram.com/">About</a>
          <a href="https://about.instagram.com/en_US/blog">Blog</a>
          <a href="https://about.instagram.com/about-us/careers">Jobs</a>
          <a href="https://help.instagram.com/">Help</a>
          <a href="https://developers.facebook.com/docs/instagram">API</a>
          <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0">Privacy</a>
          <a href="https://help.instagram.com/581066165581870">Terms</a>
          <a href="https://www.instagram.com/directory/profiles/">Top Accounts</a>
          <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
          <a href="https://www.instagram.com/explore/locations/">Locations</a>
          <a href="#" id="darkmode-toggle" onClick={handleDarkModeToggle}>
            <b>{isDarkMode ? 'Lightmode' : 'Darkmode'}</b>
          </a>
        </div>
        <div className="copyright">
          © 2021 Instagram from Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
