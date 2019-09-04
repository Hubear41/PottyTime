import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash_container';
import SearchIndex from './search_index/search_container';
import Navbar from './splash/splash_nav_container';

const App = () => (
    <>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Splash} />
        <Route path="/bathrooms" component={SearchIndex} />
    </>
);

export default App;