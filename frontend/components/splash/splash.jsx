import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import SplashNav from './splash_nav';

const Splash = props => {
    const [location, updateLocation] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // search and redirect to map page
    }

    const handleChange = e => {
        updateLocation(e.target.value);
    }

    return (
        <div className="splash-wrapper">
            <SplashNav openModal={props.openModal} />

            <form className="splash-form" onSubmit={handleSubmit}>
                <label htmlFor="location">Location: </label>
                <input type="text" 
                       onChange={handleChange}
                       placeholder="Search" 
                       value={location} 
                />
                <input type="submit" value="Search Nearby" />
            </form>
        </div>
    );
}

export default withRouter(Splash);