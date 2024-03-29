import React from "react";
import { withRouter, Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar_container";

const SplashNav = props => {
  const loggedOutButtons = (
    <>
      <button
        className="splash-login nav-button"
        onClick={() => props.openModal("login")}
      >
        <span>Log In</span>
      </button>
      <button
        className="splash-signup nav-button"
        onClick={() => props.openModal("signup-form")}
      >
        <span>Sign Up</span>
      </button>
    </>
  );

  const loggedIn = props.currentUser ? (
    <button className="splash-logout nav-button" onClick={props.logoutUser}>
      <span>Logout</span>
    </button>
  ) : (
    loggedOutButtons
  );

  const navSearch = props.history.location.pathname.includes("/bathrooms") ? (
    <SearchBar />
  ) : null;

  return (
    <header className="splash-nav-wrapper">
      <div className="splash-nav-left">
        <h1 className="splash-title logo-full">
          <span>
            <strong>Potty</strong> Time
          </span>
        </h1>
        {navSearch}
      </div>
      <div className="splash-nav-btns">
        <div className="splash-nav-create">
          <Link className="create-link nav-button" to="/bathrooms/new">
            Create Bathroom
          </Link>
        </div>
        {/* {loggedIn} */}
      </div>
    </header>
  );
};

export default withRouter(SplashNav);
