import React from "react";
import css from "./Portal.module.css";

function Portal({ link, grid, handleClick }) {
  return (
    <section className={grid}>
      <button
        style={{ backgroundColor: "orange" }}
        onClick={() => handleClick()}
      >
        {link}
      </button>
    </section>
  );
}

export default Portal;
