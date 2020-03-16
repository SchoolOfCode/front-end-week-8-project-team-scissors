import React from "react";

import { useHistory } from "react-router-dom";

import Banner from "../Banner";
import Content from "../Content";
import Portal from "../Portal";
import Counter from "../Counter";
import Header from "../Header";

import css from "./FrontPage.module.css";

const banner = {
  type: "banner",
  heading: "Plant a tree. Let's lead a new green revolution"
};

const content1 = {
  type: "content",

  text:
    "One tree can absorb 1 ton of carbon dioxide in 40 years. That's up to 48 pounds a year! This improves the air quality of the surrounding area."
};

const content2 = {
  type: "content",

  text:
    "Lining a street with trees has reduced noise pollution by as much as 40% in some areas! Tree canopies also cool down streets. The evaporation from one tree has the effect of 10 air-coolers."
};

function FrontPage() {
  const history = useHistory();

  return (
    <section className={css.frontPage}>
      <Header grid={css.contentGrid4} />
      <Banner {...banner} />
      <Content {...content1} grid={css.contentGrid1} />
      <Content {...content2} grid={css.contentGrid2} />
      <Counter
        grid={css.counterGrid1 + " " + css.contentGrid3}
        counterText={css.counterText}
      />
      <Portal
        buttonStyle={css.portalStyle}
        className={css.portalGrid1}
        onClick={() => {
          history.push("/maps");
        }}
        text={"See how far we've come"}
      />
      <Portal
        buttonStyle={css.portalStyle}
        className={css.portalGrid2}
        onClick={() => {
          history.push("/join");
        }}
        text={"Join our project"}
      />
    </section>
  );
}

export default FrontPage;
