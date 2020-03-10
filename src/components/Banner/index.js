import React from "react";
import css from "./Banner.module.css";

function Banner({ heading }) {
  return (
    <section className={css.bannerSection}>
      <h1>{heading}</h1>
    </section>
  );
}

export default Banner;
