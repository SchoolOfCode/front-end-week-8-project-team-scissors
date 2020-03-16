import React from "react";
import css from "./Content.module.css";

function Content({ title, text, grid }) {
  return (
    <section className={grid}>
      <p> {text}</p>
    </section>
  );
}

export default Content;
