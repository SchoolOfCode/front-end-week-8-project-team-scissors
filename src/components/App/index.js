import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import css from "./App.module.css";

import Banner from "../Banner";
import Content from "../Content";
import Portal from "../Portal";
import Counter from "../Counter";

const banner = {
  type: "banner",
  heading:
    "Some motivating and inspired call to action. blah blah we need to plant trees to combat climate change and lead the way for a new green revolution"
};

const content = {
  type: "content",
  title: "benefits blah",
  text: "here are the benefits of planting trees blah blah blah"
};

const portal = { type: "portal", link: "insert link here" };

function App() {
  return (
    <section className={css.appBody}>
      <Banner {...banner} />
      <Content {...content} grid={css.contentGrid1} />
      <Content {...content} grid={css.contentGrid2} />
      <Content {...content} grid={css.contentGrid3} />
      <Counter grid={css.counterGrid1} />
      <Portal {...portal} grid={css.portalGrid1} />
      <Portal {...portal} grid={css.portalGrid2} />
    </section>
  );
}

export default App;
