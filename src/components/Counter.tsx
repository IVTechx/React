import { useState } from "react";
import CounterButtons from "./CounterButtons";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Count: {count}</h1>
      <CounterButtons
        onInc={() => setCount(count + 1)}
        onDec={() => setCount(count - 1)}
        onReset={() => setCount(0)}
      />
    </div>
  );
};
