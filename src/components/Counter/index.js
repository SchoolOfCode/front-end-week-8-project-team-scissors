import React, { useState, useEffect } from "react";

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
*/
