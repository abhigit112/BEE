// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Auth0Provider } from '@auth0/auth0-react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Auth0Provider
//   domain="dev-xgo2tvhe1drvyesp.us.auth0.com"
//   clientId="8UaLnpHg7m9BmxGI9ffKEv8n44rhToYR"
//   authorizationParams={{
//     redirect_uri: window.location.origin
//   }}
// >
//   <App />
// </Auth0Provider>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="836702564374-kiiqeuscr947e2ktdms2tk61d61dqio0.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
