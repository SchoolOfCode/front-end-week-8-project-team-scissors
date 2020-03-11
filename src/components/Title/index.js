import React from "react";
import css from "./Title.module.css";

function Title({ title, grid }) {
  return (
    <section className={grid}>
      <h1>{title}</h1>
    </section>
  );
}

export default Title;
