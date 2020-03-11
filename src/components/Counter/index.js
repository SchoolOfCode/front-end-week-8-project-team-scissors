import React, { useState, useEffect } from "react";

function Counter({ grid }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("/numberOfTrees")
      .then(response => response.json())
      .then(data => setCounter(data));
  }, [counter]);

  return (
    <section className={grid}>
      <p>{counter}</p>
    </section>
  );
}

export default Counter;
