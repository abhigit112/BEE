import React, { useState } from 'react';
import '../Styles/Myform.css';
import googleLogo from '../pics/logo.png'; // Import the Google logo
import axios from 'axios';

const Myform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Fixed typo in setPassword
  const [status, setStatus] = useState('');
  const [otp, setotp] = useState('');

  // const navigate = useNavigate(); // Get navigate function

  const verifyotp = async () => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/signup', {otp,password,email});
        setStatus(`Message sent! SID: ${response.data.message}`);
    } catch (error) {
        setStatus(`Failed to send message: ${error.message}`);
    }
};

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:3000/api/v1/sendotp', { email });
      setStatus(`Message sent! SID: ${response.data.message}`);
      // navigate('/login-button'); // Redirect to the correct page
    } catch (error) {
      setStatus(`Failed to send message: ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <h1
      className="text-3xl"
      >Fine<span className="bold">Cards</span></h1>
      <h2>Create an account</h2>
      <form onSubmit={sendEmail}> {/* Add onSubmit handler */}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Fixed typo in setPassword
        /><br/>
        
        <button type='submit' className='login-buttonx'>Send SMS</button>
        <p>{status}</p>

        <h1>Verify Otp</h1>
        <div
        className="flex justify-center items-center flex-col"
        >
        <input
            className="w-2/4 p-3 border border-gray-400"
            type='number'
            placeholder='Enter OTP'
            value={otp}
            onChange={(e)=>setotp(e.target.value)}/><br/>
            <button onClick={verifyotp}className='signup-button'>Submit</button>
            <p>{status}</p>
          
        </div>
        <div className="alternative-signup">
          <p>or sign up with</p>
          <button type="button" className="google-signup" >
            <img src={googleLogo} alt="Google" className="google-logo" />
            Continue with Google
          </button>
        </div>
        <div className="signin-link">
          <p>Already have an account? <a href="/signin">Sign in here</a></p>
        </div>
      </form>
    </div>
  );
};

export default Myform;
