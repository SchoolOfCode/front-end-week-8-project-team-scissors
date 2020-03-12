import React from "react";
import css from "./Button.module.css";

function Button({ handleClick, text, className }) {
  return (
    <button
      className={css.classButton + " " + className}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
}

export default Button;
