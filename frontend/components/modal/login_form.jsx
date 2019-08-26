import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="login-form-container">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className="username-input"
          onChange={this.handleChange("username")}
          value={this.state.username}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="password-input"
          onChange={this.handleChange("password")}
          value={this.state.password}
        />
      </div>
    );
  }
}

export default LoginForm;
