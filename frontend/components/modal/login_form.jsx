import React, { useState } from "react";

const LoginForm = props => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.loginUser({ email, password }).then(action => props.closeModal());
  }

  return (
    <form className="login-form-container">
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="text"
        className="email-input"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        className="password-input"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
