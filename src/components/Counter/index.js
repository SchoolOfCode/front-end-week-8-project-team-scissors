import React, { useState, useEffect } from "react";

<<<<<<< HEAD
function Counter({ grid, counterText }) {
  const [counter, setCounter] = useState(1045);
  const randomTime = Math.floor(Math.random() * 10000);
  console.log(randomTime);
=======
function Counter() {
  const [counter, setCounter] = useState(0);
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
  return <h1>{counter}</h1>;
}

export default Counter;

/* CODE TO BE USED TO FETCH ACTUAL TREE TOTAL FROM THE DATABASE
function Counter({ grid }) {
  const [counter, setCounter] = useState(0);

>>>>>>> 51b0ea835e0cc948b86da9cd71a59c7657528691
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
*/
