import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash_container';

const App = () => (
    <Route exact path="/" component={Splash} />
)

export default App;