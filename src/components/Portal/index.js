import React from "react";

function Portal({ link, grid, handleClick }) {
  return (
    <section className={grid}>
      <button onClick={() => handleClick()}>{link}</button>
    </section>
  );
}

export default Portal;
