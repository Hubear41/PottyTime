import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar_container";
import FilterToggle from "./filter_toggle.jsx";
import Dropdown from "../dropdown/dropdown_container";

const IndexNav = props => {
  const { filterBarHidden } = props;

  return (
    <div id="index-navbar">
      <aside id="index-nav-left">
        <Link to="/" className="logo-round index-logo">
          <span>
            <strong>P</strong>
          </span>
        </Link>
        <SearchBar />
        <FilterToggle
          filterBarHidden={filterBarHidden}
          revealFilterBar={props.revealFilterBar}
          hideFilterBar={props.hideFilterBar}
        />
      </aside>

      {/* <label id="navbar-dropdown-label">
        <i className="fas fa-bars"></i>
        <Dropdown />
      </label> */}
    </div>
  );
};

export default IndexNav;
