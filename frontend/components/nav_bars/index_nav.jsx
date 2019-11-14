import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchBar from "../search_bar/search_bar_container";
import FilterToggle from "./filter_toggle.jsx";
import Dropdown from "../dropdown/dropdown_container";

const IndexNav = props => {
  const { filterBarHidden } = props;
  const pathname = props.location.pathname.split("/");
  const locationCheck =
    pathname.length > 2
      ? pathname[2].slice(0, 3) === "new"
        ? true
        : false
      : false;

  return (
    <div id="index-navbar">
      <Link to="/bathrooms" className="logo-round index-logo">
        <span>
          <strong>P</strong>
        </span>
      </Link>

      <aside id="index-nav-left">
        <SearchBar />
        {/* {props.location.pathname === "/bathrooms" ? ( */}
        <FilterToggle
          filterBarHidden={filterBarHidden}
          revealFilterBar={props.revealFilterBar}
          hideFilterBar={props.hideFilterBar}
        />
        {/* ) : null} */}
      </aside>

      {/* <label id="navbar-dropdown-label">
        <i className="fas fa-bars"></i>
        <Dropdown />
      </label> */}
      {locationCheck ? null : (
        <Link to="/bathrooms/new" className="new-btn">
          <i className="fas fa-plus"></i>
        </Link>
      )}
    </div>
  );
};

export default withRouter(IndexNav);
