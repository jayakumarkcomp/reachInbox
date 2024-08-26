import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '../AppBar/index';
import Footer from '../Footer/index';
import google from '../../assets/google.svg';
import './index.css';

function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Exchange the authorization code for an access token
      fetch(`https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/`,
      })
      .then(response => response.json())
      .then(data => {
        setToken(data.access_token);
        navigate('/', { replace: true });
      })
      .catch(error => console.error(error));
    }
  
  },[] );

 

    const handleGoogleLogin = () => {
      const redirectUrl = 'http://localhost:3000/'
     
      const googleLoginUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${encodeURIComponent(
        redirectUrl
      )}`;
  
      
      window.location.href = googleLoginUrl;
  };

  return (
    <div>
      <AppBar />
      <div className="login-container">
        <div className="login-card">
        <div className="login-header">
        <div className="title">Create a new account</div>
        <div className="google-btn" onClick={handleGoogleLogin}>
          <img src={google} alt="google" />
          Sign Up with Google
        </div>
      </div>
      <div className="login-footer">
        <Link to="/login" className="create-account-btn">
          Create an Account
        </Link>
        <div className="already-have-account">
          Already have an account?{' '}
          <Link to="/login" className="sign-in-link">
            Sign In
          </Link>
        </div>
      </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;