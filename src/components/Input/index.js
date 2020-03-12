import React from "react";

import css from "./Input.module.css";

function Input({ value, setValue, label }) {
  function handleInput(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handleInput}></input>
    </div>
  );
}

export default Input;
