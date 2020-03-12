import React from "react";

import { BrowserRouter as Link } from "react-router-dom";

import Banner from "../Banner";
import Content from "../Content";
import Portal from "../Portal";
import Counter from "../Counter";

import css from "./FrontPage.module.css";

const banner = {
  type: "banner",
  heading: "Plant a Tree. Let's lead a new green revolution"
};

const content1 = {
  type: "content",
  title: "Benefit 1",
  text:
    "One tree can absorb 1 ton of carbon dioxide in 40 years. That's up to 48 pounds a year! This improves the air quality of the surrounding area."
};

const content2 = {
  type: "content",
  title: "Benefit 2",
  text:
    "A tree's leaves absorb and block sound. Lining a street with trees has reduced noise pollution by as much as 40% in some areas! Tree canopies (the leafy part at the very top) also cool down streets. The evaporation from one tree has the effect of 10 air-coolers."
};

const portal = { type: "portal", link: "insert link here" };

function FrontPage() {
  return (
    <section className={css.frontPage}>
      <Banner {...banner} />
      <Content {...content1} grid={css.contentGrid1} />
      <Content {...content2} grid={css.contentGrid2} />
      <Content grid={css.contentGrid3} />
      <Counter grid={css.counterGrid1} counterText={css.counterText} />
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
