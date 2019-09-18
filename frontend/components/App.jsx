import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./splash/splash_container";
import SearchIndex from "./search_index/search_container";

const App = () => (
  <>
    <Switch>
      <Route path="/bathrooms" component={SearchIndex} />
      <Route path="/" component={Splash} />
    </Switch>
  </>
);

export default App;
