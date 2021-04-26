import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="display-box">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="welcome-para">
          Welcome to the EverNote Clone made with ReactJS, Google Firebase and
          React Quill.
        </p>
        <p className="welcome-para">
          Create a new Note , update it and save it on the cloud for later or
          delete it if it's no longer relevent :)
        </p>
      </div>
    </div>
  );
};

export default Welcome;
