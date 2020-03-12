import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import css from "./App.module.css";

import JoinPage from "../JoinPage";
import FrontPage from "../FrontPage";
import MapPage from "../MapPage";
import RequestPage from "../RequestPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Join">
          <JoinPage />
        </Route>
        <Route path="/Request">
          <RequestPage />
        </Route>
        <Route path="/Maps">
          <MapPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
