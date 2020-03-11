import React from "react";

import { BrowserRouter as Link } from "react-router-dom";

import Banner from "../Banner";
import Content from "../Content";
import Portal from "../Portal";
import Counter from "../Counter";

import css from "./FrontPage.module.css";

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

function FrontPage() {
  return (
    <section className={css.frontPage}>
      <Banner {...banner} />
      <Content {...content} grid={css.contentGrid1} />
      <Content {...content} grid={css.contentGrid2} />
      <Content {...content} grid={css.contentGrid3} />
      <Counter grid={css.counterGrid1} />
      <Link to="/Maps">
        <Portal grid={css.portalGrid1} {...portal} />
      </Link>
      <Link to="/Join">
        <Portal grid={css.portalGrid2} {...portal} />
      </Link>
    </section>
  );
}

export default FrontPage;
