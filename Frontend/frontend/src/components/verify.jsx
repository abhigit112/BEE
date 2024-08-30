import React, { useState } from 'react';
import axios from 'axios';
const Verification = () => { 
    // const [email, setEmail] = useState('');
    // const[password,setpasword]=useState('')


    const [status, setStatus] = useState('');
    const [otp, setotp] = useState('');


    const verifyotp = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/signup', {otp,password,email});
            setStatus(`Message sent! SID: ${response.data.message}`);
        } catch (error) {
            setStatus(`Failed to send message: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Verify OTP</h1>
          
            <input
            type='number'
            placeholder='otp'
            value={otp}
            onChange={(e)=>setotp(e.target.value)}/><br/>
            <button onClick={verifyotp}>Submit</button>
            <p>{status}</p>

         
          

                        


        </div>
    );
};

export default Verification;