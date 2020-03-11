import React from "react";

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
