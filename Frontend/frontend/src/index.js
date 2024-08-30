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



import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import HomePage from './components/HomePage1';

const clientId = "519863360942-shugco8nc8bs613ofii1ipcrg993mac7.apps.googleusercontent.com";

// const router = createBrowserRouter([
//   {
//   path:"/",
//   element:"HomePage"
//   },
//   {
//     path:"/"
//   }
// ]) 


ReactDOM.render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>,
  document.getElementById('root')
);

