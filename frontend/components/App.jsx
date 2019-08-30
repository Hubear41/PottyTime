import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash_container';
import SearchIndex from './search/search_container';

const App = () => (
    <>
        <Route exact path="/" component={Splash} />
        <Route path="/bathrooms" component={SearchIndex} />
    </>
);

export default App;