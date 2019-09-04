import React from "react";
import { withRouter } from 'react-router-dom'; 
import SearchBar from '../search_bar/search_bar_container';

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

  const navSearch = props.history.location.pathname === "/bathrooms" ? (
    <SearchBar />
  ) : null;

  return (
    <header className="splash-nav-wrapper">
      <div className="splash-nav-left">
        <h1 className="splash-title">Comfort Station</h1>
        {navSearch}
      </div>
      {loggedIn}
    </header>
  );
};

export default withRouter(SplashNav);
