import React from 'react';

const SplashNav = props => {
    const handleLogin = e => {
        props.openModal('login');
    }

    const handleSignup = e => {
        props.openModal('signup');
    }

    return (
        <header className="splash-nav-wrapper">
            <h1 className='splash-title'>Comfort Station</h1>

            <div className="splash-nav-btns">
                <button className="splash-login" onClick={handleLogin}>Log In</button>
                <button className="splash-signup" onClick={handleSignup}>Sign Up</button>
            </div>
        </header>
    )
}

export default SplashNav;