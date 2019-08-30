import React from "react";

const SplashNav = props => {
  const loggedOutButtons = (
    <div className="splash-nav-btns">
      <button className="splash-login" onClick={() => props.openModal("login")}>
        Log In
      </button>
      <button
        className="splash-signup"
        onClick={() => props.openModal("signup")}
      >
        Sign Up
      </button>
    </div>
  );

  const loggedIn = props.currentUser ? (
    <button className="logout-button" onClick={props.logoutUser}>
      Logout
    </button>
  ) : (
    loggedOutButtons
  );
  return (
    <header className="splash-nav-wrapper">
      <h1 className="splash-title">Comfort Station</h1>
      {loggedIn}
    </header>
  );
};

export default SplashNav;
