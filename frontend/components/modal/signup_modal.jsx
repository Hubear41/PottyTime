import React, { useEffect, useState, useRef } from "react";

const SignupModal = props => {
  return (
    <div className="signup-form-container">
      <div className="close-modal-button">
        <h1 onClick={props.closeModal}>X</h1>
      </div>
      <div className="signup-button-container">
        <div className="facebook-button">
          {" "}
          <p>Continue with Facebook</p>{" "}
        </div>
        <div className="google-button">
          {" "}
          <p>Continue with Google</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
