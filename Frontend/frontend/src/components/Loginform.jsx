import React, { useState } from "react";
import "../Styles/LoginForm.css";
import axios from "axios";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const LoginFormx = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        email,
        password,
      });
      // setStatus(`Login successful! Redirecting...`);
      // navigate('/redirect'); // Use the correct path
      navigate("/login-button");
    } catch (error) {
      setStatus(`Login failed: ${error.message}`);
    }
  };

  // const handleGoogleLoginSuccess = (credentialResponse) => {
  //   console.log("Google Login Success:", credentialResponse);
  //   // Example: send credentialResponse.credential to your backend
  //   // navigate('../');
  // };

  // const handleGoogleLoginFailure = (error) => {
  //   console.error("Google Login Failed:", error);
  //   setStatus(`Google login failed: ${error.message}`);
  // };

  return (
    <div className="login-container">
      <h1>
        Fine<span className="bold">Cards</span>
      </h1>

      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <a href="login-button">
          <button type="submit" className="login-button">
            Login
          </button>
        </a>
        <p>{status}</p>
        <a href="/forgot-password" className="forgot-password">
          Forgot Password?
        </a>
        <div className="alternative-login">
          <p>or sign in with</p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="create-account-link">
          <a href="/create-account">Create an account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginFormx;
