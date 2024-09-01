// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Styles/HomePage1.css';
import aiImage from '../pics/path3.png'; // Ensure this path is correct
// import { useAuth0 } from "@auth0/auth0-react";
const NavBar = () => {
  // const { loginWithRedirect,logout,isAuthenticated ,user} = useAuth0();
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <h1>Fine<span className="highlight">Cards</span></h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
        
        {/* <li className="navbar-links">{isAuthenticated && <p>{user.name}</p>}</li>
        {isAuthenticated ?(
          <li><button className='quote-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li>)
          :( <li><button className='quote-button' onClick={() => loginWithRedirect()}>Log In</button></li>
      )} */}
          
      </ul>

      <Link to="/login">
      <button className="quote-button">Login</button>

      </Link>
      <button className="quote-button">Get Quotes</button>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* <h2 className="text-white">Delivering Superior Services</h2> */}
        <p>Delivering Superior Services</p>
        <h3>Your One Stop <span className="highlight">Solution.</span></h3>
        <p>
          Easily customize any design to your needs. Our templates are SEO-friendly and highly customizable.
        </p>
        <div className="hero-buttons">
          <button className="primary-button">Get Quotes</button>
          <button className="secondary-button">Get Started</button>
        </div>
        {/* <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div> */}
      </div>
      <div className="hero-image">
        <img src={aiImage} alt="AI Illustration" />
      </div>
    </section>
  );
};


const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <HeroSection />
      {/* <ServiceIcons/> */}
    </div>
  );
};

export default HomePage;
