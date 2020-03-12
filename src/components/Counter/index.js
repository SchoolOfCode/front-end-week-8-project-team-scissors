import React, { useState, useEffect } from "react";

function Counter({ grid, counterText }) {
  const [counter, setCounter] = useState(1045);
  const randomTime = Math.floor(Math.random() * 10000);
  console.log(randomTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, randomTime);
    return () => {
      clearInterval(interval);
    };
  }, [counter]);
  return (
    <section className={grid}>
      <h1 className={counterText}>
        Together we have planted{" "}
        <span style={{ color: "#f58025" }}>{counter}</span> trees!
      </h1>
    </section>
  );
}

export default Counter;
