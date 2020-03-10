import React from "react";

function Link({ link, grid }) {
  return (
    <section className={grid}>
      <button>{link}</button>
    </section>
  );
}

export default Link;
