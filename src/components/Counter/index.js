import React, { useState, useEffect } from "react";

function Counter({ grid }) {
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
      <h1>{counter}</h1>
    </section>
  );
}

export default Counter;
