import React from "react";

import JoinPage from "../JoinPage";

function Portal({ text, className, onClick, buttonStyle }) {
  return (
    <section className={className}>
      <button className={buttonStyle} onClick={onClick}>
        {text}
      </button>
    </section>
  );
}
export default Portal;
