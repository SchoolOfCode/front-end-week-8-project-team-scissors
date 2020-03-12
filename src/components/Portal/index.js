import React from "react";

import JoinPage from "../JoinPage";

function Portal({ text, className, onClick }) {
  return (
    <section className={className}>
      <button
        style={{
          backgroundColor: "#F58025"
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </section>
  );
}
export default Portal;
