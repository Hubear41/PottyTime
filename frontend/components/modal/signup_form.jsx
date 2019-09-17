import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const SignUpForm = props => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    if (confirmPass === password) {
      props
        .signupUser({ password, email: email.toLowerCase() })
        .then(action => props.closeModal())
        .then(() => props.history.push("/bathrooms"));
    }
  }

  return (
    <div id="signup-form">
      
      <form className="signup-form-container">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="password"
        />
        <label htmlFor="confirm">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPass}
          onChange={e => setConfirmPass(e.target.value)}
          placeholder="confirm password"
        />
        <button type="submit" onClick={handleSumbit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
