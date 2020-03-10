import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import css from "./App.module.css";

import JoinPage from "../JoinPage";
import FrontPage from "../FrontPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Join">
          <JoinPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
