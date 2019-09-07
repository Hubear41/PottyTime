import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./splash/splash_container";
import SearchIndex from "./search_index/search_container";
import Navbar from "./splash/splash_nav_container";
import BathroomShow from "./bathrooms/bathroom_show_container";

const App = () => (
  <>
    <Route path="/" component={Navbar} />
    <Switch>
      <Route exact path="/bathrooms/:id" component={BathroomShow} />
      <Route path="/bathrooms" component={SearchIndex} />
      <Route exact path="/" component={Splash} />
    </Switch>
  </>
);

export default App;
