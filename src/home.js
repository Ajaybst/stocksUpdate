import React from "react";

import "./global.css";
let Home = () => {
  return (
    <>
      <div className="parent">
        <div className="aboutMeDiv">
          <div className="h4">
            <h1>Welcome to the</h1>
          </div>
          <div>
            <h1 className="h1 websiteName">stocksUpdate</h1>
          </div>
          <div className="button">
            <button>About Us</button>
          </div>
          <div className="button">
            <button>Register</button>
          </div>
        </div>
        <div className="registrationFormDiv">
          <div className="login">
            <h1>Log-in</h1>
          </div>
          <div className="loginForm">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="log-in" />
            <button>Log-In</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
