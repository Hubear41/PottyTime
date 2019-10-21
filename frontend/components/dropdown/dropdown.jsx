import React from 'react';

const Dropdown = props => {
    const { loggedIn } = props;

    const handleClick = e =>  {
        props.openModal("login");
    }

    const handleLogoutClick = e => {
        props.logoutUser();
    }

    let sessionButton = null;
    if ( loggedIn ) {
        sessionButton = (
            <li 
              className="dropdown-item"
              onClick={handleLogoutClick}
            >
                Log out
            </li>
        );
    } else {
        sessionButton = (
            <li 
              className="dropdown-item"
              onClick={handleClick}
            >
                Sign up or Log in
            </li>
        );
    }

    return (
        <ul className="nav-dropdown-menu">
            {sessionButton}
        </ul>
    );
}

export default Dropdown