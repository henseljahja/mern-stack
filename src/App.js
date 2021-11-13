import React from "react";
import {
  BrowserRouter as Router,
  // Route,
  // Link,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Router path="/" exact>
          <Users />
        </Router>
        <Router path="/places/new" exact>
          <NewPlace />
        </Router>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
