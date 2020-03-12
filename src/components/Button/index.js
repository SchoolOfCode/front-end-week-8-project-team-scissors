import React from "react";
import css from "./Button.module.css";

function Button({ handleClick, text }) {
  return (
    <button className={css.classButton} onClick={() => handleClick()}>
      {text}
    </button>
  );
}

export default Button;
